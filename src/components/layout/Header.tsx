'use client'

import { Battery, Signal } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full">
      {/* Status Bar */}
      <div className="h-10 flex items-center justify-between px-4 bg-white">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <Signal className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>
      
      {/* Header Title */}
      <div className="h-12 flex items-center px-4 bg-white border-b">
        <h1 className="text-[#4A4A4A] text-xl font-semibold">Today</h1>
      </div>
    </header>
  )
} 