import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/Navigation"

export const metadata: Metadata = {
  title: "Nguyen Van Hieu - Fullstack Developer",
  description: "Fullstack Developer with 3 years of experience building scalable web, mobile, API, admin dashboard, payment, and AI-powered systems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#e8fbf4] text-slate-950 dark:bg-[#071827] dark:text-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
