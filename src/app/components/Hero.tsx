"use client"

import { ArrowDownTrayIcon, ArrowDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { Button } from "./ui"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute inset-0 dot-pattern opacity-35 dark:opacity-15" />
      <div className="absolute inset-x-0 top-0 h-24 border-b border-zinc-200/70 bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/60" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="text-left">
          <div
            className={`mb-8 inline-flex items-center gap-3 border-l-2 border-emerald-500 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-soft dark:bg-zinc-900 dark:text-zinc-300 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="h-2 w-2 bg-emerald-500" />
            Fullstack Developer based in Ho Chi Minh City
          </div>

          <h1
            className={`max-w-3xl text-5xl font-bold leading-[0.98] text-zinc-950 dark:text-zinc-50 md:text-7xl lg:text-8xl font-playfair transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Nguyen Van Hieu
          </h1>

          <p
            className={`mt-6 text-xl font-medium text-zinc-700 dark:text-zinc-300 md:text-2xl transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="gradient-text font-semibold">Fullstack Developer</span>
          </p>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I build scalable web and mobile applications, production-ready APIs,
            robust admin dashboards, payment integrations, and AI-powered services
            for commercial products across Vietnam, Japan, and Singapore.
          </p>

          <div
            className={`mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="primary"
              size="lg"
              className="px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8"
              onClick={() => window.open("/FULLSTACK_DEVELOPER_NGUYEN_VAN_HIEU.pdf", "_blank")}
            >
              Download CV
              <ArrowDownTrayIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        </div>

        <div
          className={`relative transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border border-zinc-200 bg-white p-5 shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Portfolio Snapshot</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Laravel / Next.js / APIs / AI</p>
              </div>
              <div className="h-10 w-10 bg-zinc-950 text-center font-playfair text-2xl leading-10 text-white dark:bg-zinc-50 dark:text-zinc-950">
                H
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800">
              {[
                ["3", "Years"],
                ["3", "Key projects"],
                ["3", "Markets"],
                ["7", "Core stacks"],
              ].map(([value, label]) => (
                <div key={label} className="bg-zinc-50 p-5 dark:bg-zinc-900">
                  <p className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">{value}</p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Laravel", "PHP", "Next.js", "NestJS", "MySQL", "OpenAI"].map((tech) => (
                <span
                  key={tech}
                  className="border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors group"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDownIcon className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
