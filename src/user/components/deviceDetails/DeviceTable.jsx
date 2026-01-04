import React from 'react'
import { Battery, BatteryWarning } from 'lucide-react';
import DeviceStatusBadge from './DeviceStatusBadge'

function DeviceTable({ onViewDetails }) {

  // Mock data
  const devices = [
    { id: 'dev-a91c3f', location: 'Factory Floor 1', status: 'Online', battery: 82, lastSeen: 'Just now' },
    { id: 'dev-a91c3f', location: 'Factory Floor 1', status: 'Online', battery: 82, lastSeen: 'Just now' },
    { id: 'dev-a91c3f', location: 'Factory Floor 1', status: 'Online', battery: 82, lastSeen: 'Just now' },
    { id: 'dev-a91c3f', location: 'Factory Floor 1', status: 'Online', battery: 82, lastSeen: 'Just now' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Device ID</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Battery</th>
              <th className="px-6 py-4">Last Seen</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {devices.map((device) => (
              <tr key={device.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800">{device.id}</td>
                <td className="px-6 py-4 text-gray-600">{device.location}</td>
                <td className="px-6 py-4">
                  <DeviceStatusBadge status={device.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    {device.battery < 20 ? (
                      <BatteryWarning className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Battery className="w-4 h-4 text-emerald-500" />
                    )}
                    <span>{device.battery}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{device.lastSeen}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => onViewDetails(device)}
                    className="px-4 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-md hover:bg-blue-600 transition shadow-sm shadow-blue-200"
                  >
                    View Details &gt;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeviceTable