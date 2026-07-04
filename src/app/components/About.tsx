"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const principles = [
  "Turn rough product flows into reliable systems",
  "Keep admin tools fast, clear, and maintainable",
  "Connect payments, CRM, AI, and analytics without drama",
]

const timeline = [
  ["2023", "Graduated from FPT College and moved deeper into production web systems."],
  ["2024 - 2025", "Built Laravel APIs, Filament dashboards, CRM sync, and AI learning services."],
  ["2026", "Focused on Next.js commerce, NestJS services, payment flows, and delivery quality."],
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-[#fffaf0] py-24 dark:bg-[#151827] lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d97706] dark:text-amber-200">
              About
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Systems that feel simple because the hard parts are handled.
            </h2>
          </div>

          <div
            className={`grid gap-6 transition-all duration-700 delay-100 md:grid-cols-[220px_minmax(0,1fr)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-amber-900/10 bg-[#ffe7c2] shadow-xl shadow-amber-900/10 dark:border-amber-200/15 dark:bg-white/10">
              <Image
                src="/avt.jpg"
                alt="Nguyen Van Hieu portrait"
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            </div>

            <div className="border-t border-amber-900/10 pt-6 dark:border-amber-200/15 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                I am a Fullstack Developer with 3 years of experience building scalable web and mobile application backends, production APIs, and internal dashboards for commercial products.
              </p>
              <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                My strongest work sits at the intersection of product logic and engineering execution: Laravel systems, modern frontend flows, payment integration, CRM synchronization, automation workflows, and AI-powered services with OpenAI and Gemini APIs.
              </p>

              <div className="mt-8 grid gap-3">
                {principles.map((item, index) => (
                  <div key={item} className="grid grid-cols-[42px_minmax(0,1fr)] items-start border-t border-amber-900/10 pt-3 dark:border-amber-200/15">
                    <span className="text-sm font-black text-[#ff6b4a] dark:text-orange-200">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-amber-900/10 bg-white/45 dark:border-amber-200/15 dark:bg-white/5 md:grid-cols-3">
          {timeline.map(([year, text], index) => (
            <div
              key={year}
              className={`p-5 md:border-r md:border-amber-900/10 md:last:border-r-0 dark:md:border-amber-200/15 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <p className="text-3xl font-black text-[#0f766e] dark:text-cyan-100">{year}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
