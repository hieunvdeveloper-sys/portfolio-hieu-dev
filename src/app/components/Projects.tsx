"use client"

import { ArrowTopRightOnSquareIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

interface Experience {
  company: string
  period: string
  project: string
  description: string
  role: string
  stack: string[]
  highlights: string[]
  result: string
}

const experiences: Experience[] = [
  {
    company: "ZenS Company",
    period: "Apr 2025 - Jun 2026",
    project: "UT Web Market",
    description:
      "E-commerce and community platform rebuilt as a web product from an existing mobile workflow, with backend maintenance and a purchase-based loyalty points system.",
    role: "Fullstack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "NextAuth", "Square Payments", "NestJS", "Redis", "PostgreSQL"],
    highlights: [
      "Built shopping and community features with responsive Next.js screens.",
      "Maintained NestJS services and engineered point accumulation logic.",
      "Integrated Square Web Payments SDK for tokenized checkout and registration flows.",
    ],
    result: "Commerce, community, payments",
  },
  {
    company: "ZenS Company",
    period: "Aug 2025 - Nov 2025",
    project: "Gasfe Fire Safety E-commerce",
    description:
      "Specialized e-commerce platform for fire safety equipment connected to CRM workflows for customer data and sales process automation.",
    role: "Backend Developer",
    stack: ["Laravel", "PHP", "Filament", "OpenAI GPT API", "RESTful API", "JWT", "MySQL"],
    highlights: [
      "Developed product catalogs, dynamic blogs, and Filament admin controls.",
      "Engineered two-way sync for Leads and Deals creation from orders.",
      "Optimized MySQL queries and REST APIs for reliable third-party consistency.",
    ],
    result: "CRM sync, content, orders",
  },
  {
    company: "ZenS Company",
    period: "Feb 2025 - Jul 2025",
    project: "WiseBuddy AI English App",
    description:
      "Mobile English learning app for Vietnamese users with an AI assistant for vocabulary, grammar, and speaking practice.",
    role: "Backend Developer",
    stack: ["Laravel", "PHP", "Filament", "OpenAI GPT API", "RESTful API", "JWT", "MySQL"],
    highlights: [
      "Built Laravel APIs for learning modules, user progress, and AI conversations.",
      "Created Filament admin tools for lessons, vocabulary, users, and logs.",
      "Implemented role-based access, usage analytics, and JWT-secured APIs.",
    ],
    result: "AI learning, admin, analytics",
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#ffe8df] py-24 dark:bg-[#23111f] lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-orange-900/10 pb-10 dark:border-orange-200/15 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8432e] dark:text-orange-200">
              Selected Work
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Product systems in the wild.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 lg:justify-self-end">
            Recent commercial work across e-commerce, CRM automation, payment flows, backend operations, and AI-powered learning products.
          </p>
        </div>

        <div className="divide-y divide-orange-900/10 dark:divide-orange-200/15">
          {experiences.map((experience, index) => (
            <article key={experience.project} className="grid gap-6 py-10 lg:grid-cols-[120px_minmax(0,1fr)_280px] lg:gap-10">
              <div className="flex items-center gap-4 lg:block">
                <p className="text-5xl font-black leading-none text-[#ff9f7f] dark:text-orange-200/25">
                  0{index + 1}
                </p>
                <div className="mt-0 flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 lg:mt-5">
                  <CalendarDaysIcon className="h-4 w-4" />
                  {experience.period}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b43b28] dark:text-orange-200/70">
                  {experience.company} / {experience.role}
                </p>
                <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white">
                  {experience.project}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  {experience.description}
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {experience.highlights.map((highlight) => (
                    <p key={highlight} className="border-l-2 border-[#0f766e] pl-3 text-sm leading-6 text-zinc-700 dark:border-cyan-300 dark:text-orange-100/70">
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="border border-orange-900/10 bg-white/65 p-5 shadow-sm dark:border-orange-200/15 dark:bg-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e] dark:text-cyan-200">
                  Outcome
                </p>
                <p className="mt-3 text-lg font-black text-zinc-950 dark:text-zinc-50">{experience.result}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.slice(0, 7).map((tech) => (
                    <span key={tech} className="border border-orange-900/10 bg-[#fff7ed] px-2 py-1 text-xs font-medium text-[#8a2c1f] dark:border-orange-200/15 dark:bg-[#351a2d] dark:text-orange-100/75">
                      {tech}
                    </span>
                  ))}
                </div>
              </aside>
            </article>
          ))}
        </div>

        <a
          href="https://github.com/hieunvdeveloper-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-b border-[#d8432e] pb-1 text-sm font-bold text-[#d8432e] transition-colors hover:text-[#0f766e] dark:border-orange-200 dark:text-orange-200 dark:hover:text-cyan-200"
        >
          View GitHub profile
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
