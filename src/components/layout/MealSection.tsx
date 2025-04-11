'use client'

import { Plus } from 'lucide-react'
import MealCard from '../features/MealCard'

interface MealSectionProps {
  title: string
  meals: Array<{
    title: string
    calories: number
    time: string
    imageUrl: string
  }>
}

export default function MealSection({ title, meals }: MealSectionProps) {
  return (
    <section className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#4A4A4A]">{title}</h2>
        <button className="w-10 h-10 rounded-full bg-[#4A90E2] text-white flex items-center justify-center hover:bg-[#357ABD] transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            title={meal.title}
            calories={meal.calories}
            time={meal.time}
            imageUrl={meal.imageUrl}
          />
        ))}
      </div>
    </section>
  )
} 