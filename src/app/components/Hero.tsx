"use client"

import { ArrowDownIcon, ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "./ui"

const metrics = [
  ["03", "years shipping products"],
  ["07", "core stacks"],
  ["03", "markets served"],
]

const stack = ["Laravel", "Next.js", "NestJS", "OpenAI", "Payments", "Automation"]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#e8fbf4] text-slate-950 dark:bg-[#081f2d] dark:text-white">
      <div className="absolute inset-0 dot-pattern opacity-45 dark:opacity-15" />
      <div className="absolute inset-x-0 top-0 z-0 h-24 bg-[#dff7ff]/70 dark:bg-[#081f2d]/75" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-4 pb-10 pt-24 sm:px-6 lg:grid-cols-[88px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden border-r border-teal-900/15 py-8 dark:border-cyan-200/15 lg:flex lg:flex-col lg:items-center lg:justify-between">
          <span className="vertical-rl text-xs font-semibold uppercase tracking-[0.35em] text-teal-800/70 dark:text-cyan-100/70">
            Fullstack Developer
          </span>
          <a
            href="#about"
            className="flex h-11 w-11 items-center justify-center border border-teal-900/20 bg-white/70 text-teal-800 transition-colors hover:bg-[#ff6b4a] hover:text-white dark:border-cyan-200/20 dark:bg-white/10 dark:text-cyan-100 dark:hover:bg-[#ffb703] dark:hover:text-slate-950"
            aria-label="Scroll to about"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </aside>

        <div className="grid items-end gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-10 lg:pl-10">
          <div className="pb-2 lg:pb-10">
            <div
              className={`mb-8 inline-flex items-center gap-3 border border-teal-700/20 bg-white/75 px-3 py-2 text-sm font-semibold text-teal-900 shadow-sm transition-all duration-700 dark:border-cyan-200/20 dark:bg-cyan-200/10 dark:text-cyan-100 ${
                mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <span className="h-2.5 w-2.5 bg-[#ff6b4a]" />
              Available for product and backend work
            </div>

            <h1
              className={`max-w-5xl text-[3.4rem] font-black leading-[0.86] tracking-normal text-slate-950 dark:text-white sm:text-7xl lg:text-[8.5rem] transition-all duration-700 delay-100 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Nguyen
              <span className="block text-[#0f766e] dark:text-[#7dd3fc]">Van Hieu</span>
            </h1>

            <div
              className={`mt-8 grid max-w-4xl gap-5 border-y border-teal-900/15 py-6 dark:border-cyan-200/15 md:grid-cols-[0.9fr_1.1fr] transition-all duration-700 delay-200 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                I build commercial web apps, APIs, admin systems, payment flows, and AI services.
              </p>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Focused on practical delivery for products across Vietnam, Japan, and Singapore using Laravel, Next.js, NestJS, and automation tooling.
              </p>
            </div>

            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="gap-2 rounded-md px-7"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Work
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-md border-teal-900/20 bg-white/70 px-7 text-teal-950 hover:bg-[#ffb703]/25 dark:border-cyan-200/20 dark:bg-white/10 dark:text-cyan-50"
                onClick={() => window.open("/FULLSTACK_DEVELOPER_NGUYEN_VAN_HIEU.pdf", "_blank")}
              >
                Download CV
                <ArrowDownTrayIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1">
              <div className="relative aspect-[4/5] overflow-hidden border border-teal-900/15 bg-[#dff7ff] shadow-2xl shadow-teal-900/10 dark:border-cyan-200/15 dark:bg-[#123447]">
                <Image
                  src="/avt.jpg"
                  alt="Nguyen Van Hieu"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/25 bg-[#0f766e]/85 p-4 text-white backdrop-blur">
                  <p className="text-sm font-semibold">Product-minded engineer</p>
                  <p className="mt-1 text-xs text-zinc-300">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>

              <div className="grid content-between gap-4">
                <div className="grid grid-cols-3 border border-teal-900/15 bg-white/70 shadow-sm dark:border-cyan-200/15 dark:bg-white/10">
                  {metrics.map(([value, label]) => (
                    <div key={label} className="border-r border-teal-900/10 p-3 last:border-r-0 dark:border-cyan-200/15">
                      <p className="text-2xl font-black text-teal-900 dark:text-cyan-100">{value}</p>
                      <p className="mt-1 text-xs leading-4 text-slate-600 dark:text-cyan-100/70">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-teal-900/10 bg-[#0f766e] p-4 text-white shadow-sm dark:border-cyan-200/15 dark:bg-[#dff7ff] dark:text-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffdd66] dark:text-[#0f766e]">
                    Current stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-medium dark:border-teal-900/15 dark:bg-white/40">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
