import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    const baseClasses = "w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border rounded-xl transition-all duration-200 focus:outline-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
    const stateClasses = error
      ? "border-red-300 dark:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
      : "border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400"

    const classes = `${baseClasses} ${stateClasses} ${className}`

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classes}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
