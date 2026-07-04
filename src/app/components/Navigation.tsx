"use client"

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ThemeToggle } from "./ui"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "work", "contact"]
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-teal-900/10 bg-[#e8fbf4]/85 backdrop-blur-xl dark:border-cyan-200/10 dark:bg-[#081f2d]/85"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-teal-950 transition-colors dark:text-cyan-50"
          >
            <span className="flex h-8 w-8 items-center justify-center bg-[#0f766e] text-xs text-white transition-colors group-hover:bg-[#ff6b4a] dark:bg-[#7dd3fc] dark:text-slate-950">
              HV
            </span>
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-teal-950 dark:text-cyan-50"
                      : "text-teal-900/60 hover:text-teal-950 dark:text-cyan-100/60 dark:hover:text-cyan-50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#ff6b4a]" />
                  )}
                </a>
              )
            })}
            <div className="ml-3 border-l border-teal-900/10 pl-4 dark:border-cyan-200/10">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="border border-teal-900/15 bg-white/40 p-2 text-teal-900 transition-colors hover:bg-[#ff6b4a] hover:text-white dark:border-cyan-200/15 dark:bg-white/10 dark:text-cyan-100 dark:hover:bg-[#ffb703] dark:hover:text-slate-950"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-teal-900/10 bg-[#e8fbf4] px-4 py-4 dark:border-cyan-200/10 dark:bg-[#081f2d]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#0f766e] text-white dark:bg-[#7dd3fc] dark:text-slate-950"
                    : "text-teal-900/70 hover:bg-white/70 dark:text-cyan-100/70 dark:hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
