import React, { useState } from 'react'
import DeviceCard from '../../components/DeviceCard';
import {HardDrive, CheckCircle, PowerOff, AlertCircle} from 'lucide-react';
import Header from '../components/layout/Header';
import {  getUserAllAlertAPI } from '../../services/allAPI';
import { useEffect } from 'react';
import RecentAlersUser from '../components/deviceDetails/RecentAlersUser';


function UserDashboard({deviceDetails}) {
  
  const [alertCount,setAlertCount] = useState([])
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    getAlertCount(token)
    const interval = setInterval(()=>{
      getAlertCount(token)
        },5000)
     return ()=> clearInterval(interval)
  },[])

  const getAlertCount = async(token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
       }
    const result = await getUserAllAlertAPI(reqHeader)
    if (result.status == 200) {
      setAlertCount(result.data)
    }    
    else{
      console.log(result);
    }
  }

  const allDevices = deviceDetails.length
  const onlinDevices = deviceDetails.filter(device=>device.status=="online").length
  const offlineDevice = deviceDetails.filter(device=>device.status=="offline").length
  const count = alertCount.length

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
       <Header/>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DeviceCard title="Total Devices" count={allDevices} icon={HardDrive} color="blue" />
          <DeviceCard title="Online Devices" count={onlinDevices} icon={CheckCircle} color="green" />
          <DeviceCard title="Offline Devices" count={offlineDevice} icon={PowerOff} color="red" />
          <DeviceCard title="Alerts" count={count} icon={AlertCircle} color="yellow" />
        </div>
       
        {/*Table section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-bold text-slate-800">Alerts</h2>
            
          </div>
          <RecentAlersUser/>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard