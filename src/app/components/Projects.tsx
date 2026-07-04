"use client"

import { ArrowTopRightOnSquareIcon, BriefcaseIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

interface Experience {
  company: string
  period: string
  project: string
  description: string
  role: string
  stack: string[]
  highlights: string[]
}

const experiences: Experience[] = [
  {
    company: "ZenS Company",
    period: "Apr 2025 - Jun 2026",
    project: "UT Web Market",
    description:
      "An e-commerce and community platform. Built a new web application from scratch based on an existing mobile app workflow, while maintaining backend services and integrating a loyalty points system.",
    role: "Fullstack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "NextAuth", "Square Payments", "NestJS", "Redis", "PostgreSQL"],
    highlights: [
      "Built responsive shopping and community features with Next.js and React.",
      "Maintained NestJS services and engineered purchase-based point accumulation.",
      "Integrated Square Web Payments SDK for secure tokenized checkout and registration flows.",
    ],
  },
  {
    company: "ZenS Company",
    period: "Aug 2025 - Nov 2025",
    project: "Fire Safety E-commerce & CRM Integration (Gasfe)",
    description:
      "A specialized e-commerce platform for fire safety equipment integrated with CRM workflows to automate customer data management and sales processes.",
    role: "Backend Developer",
    stack: ["Laravel", "PHP", "Filament", "OpenAI GPT API", "RESTful API", "JWT", "MySQL"],
    highlights: [
      "Developed product catalogs, dynamic blogs, and a Filament dashboard for content, configuration, and sync logs.",
      "Engineered two-way API sync for Leads and Deals creation from orders.",
      "Optimized MySQL queries and REST APIs for reliable third-party CRM consistency.",
    ],
  },
  {
    company: "ZenS Company",
    period: "Feb 2025 - Jul 2025",
    project: "WiseBuddy - AI-powered English Learning App",
    description:
      "A mobile English learning app tailored for Vietnamese users, integrating an AI assistant powered by OpenAI for vocabulary, grammar, and speaking practice.",
    role: "Backend Developer",
    stack: ["Laravel", "PHP", "Filament", "OpenAI GPT API", "RESTful API", "JWT", "MySQL"],
    highlights: [
      "Developed scalable Laravel APIs for learning modules, user progress, and AI conversations.",
      "Built and maintained Filament admin tools for lessons, vocabulary, users, and logs.",
      "Implemented role-based access control, usage analytics, and JWT-secured APIs.",
    ],
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12 grid gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-800 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-4">
              Work Experience
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-playfair">
              Production Projects
            </h2>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 lg:max-w-xl lg:justify-self-end">
            Recent commercial systems across e-commerce, CRM automation, payment flows, and AI-powered learning products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const isFeatured = index === 0

            return (
              <article
                key={experience.project}
                className={`group border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className={`${isFeatured ? "h-12 w-12" : "h-10 w-10"} flex flex-shrink-0 items-center justify-center bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400`}>
                    <BriefcaseIcon className={isFeatured ? "h-6 w-6" : "h-5 w-5"} />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <CalendarDaysIcon className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {experience.company} / {experience.role}
                  </p>
                  <h3 className={`${isFeatured ? "text-2xl lg:text-3xl" : "text-lg"} mt-2 font-semibold text-zinc-900 dark:text-zinc-100`}>
                    {experience.project}
                  </h3>
                </div>

                <p className={`${isFeatured ? "max-w-2xl text-base" : "text-sm"} mb-5 leading-relaxed text-zinc-600 dark:text-zinc-400`}>
                  {experience.description}
                </p>

                <div className="mb-5 space-y-2">
                  {experience.highlights.slice(0, isFeatured ? 3 : 2).map((highlight) => (
                    <p key={highlight} className="border-l-2 border-zinc-300 pl-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 border-t border-zinc-200 pt-4 dark:border-zinc-700/50">
                  {experience.stack.slice(0, isFeatured ? 9 : 5).map((tech) => (
                    <span
                      key={tech}
                      className="bg-white px-2 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/hieunvdeveloper-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
          >
            View GitHub profile
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
