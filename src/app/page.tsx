'use client'

import CalorieCircle from '@/components/features/CalorieCircle'
import MacroTracker from '@/components/features/MacroTracker'
import MealSection from '@/components/layout/MealSection'

const mockMeals = {
  breakfast: [
    {
      title: 'Avocado Toast',
      calories: 350,
      time: '8:00 AM',
      imageUrl: 'https://picsum.photos/350/200?random=1',
    },
  ],
  lunch: [
    {
      title: 'Grilled Chicken Salad',
      calories: 450,
      time: '12:30 PM',
      imageUrl: 'https://picsum.photos/350/200?random=2',
    },
  ],
  dinner: [
    {
      title: 'Salmon with Vegetables',
      calories: 550,
      time: '7:00 PM',
      imageUrl: 'https://picsum.photos/350/200?random=3',
    },
  ],
  snacks: [
    {
      title: 'Greek Yogurt with Berries',
      calories: 200,
      time: '3:00 PM',
      imageUrl: 'https://picsum.photos/350/200?random=4',
    },
  ],
}

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-8">
        <CalorieCircle consumed={1550} goal={2000} />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <MacroTracker />
      </div>
      
      <MealSection title="Breakfast" meals={mockMeals.breakfast} />
      <MealSection title="Lunch" meals={mockMeals.lunch} />
      <MealSection title="Dinner" meals={mockMeals.dinner} />
      <MealSection title="Snacks" meals={mockMeals.snacks} />
    </div>
  )
}
