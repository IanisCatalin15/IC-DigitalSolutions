"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    hj: (command: string, ...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Track page views
    const handleRouteChange = () => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
          page_location: window.location.href,
          page_title: document.title,
        })
      }
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])

  // Track conversion events
  const trackConversion = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", eventName, {
        event_category: "conversion",
        event_label: parameters?.label || "",
        value: parameters?.value || 0,
        ...parameters,
      })
    }
  }

  // Track user interactions
  const trackInteraction = (action: string, category: string, label?: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label || "",
      })
    }
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Hotjar Heatmaps */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID || 0},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID || ""}");
        `}
      </Script>
    </>
  )
}

// Export tracking functions for use in components
export { trackConversion, trackInteraction }

function trackConversion(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, {
      event_category: "conversion",
      event_label: parameters?.label || "",
      value: parameters?.value || 0,
      ...parameters,
    })
  }
}

function trackInteraction(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label || "",
    })
  }
}
