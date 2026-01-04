import { PlusCircle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { addDeviceAPI, allUsersAPI } from '../../../services/allAPI';
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'


function AddDevice() {

  const [allUsers,setAllUsers] = useState([])
  const [deviceDetails,setDeviceDetails] = useState({
    name:"",
    type:"",
    location:"",
    assignedUser:""
  })
  // console.log(allUsers);
  // console.log(deviceDetails);
  
    
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    getAllUsers(token)
  },[])

  const getAllUsers = async(token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await allUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    }
    else{
      console.log(result);
    }
  }

  const handleAddDevice = async(e)=>{
    e.preventDefault()
    const {name,type,location,assignedUser} = deviceDetails
    if (!name || !type || !location || !assignedUser) {
      toast.info("Please fill the form completely")
    }
    else{
      const token = sessionStorage.getItem("token")
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
      console.log(reqHeader);
    
      const result = await addDeviceAPI(deviceDetails,reqHeader)
    if (result.status == 200) {
      toast.success("Device Added Successfully!!!")
      setDeviceDetails({ name:"",type:"",location:"",assignedUser:""})
    }
    else if(result.status == 409){
      toast.success(result.response.data)
    }
    else{
      toast.error("Something went wrong")
      console.log(result);
    }
    }
  }

  return (
    <div className="flex flex-col p-6 justify-center ml-50 items-center bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Add New Device
        </h1>
        <p className="text-gray-600">
          Register and assign a new device
        </p>
      </div>

      {/* Form  */}
      <div className="max-w-3xl bg-white rounded-2xl shadow border border-gray-100 p-6">

        <form className="space-y-6">

          {/*Device Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Device Name</label>
            <input value={deviceDetails.name} onChange={e=>setDeviceDetails({...deviceDetails,name:e.target.value})} type="text" placeholder="e.g. Sensor A1" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>

          {/* Device Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Device Type</label>
            <select value={deviceDetails.type} onChange={e=>setDeviceDetails({...deviceDetails,type:e.target.value})} defaultValue={""} className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value={""} disabled hidden>Select device type</option>
              <option value={"temp_hum"}>Temperature + Humidity</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input value={deviceDetails.location} onChange={e=>setDeviceDetails({...deviceDetails,location:e.target.value})} type="text" placeholder="e.g. Factory Floor 1" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>

          {/* Assigned User */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign to User
            </label>
                <select value={deviceDetails.assignedUser} onChange={e=>setDeviceDetails({...deviceDetails,assignedUser:e.target.value})}defaultValue={""} className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value={""} disabled hidden>Select user</option>
                  {
                    allUsers?.length>0?
                     allUsers?.map(user=>(
                       <option key={user?._id} value={user._id}>{user?.username}</option>
                     ))
                    :
                    <option disabled>No users</option>
                  }
               </select>
          </div>

          {/* Device status info*/}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
            Device ID and Secret Key will be generated automatically after submission.
          </div>

          {/* Action button */}
          <div className="flex justify-end gap-4 pt-4">
            <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition">Clear</button>
            <button type='button' onClick={handleAddDevice} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow shadow-blue-200"
            ><PlusCircle className="w-5 h-5" /> Add Device</button>
          </div>

        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default AddDevice