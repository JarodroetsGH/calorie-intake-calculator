'use client'

import Image from 'next/image'
import { Clock } from 'lucide-react'

interface MealCardProps {
  title: string
  calories: number
  time: string
  imageUrl: string
}

export default function MealCard({ title, calories, time, imageUrl }: MealCardProps) {
  return (
    <div className="w-full h-[200px] bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-[120px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[#4A4A4A] font-medium mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{calories} kcal</span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </div>
        </div>
      </div>
    </div>
  )
} 