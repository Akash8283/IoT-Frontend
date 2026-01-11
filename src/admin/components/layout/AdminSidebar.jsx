import { LayoutDashboard, Server, User, AlertTriangle, Users, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddUser from '../tabs/AddUser'
import Dashboard from '../tabs/Dashboard'
import AddDevice from '../tabs/AddDevice'
import AdminProfile from '../tabs/AdminProfile'
import ManageDevice from '../tabs/ManageDevice'
import ManageUsers from '../tabs/ManageUsers'
import { adminDetailsAPI } from '../../../services/allAPI'
import AllAlerts from '../tabs/AllAlerts'

function AdminSidebar() {

   const [tab,setTab] = useState(1)

   const [adminDetails,setAdminDetails] = useState([])
     console.log(adminDetails);
     
     useEffect(()=>{
       const token = sessionStorage.getItem("token")
       getAdminDetails(token)
     },[])
   
     const getAdminDetails = async(token)=>{
       const reqHeader = {
         "Authorization" : `Bearer ${token}`
       }
       const result = await adminDetailsAPI(reqHeader)
       if (result.status == 200) {
         setAdminDetails(result.data)
       }
       else{
         console.log(result);
       }
     }

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
                    <LayoutDashboard size={20} />
                    Alerts
                </Link>
                <Link onClick={()=>setTab(3)} className={tab==3?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <Plus size={20} />
                    Add Devices
                </Link>
                <Link onClick={()=>setTab(4)} className={tab==4?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <Server size={20} />
                    Manage Devices
                </Link>
                <Link onClick={()=>setTab(5)} className={tab==5?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
                    <Users size={20} />
                    Manage Users
                </Link>
                <Link onClick={()=>setTab(6)} className={tab==6?"flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20":"flex items-center gap-3 px-4 py-3 hover:bg-blue-950 hover:rounded-xl"}>
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
        <p className="text-sm font-semibold text-white">{adminDetails.username}</p>
        <p className="text-xs text-slate-400">{adminDetails.role}</p>
      </div>
    </div>
            </aside>
            {
              tab==1 &&
              <Dashboard adminDetails={adminDetails}/>
            }
            {
              tab==2 &&
              <AllAlerts/>
            }
            {
              tab==3 &&
              <AddDevice/>
            }
            {
              tab==4 &&
              <ManageDevice/>
            }
            {
              tab==5 &&
              <ManageUsers/>
            }
            {
              tab==6 &&
              <AdminProfile adminDetails={adminDetails}/>
            }
    </div>
  )
}

export default AdminSidebar