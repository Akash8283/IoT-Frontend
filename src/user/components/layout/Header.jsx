import { Bell } from 'lucide-react'
import React from 'react'

function Header() {
  return (
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">User Dashboard</h1>
            <p className="text-slate-500 text-sm">Hello, John Doe!</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:bg-white hover:text-blue-600 rounded-full transition bg-white shadow-sm border border-gray-100">
              <Bell size={20} />
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Logout
            </button>
          </div>
        </header>
  )
}

export default Header