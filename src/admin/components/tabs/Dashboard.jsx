import React, { useEffect, useState } from 'react'
import AdminHeader from '../layout/AdminHeader';
import DeviceCard from '../../../components/DeviceCard';
import {  
  HardDrive, 
  CheckCircle, 
  PowerOff, 
  Users
} from 'lucide-react';
import RecentAlerts from '../deviceDetails/RecentAlerts';
import { assinedUsersAPI, getAllDeviceAPI, recentAlertsAPI } from '../../../services/allAPI';

function Dashboard({adminDetails}) {

  const [allDevices,setAllDevices] = useState([])
  const [allUsers,setAllUsers] = useState([])
  // console.log(allUsers);
  

  useEffect(()=>{
      const token = sessionStorage.getItem("token")
      handlGetAllDevices(token)
      getAllUsers(token)
    },[])
  
    const handlGetAllDevices = async(token)=>{
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await getAllDeviceAPI(reqHeader)
      if (result.status == 200) {
        setAllDevices(result.data)
      }
      else{
        console.log(result);
      }
    }

    const getAllUsers = async(token)=>{
        const reqHeader = {
          "Authorization" : `Bearer ${token}`
        }
        const result = await assinedUsersAPI(reqHeader)
        if (result.status == 200) {
          setAllUsers(result.data)
        }
        else{
          console.log(result);
        }
      }
  

    const count = allDevices?.length
    const onlineDevices = allDevices?.filter(device=>(device.status=="online")).length
    const offlineDevices = allDevices?.filter(device=>(device.status=="offline")).length
    const users = allUsers?.length
    

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <AdminHeader adminDetails={adminDetails}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DeviceCard title="Total Devices" count={count} icon={HardDrive} color="blue" />
          <DeviceCard title="Online Devices" count={onlineDevices} icon={CheckCircle} color="green" />
          <DeviceCard title="Offline Devices" count={offlineDevices} icon={PowerOff} color="red" />
          <DeviceCard title="Users" count={users} icon={Users} color="yellow" />
        </div>
       
        <RecentAlerts/>
      </main>
    </div>
  )
}

export default Dashboard