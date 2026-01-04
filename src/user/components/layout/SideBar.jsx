import { LayoutDashboard, Server, User, AlertTriangle } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserDashboard from '../../pages/UserDashboard'
import Devices from '../../pages/Devices'
import Profile from '../../pages/Profile'
import Alerts from '../../pages/Alerts'

function SideBar() {

  const [tab,setTab] = useState(1)

  return (
    <div>
      {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full transition-all duration-300 z-20">
              <div className="p-6 flex items-center gap-3 text-white font-bold text-xl">
                <LayoutDashboard className="text-blue-500" />
                IoT Dashboard
              </div>
      
              <nav className="flex-1 px-4 py-4 space-y-2">
                <Link onClick={()=>setTab(1)} className={tab==1?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>
                <Link onClick={()=>setTab(2)} className={tab==2?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <Server size={20} />
                    Devices
                </Link>
                <Link onClick={()=>setTab(3)} className={tab==3?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <AlertTriangle size={20} />
                    Alerts
                </Link>
                <Link onClick={()=>setTab(4)} className={tab==4?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <User size={20} />
                    Profile
                </Link>
              </nav>
              <div className="flex items-center gap-3 p-4 border-t border-slate-700/50 mt-auto">
      <img 
        src= "https://www.pngmart.com/files/23/User-PNG-Transparent.png" 
        alt=""
        className="w-10 h-10 rounded-full border-2 border-slate-600"
      />
      <div>
        <p className="text-sm font-semibold text-white">Akash</p>
        <p className="text-xs text-slate-400">user</p>
      </div>
    </div>
            </aside>
            {
                tab==1 &&
                <UserDashboard/>
               }
               {
                tab==2 &&
                <Devices/>
               }
               {
                tab==3 &&
                <Alerts/>
               }
               {
                tab==4 &&
                <Profile/>
               }
    </div>
  )
}

export default SideBar