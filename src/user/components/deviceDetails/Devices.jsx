import React, {  useState } from 'react'
import DeviceTable from './DeviceTable'
import DeviceDetails from './DeviceDetails'
import { Search } from 'lucide-react'
import { toast,ToastContainer } from 'react-toastify'
import { getMetricesAPI } from '../../../services/allAPI'
import { useEffect } from 'react'

function Devices({deviceDetails}) {

  const [selectedDevice, setSelectedDevice] = useState(null)
  const [metrices,setMetrices] = useState([])

      const openViewDetails = (device)=>{
        if (device.status == "offline") {
          toast.info("Device is offline")
        }
        else{
          setSelectedDevice(device)
        }
      }

      useEffect(()=>{
        if (selectedDevice) {
          fetchMetrics(selectedDevice)
          setInterval(()=>{
            fetchMetrics(selectedDevice)
          },5000)
        }
      },[selectedDevice])

      const fetchMetrics = async(device)=>{
          try{
          const token = sessionStorage.getItem("token")
          const reqHeader = {
             "Authorization" : `Bearer ${token}`
           }
          const result = await getMetricesAPI(device._id,reqHeader)
          if (result.status == 200) {
            setMetrices(result.data)
          }
          else{
            console.log(result);
          }
        }
        catch(err){
          console.log(err);
        }
        
      }

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-6">

      {/* Page header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Devices</h1>
          <p className="text-gray-600">
            View and manage your assigned IoT devices
          </p>
        </div>

        {/* Search */}
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search devices..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400"><Search/></span>
        </div> */}
      </div>

      {/* Devices Table */}
      <div className="bg-white rounded-xl shadow p-5">
        <DeviceTable devices={deviceDetails} onViewDetails={openViewDetails}/>
      </div>
       {
        selectedDevice &&
        <DeviceDetails metrices={metrices} device={selectedDevice} onClose={()=>setSelectedDevice(null)}/>
       }
       <ToastContainer
          position="top-center"
           autoClose={2000}
           theme="dark"
        />
    </div>
    
  )
}

export default Devices