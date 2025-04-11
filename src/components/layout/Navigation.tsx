'use client'

import { Calculator, Utensils, User, List } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: Calculator, label: 'Calculator', href: '/calculator' },
  { icon: Utensils, label: 'Daily Calorie Intake', href: '/daily-calorie-intake' },
  { icon: User, label: 'My Profile', href: '/my-profile' },
  { icon: List, label: 'Categories', href: '/categories' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-white border-r flex flex-col items-center py-4">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`w-12 h-12 flex items-center justify-center rounded-lg mb-2 transition-colors ${
              isActive ? 'bg-[#4A90E2] text-white' : 'text-[#4A4A4A] hover:bg-gray-100'
            }`}
          >
            <Icon className="w-6 h-6" />
          </Link>
        )
      })}
    </nav>
  )
} 