"use client"

import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <SunIcon 
        className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} 
      />
      <MoonIcon 
        className={`absolute w-5 h-5 text-blue-500 transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`} 
      />
    </button>
  )
}