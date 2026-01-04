import React, { useState } from 'react'
import DeviceTable from '../components/deviceDetails/DeviceTable'
import DeviceDetails from '../components/deviceDetails/DeviceDetails'
import { Search } from 'lucide-react'


function Devices() {

  const [selectedDevice,setSelectedDevice] = useState(null)

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
        <div className="relative">
          <input
            type="text"
            placeholder="Search devices..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400"><Search/></span>
        </div>
      </div>

      {/* Devices Table */}
      <div className="bg-white rounded-xl shadow p-5">
        <DeviceTable onViewDetails={setSelectedDevice}/>
      </div>
       <DeviceDetails
       device={selectedDevice}
       onClose={()=>setSelectedDevice(null)}
       />
    </div>
  )
}

export default Devices