import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className={cn("animate-spin", sizeClasses[size], className)}>
      <div className="h-full w-full border-4 border-black border-t-transparent"></div>
    </div>
  )
}

export function LoadingCard({ className }: { className?: string }) {
  return (
    <div className={cn("bg-white border-8 border-black p-8 shadow-brutal", className)}>
      <div className="flex flex-col items-center justify-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="font-mono text-lg">Loading...</p>
      </div>
    </div>
  )
}

export function LoadingGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border-8 border-black p-6 shadow-brutal animate-pulse">
          <div className="h-6 bg-gray-200 border-2 border-black mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 border border-black"></div>
            <div className="h-4 bg-gray-200 border border-black w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
