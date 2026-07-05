"use client"

import {
  BeakerIcon,
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"

const capabilities = [
  {
    label: "Interface",
    icon: CodeBracketIcon,
    summary: "Responsive product screens, commerce flows, auth, and dashboards.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    accent: "text-[#0284c7] dark:text-sky-200",
  },
  {
    label: "Services",
    icon: ServerIcon,
    summary: "APIs, auth, admin workflows, business logic, and data handling.",
    tools: ["Laravel", "PHP", "NestJS", "JWT", "Filament"],
    accent: "text-[#0f766e] dark:text-emerald-200",
  },
  {
    label: "Integration",
    icon: DevicePhoneMobileIcon,
    summary: "Payment gateways, CRM sync, AI APIs, and third-party REST systems.",
    tools: ["Stripe", "Square", "OpenAI", "Gemini", "GraphQL"],
    accent: "text-[#ff6b4a] dark:text-orange-200",
  },
  {
    label: "Delivery",
    icon: CloudIcon,
    summary: "Deployment support, automation, testing, and production readiness.",
    tools: ["Docker", "Nginx", "GitHub Actions", "Playwright", "Jest"],
    accent: "text-[#b7791f] dark:text-amber-200",
  },
]

const layers = [
  { label: "Data", icon: CircleStackIcon, items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { label: "Automation", icon: CommandLineIcon, items: ["N8N", "CI checks", "Webhooks", "API testing"] },
  { label: "Quality", icon: BeakerIcon, items: ["Usage analytics", "RBAC", "Secure tokens", "Query tuning"] },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative overflow-hidden bg-[#dff3ff] py-24 text-slate-950 dark:bg-[#083344] dark:text-white lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-35 dark:opacity-15" />
      <div className="absolute inset-x-0 top-0 h-44 bg-[#0f766e]/10 dark:bg-cyan-300/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div
            className={`lg:sticky lg:top-28 lg:self-start transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f766e] dark:text-cyan-200">
              Capability Map
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
              From screen to server to shipped.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-700 dark:text-cyan-100/75">
              The stack is organized around outcomes: interfaces people can use, APIs teams can trust, and integrations that keep business data moving.
            </p>
          </div>

          <div className="grid gap-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.label}
                  className={`grid gap-5 border border-sky-900/10 bg-white/70 p-5 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:bg-white md:grid-cols-[180px_minmax(0,1fr)] dark:border-cyan-200/15 dark:bg-white/10 dark:hover:bg-white/15 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + index * 100}ms` }}
                >
                  <div>
                    <Icon className={`h-7 w-7 ${capability.accent}`} />
                    <h3 className="mt-4 text-2xl font-black">{capability.label}</h3>
                  </div>
                  <div>
                    <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-cyan-100/75">{capability.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {capability.tools.map((tool) => (
                        <span key={tool} className="border border-sky-900/10 bg-[#e8fbf4] px-3 py-1.5 text-xs font-semibold text-teal-900 dark:border-cyan-200/15 dark:bg-[#082f49] dark:text-cyan-100">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-sky-900/10 dark:bg-cyan-200/15 md:grid-cols-3">
          {layers.map((layer) => {
            const Icon = layer.icon

            return (
              <div key={layer.label} className="bg-white/70 p-5 dark:bg-[#082f49]">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#ff6b4a] dark:text-amber-200" />
                  <h3 className="font-semibold">{layer.label}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-cyan-100/70">{layer.items.join(" / ")}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
