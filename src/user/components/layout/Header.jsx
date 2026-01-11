import { Bell } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const user = JSON.parse(sessionStorage.getItem("user"))
  const navigate = useNavigate()
  const logout = ()=>{
     sessionStorage.clear()
     navigate('/')
  }

  return (
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">User Dashboard</h1>
            <p className="text-slate-500 text-sm">Hello, {user.username}</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={logout} className="px-4 py-2 bg-white border border-gray-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Logout
            </button>
          </div>
        </header>
  )
}

export default Header