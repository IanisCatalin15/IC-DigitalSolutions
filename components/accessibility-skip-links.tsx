"use client"

export function AccessibilitySkipLinks() {
  return (
    <div className="sr-only focus:not-sr-only">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-50 bg-[#6c63ff] text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6c63ff] transition-all duration-200"
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="fixed top-4 left-32 z-50 bg-[#6c63ff] text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6c63ff] transition-all duration-200"
      >
        Skip to navigation
      </a>
    </div>
  )
}
