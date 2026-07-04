"use client"

import {
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  GlobeAltIcon,
  CommandLineIcon,
  BeakerIcon
} from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Web App Engineering",
      description: "Building responsive commercial web applications with Next.js, React, TypeScript, Tailwind, Zustand, and NextAuth.",
      color: "indigo"
    },
    {
      icon: <ServerIcon className="w-6 h-6" />,
      title: "Backend & Admin Systems",
      description: "Creating production APIs, Filament admin dashboards, JWT auth, and business workflows with Laravel, PHP, and NestJS.",
      color: "emerald"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      title: "Integrations",
      description: "Integrating payment gateways, CRM sync, Square Payments, Stripe APIs, OpenAI, Gemini, and third-party REST services.",
      color: "violet"
    },
    {
      icon: <CloudIcon className="w-6 h-6" />,
      title: "Automation & Delivery",
      description: "Shipping maintainable systems with Docker, Nginx, GitHub Actions, N8N workflow automation, Playwright, and Jest.",
      color: "rose"
    },
  ]

  const technologyGroups = [
    {
      category: "Frontend",
      icon: <CodeBracketIcon className="w-5 h-5" />,
      color: "blue",
      technologies: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind", "Zustand"]
    },
    {
      category: "Backend",
      icon: <ServerIcon className="w-5 h-5" />,
      color: "emerald",
      technologies: ["PHP", "Laravel", "WordPress", "NestJS", "Filament", "JWT"]
    },
    {
      category: "Databases",
      icon: <CircleStackIcon className="w-5 h-5" />,
      color: "amber",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "APIs",
      icon: <GlobeAltIcon className="w-5 h-5" />,
      color: "violet",
      technologies: ["RESTful", "GraphQL", "Stripe API", "Square Payments", "OpenAI", "Gemini API"]
    },
    {
      category: "Automation",
      icon: <CommandLineIcon className="w-5 h-5" />,
      color: "cyan",
      technologies: ["N8N workflow", "Playwright", "Docker", "Nginx", "GitHub Actions"]
    },
    {
      category: "Testing",
      icon: <BeakerIcon className="w-5 h-5" />,
      color: "rose",
      technologies: ["Jest", "API testing", "Usage analytics"]
    }
  ]

  const categoryColors: Record<string, { text: string; pill: string; border: string }> = {
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      pill: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-800/50"
    },
    emerald: {
      text: "text-emerald-600 dark:text-emerald-400",
      pill: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
      border: "border-emerald-200 dark:border-emerald-800/50"
    },
    amber: {
      text: "text-amber-600 dark:text-amber-400",
      pill: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
      border: "border-amber-200 dark:border-amber-800/50"
    },
    violet: {
      text: "text-violet-600 dark:text-violet-400",
      pill: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
      border: "border-violet-200 dark:border-violet-800/50"
    },
    cyan: {
      text: "text-cyan-600 dark:text-cyan-400",
      pill: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
      border: "border-cyan-200 dark:border-cyan-800/50"
    },
    rose: {
      text: "text-rose-600 dark:text-rose-400",
      pill: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
      border: "border-rose-200 dark:border-rose-800/50"
    }
  }

  const colorClasses = {
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "group-hover:border-indigo-200 dark:group-hover:border-indigo-800"
    },
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
    },
    violet: {
      bg: "bg-violet-100 dark:bg-violet-900/30",
      text: "text-violet-600 dark:text-violet-400",
      border: "group-hover:border-violet-200 dark:group-hover:border-violet-800"
    },
    rose: {
      bg: "bg-rose-100 dark:bg-rose-900/30",
      text: "text-rose-600 dark:text-rose-400",
      border: "group-hover:border-rose-200 dark:group-hover:border-rose-800"
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="relative overflow-hidden border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="lg:sticky lg:top-28">
              <span
                className={`inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                What I Do
              </span>
              <h2
                className={`text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-5 font-playfair transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Technical Skills
              </h2>
              <p
                className={`text-lg text-zinc-600 dark:text-zinc-400 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Fullstack developer focused on Laravel, Next.js, production APIs, admin dashboards, payment flows, automation, and AI services.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skills.map((skill, index) => {
                const colors = colorClasses[skill.color as keyof typeof colorClasses]
                return (
                  <div
                    key={skill.title}
                    className={`group border border-zinc-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-950 ${colors.border} ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center ${colors.bg}`}>
                      <span className={colors.text}>{skill.icon}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {skill.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {skill.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div>
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Technologies I Work With
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Toolbox</p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {technologyGroups.map((group, groupIndex) => {
                  const colors = categoryColors[group.color]
                  return (
                <div
                  key={groupIndex}
                  className={`group relative border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:bg-zinc-950 ${colors.border}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center ${colors.text}`}>
                      {group.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {group.category}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {group.technologies.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Technology pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 text-sm font-medium ${colors.pill} transition-transform duration-200 hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
