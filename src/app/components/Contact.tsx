"use client"

import { ArrowTopRightOnSquareIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"
import { Button, Input } from "./ui"

const contactInfo = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hieunv.developer@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "034-349-4640",
  location: process.env.NEXT_PUBLIC_LOCATION || "District 7, Ho Chi Minh City",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/hieunvdeveloper-sys",
}

const channels = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: EnvelopeIcon },
  { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}`, icon: PhoneIcon },
  { label: "Location", value: contactInfo.location, href: "", icon: MapPinIcon },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const mailtoLink = `mailto:${contactInfo.email}?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      window.open(mailtoLink, "_blank")
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-[#eef8ff] py-24 dark:bg-[#071827] lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-10 border-y border-sky-900/10 py-12 dark:border-cyan-200/15 lg:grid-cols-[0.85fr_1.15fr] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284c7] dark:text-sky-200">
              Contact
            </p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] text-slate-950 dark:text-white lg:text-7xl">
              Let&apos;s build the next useful thing.
            </h2>

            <div className="mt-8 grid gap-px bg-sky-900/10 dark:bg-cyan-200/15">
              {channels.map((channel) => {
                const Icon = channel.icon
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                        {channel.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {channel.value}
                      </p>
                    </div>
                  </>
                )

                return channel.href ? (
                  <a key={channel.label} href={channel.href} className="flex items-center gap-4 bg-white/75 p-4 transition-colors hover:bg-[#e8fbf4] dark:bg-white/10 dark:hover:bg-cyan-200/10">
                    {content}
                  </a>
                ) : (
                  <div key={channel.label} className="flex items-center gap-4 bg-white/75 p-4 dark:bg-white/10">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex gap-3">
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-sky-900/15 bg-white/55 px-4 py-2 text-sm font-semibold text-sky-900 transition-colors hover:bg-[#0284c7] hover:text-white dark:border-cyan-200/15 dark:bg-white/10 dark:text-cyan-100 dark:hover:bg-cyan-200 dark:hover:text-slate-950"
                >
                  GitHub
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-sky-900/15 bg-white/55 px-4 py-2 text-sm font-semibold text-sky-900 transition-colors hover:bg-[#0284c7] hover:text-white dark:border-cyan-200/15 dark:bg-white/10 dark:text-cyan-100 dark:hover:bg-cyan-200 dark:hover:text-slate-950"
                >
                  LinkedIn
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid content-start gap-5 bg-white/70 p-5 shadow-xl shadow-sky-900/10 dark:bg-white/10 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Name"
                placeholder="Your name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="rounded-md"
              />
              <Input
                label="Email"
                placeholder="you@example.com"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full resize-none border border-sky-900/10 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-all duration-200 focus:border-[#0284c7] focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-cyan-200/15 dark:bg-[#071827] dark:text-zinc-100 dark:placeholder-zinc-500"
                placeholder="Tell me what you are building..."
              />
            </div>

            {submitStatus === "success" && (
              <p className="border border-emerald-200 bg-emerald-50 p-3 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
                Thanks for reaching out. Your email app should open now.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
                Something went wrong. Please email me directly.
              </p>
            )}

            <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-md">
              {isSubmitting ? "Opening email..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
