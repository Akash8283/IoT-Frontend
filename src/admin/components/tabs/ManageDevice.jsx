import React, { useEffect, useState } from 'react'
import { CheckCircle, XCircle, Trash2, CrossIcon } from "lucide-react";
import { approveDeviceAPI, deleteDeviceAPI, disableDeviceAPI, getAllDeviceAPI } from '../../../services/allAPI';
import { toast,ToastContainer } from 'react-toastify'

function ManageDevice() {

  const [allDevices,setAllDevices] = useState([])
  // console.log(allDevices);
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    handlGetAllDevices(token)
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

  const handleApprove = async(id)=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await approveDeviceAPI(id,reqHeader)
      if (result.status == 200) {
        toast.success("Device approved successfully")
        handlGetAllDevices(token)
      }
      else if (result.status == 404) {
        toast.error(result.response.data)
      }
      else if (result.status == 400) {
        toast.warning("Device already approved")
      }
      else{
        toast.error("Something went wrong")
      }
    }
  }

  const handleDisable = async(id)=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await disableDeviceAPI(id,reqHeader)
      if (result.status == 200) {
        toast.warning("Device disabled")
        handlGetAllDevices(token)
      }
      else if (result.status == 404) {
        toast.error(result.response.data)
      }
      else if (result.status == 400) {
        toast.warning("Device already disabled")
      }
      else{
        toast.error("Something went wrong")
      }
    }
  }
  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await deleteDeviceAPI(id,reqHeader)
      if (result.status == 200) {
        toast.success("Device deleted successfully")
        handlGetAllDevices(token)
      }
      else if (result.status == 403) {
        toast.warning("Approved device can't be deleted")
      }
      else if (result.status == 404) {
        toast.error(result.response.data)
      }
      else{
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Manage Devices
        </h1>
        <p className="text-gray-600">
          View, assign, and control all registered IoT devices
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">

        {
          allDevices?.length>0 ?
          <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Device ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Assigned User</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Approved</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {allDevices.map((device) => (
              <tr
                key={device?._id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {device?.deviceID}
                </td>
                <td className="px-6 py-4">{device?.name}</td>
                <td className="px-6 py-4">{device?.location}</td>
                <td className="px-6 py-4">{device?.assignedUser?.username}</td>
                {/* Status */}
                <td className="px-6 py-4">
                  <span className='text-red-700 bg-red-100 text-xs rounded-full px-3 py-1 font-medium'>Offline</span>
                </td>

                {/* Approval */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      device.approved == true
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {device.approved==true?"Approved":"Pending"}
                  </span>
                </td>


                {/* Actions */}
                <td className="px-6 py-4 flex justify-end gap-2">

                    <button
                    className={device.approved?"p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition":"p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition"}
                    title="approve/disable"
                  >
                    {device.approved?<XCircle onClick={()=>handleDisable(device?._id)} className="w-4 h-4" />:<CheckCircle onClick={()=>handleApprove(device?._id)} className="w-4 h-4" />}
                  </button>

                  <button onClick={()=>handleDelete(device?._id)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition" title="Delete"><Trash2 className="w-4 h-4" /></button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
          :
          <p className='text-center p-2 font-bold'>No Devices to Show</p>
        }

      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default ManageDevice