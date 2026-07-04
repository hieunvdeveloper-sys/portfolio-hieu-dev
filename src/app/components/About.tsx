"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "3", label: "Years Experience" },
    { value: "2023", label: "FPT College Graduate" },
    { value: "3", label: "Production Domains" },
  ]

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="sticky top-28 border border-zinc-200 bg-zinc-50 p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center bg-zinc-950 font-playfair text-4xl text-white dark:bg-zinc-50 dark:text-zinc-950">
                  HV
                </div>
                <div>
                  <p className="font-semibold text-zinc-950 dark:text-zinc-50">Nguyen Van Hieu</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Fullstack Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between border-b border-zinc-200 pb-4 last:border-b-0 last:pb-0 dark:border-zinc-800">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-4">
                About Me
              </span>
            </div>

            <h2
              className={`max-w-3xl text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 font-playfair leading-tight transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Building Production Systems with{" "}
              <span className="gradient-text">APIs, Admin Tools & AI</span>
            </h2>

            <div
              className={`grid gap-6 md:grid-cols-2 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="border-l-2 border-indigo-500 pl-5">
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  I&apos;m a Fullstack Developer with 3 years of experience building scalable web and mobile
                  applications, production-ready systems, APIs, and admin dashboards for commercial products.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  My work spans Laravel, modern frontend stacks, payment gateway integration, CRM sync,
                  automation workflows, and AI-powered services using OpenAI and Gemini APIs.
                </p>
              </div>
            </div>

            <div
              className={`mt-10 grid gap-4 sm:grid-cols-3 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {["Payment integrations", "AI-powered services", "Production-ready APIs"].map((item) => (
                <div key={item} className="border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
