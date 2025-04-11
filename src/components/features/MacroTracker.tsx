'use client'

interface MacroProps {
  label: string
  current: number
  target: number
  color: string
}

function MacroBar({ label, current, target, color }: MacroProps) {
  const percentage = Math.min((current / target) * 100, 100)

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#4A4A4A]">{label}</span>
        <span className="text-sm text-[#4A4A4A]">{current}g / {target}g</span>
      </div>
      <div className="h-6 bg-[#E5E5E5] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  )
}

export default function MacroTracker() {
  return (
    <div className="w-full space-y-4 p-4">
      <MacroBar
        label="Carbs"
        current={150}
        target={300}
        color="#4A90E2"
      />
      <MacroBar
        label="Protein"
        current={80}
        target={150}
        color="#7ED321"
      />
      <MacroBar
        label="Fat"
        current={45}
        target={65}
        color="#F5A623"
      />
    </div>
  )
} 