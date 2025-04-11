'use client'

interface CalorieCircleProps {
  consumed: number
  goal: number
}

export default function CalorieCircle({ consumed, goal }: CalorieCircleProps) {
  const percentage = Math.min((consumed / goal) * 100, 100)
  const circumference = 2 * Math.PI * 90 // radius = 90
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-[200px] h-[200px] mx-auto">
      {/* Background circle */}
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="#E5E5E5"
          strokeWidth="20"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="#4A90E2"
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[#4A4A4A]">{consumed}</span>
        <span className="text-sm text-gray-500">of {goal} kcal</span>
      </div>
    </div>
  )
} 