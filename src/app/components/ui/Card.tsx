import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  padding?: "sm" | "md" | "lg"
  shadow?: "sm" | "md" | "lg" | "xl"
}

export default function Card({
  children,
  className = "",
  padding = "md",
  shadow = "md",
}: CardProps) {
  const baseClasses = "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }
  
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  }
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
} 