import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"

  const variants = {
    primary: "bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 focus-visible:ring-zinc-500 shadow-sm hover:shadow-md",
    secondary: "bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 focus-visible:ring-indigo-500 shadow-sm hover:shadow-md",
    outline: "border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:ring-zinc-500",
    ghost: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:ring-zinc-500",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-xl",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
