import React from 'react'
import { Battery, BatteryWarning, Wifi, WifiOff } from 'lucide-react';
import DeviceStatusBadge from './DeviceStatusBadge'

function DeviceTable({ onViewDetails,devices}) {
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Device ID</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Seen</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
                {
                devices?.length>0?
                 devices?.map(device=>(
                  <tr key={device?._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800">{device?.deviceID}</td>
                <td className="px-6 py-4 text-gray-600">{device?.location}</td>
                <td className="px-6 py-4 gap-2">
                {<DeviceStatusBadge status={device?.status}/>}
                </td>
                <td className="px-6 py-4 text-gray-500">{device?.lastSeen?new Date(device?.lastSeen).toLocaleTimeString([],{
                  hour:"2-digit",
                  minute:"2-digit"
                }) :'-'}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={()=>onViewDetails(device)}
                    className="px-4 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-md hover:bg-blue-600 transition shadow-sm shadow-blue-200"
                  >
                    View Details &gt;
                  </button>
                </td>
              </tr>
                 ))
                :
                <tr>
                  <td colSpan={5} className='px-6 py-10 text-center text-gray-500 font-medium'>No Devices found</td>
                </tr>
                }
          </tbody>
        </table>      
      </div>
    </div>
  );
}

export default DeviceTable