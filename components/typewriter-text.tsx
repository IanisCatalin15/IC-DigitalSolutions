"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  texts: string[]
  className?: string
}

export function TypewriterText({ texts, className = "" }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(text.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          setCurrentText(text.substring(0, currentText.length + 1))

          if (currentText === text) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts])

  // Find the longest text to set a fixed width
  const longestText = texts.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  )

  return (
    <span 
      className={`${className} inline-block`}
      style={{ 
        minWidth: `${longestText.length * 0.8}ch`,
        height: '1.2em',
        lineHeight: '1.2em',
        verticalAlign: 'top'
      }}
    >
      {currentText}
    </span>
  )
}
