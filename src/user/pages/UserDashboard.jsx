import React, { useState } from 'react'
import DeviceTable from '../components/deviceDetails/DeviceTable'
import DeviceCard from '../../components/DeviceCard'
import DeviceDetails from '../components/deviceDetails/DeviceDetails';
import {   
  HardDrive, 
  CheckCircle, 
  PowerOff, 
  AlertCircle
} from 'lucide-react';
import Header from '../components/layout/Header';


function UserDashboard() {
  const [selectedDevice, setSelectedDevice] = useState(null);

  {selectedDevice && (
   <DeviceDetails 
      device={selectedDevice} 
      onClose={() => setSelectedDevice(null)} 
   />
  )}

  const devices = [
    { id: 'dev-a91c3f', location: 'Factory Floor 1', status: 'Online', battery: 82, lastSeen: 'Just now' },
    { id: 'dev-4d2b7d', location: 'Warehouse 2', status: 'Online', battery: 76, lastSeen: '1 minute ago' },
    { id: 'dev-b8f2a9', location: 'Factory Floor 2', status: 'Offline', battery: 55, lastSeen: '5 minutes ago' },
    { id: 'dev-c6e1d1', location: 'Storage Room', status: 'Offline', battery: 41, lastSeen: '10 minutes ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
       <Header/>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DeviceCard title="Total Devices" count="5" icon={HardDrive} color="blue" />
          <DeviceCard title="Online Devices" count="3" icon={CheckCircle} color="green" />
          <DeviceCard title="Offline Devices" count="2" icon={PowerOff} color="red" />
          <DeviceCard title="Alerts" count="1" icon={AlertCircle} color="yellow" />
        </div>
       
        {/*Table section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-bold text-slate-800">My Devices</h2>
            
          </div>
          
          <DeviceTable devices={devices} onViewDetails={setSelectedDevice} />
        </div>

      </main>

      {/* Detail Modal */}
      {selectedDevice && (
        <DeviceDetails device={selectedDevice} onClose={() => setSelectedDevice(null)} />
      )}
    </div>
  );
}

export default UserDashboard