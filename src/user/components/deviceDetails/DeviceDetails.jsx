import React from 'react';
import { X, Thermometer, Droplets, BatteryCharging, AlertTriangle, Clock } from 'lucide-react';
import DeviceStatusBadge from './DeviceStatusBadge';

function DeviceDetails({ device, onClose }) {
  // If no device is selected, don't render anything
  if (!device) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
              {device.id}
              <DeviceStatusBadge status={device.status || "online"} />
            </h2>
            <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
               {device.location}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-8 bg-slate-50/50">

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase mb-2">
                  <BatteryCharging className="w-4 h-4" /> Battery
               </div>
               <p className={`text-2xl font-bold ${device.battery < 20 ? 'text-amber-500' : 'text-emerald-600'}`}>
                 {device.battery}%
               </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase mb-2">
                  <Clock className="w-4 h-4" /> Last Seen
               </div>
               <p className="text-lg font-bold text-slate-700">{device.lastSeen}</p>
            </div>

             {/* Placeholders for real sensor data */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase mb-2">
                  <Thermometer className="w-4 h-4" /> Temp
               </div>
               <p className="text-2xl font-bold text-slate-700">24°C</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase mb-2">
                  <Droplets className="w-4 h-4" /> Humidity
               </div>
               <p className="text-2xl font-bold text-slate-700">45%</p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Temperature Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-blue-500" /> Temperature
              </h3>
              <div className="h-48 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                [ Chart Component Here ]
              </div>
            </div>

            {/* Humidity Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" /> Humidity
              </h3>
              <div className="h-48 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                [ Chart Component Here ]
              </div>
            </div>
          </div>

          {/* Alerts Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
               <AlertTriangle className="w-4 h-4 text-amber-500" /> Recent Alerts
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-amber-50 text-amber-800 rounded-lg text-sm border border-amber-100">
                <span className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <div>
                  <span className="font-semibold">Low Battery Warning</span>
                  <p className="opacity-90">Battery dropped below 20% at 04:00 AM.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-rose-50 text-rose-800 rounded-lg text-sm border border-rose-100">
                <span className="w-2 h-2 mt-1.5 rounded-full bg-rose-500 shrink-0"></span>
                <div>
                  <span className="font-semibold">Connection Lost</span>
                  <p className="opacity-90">Device failed handshake sequence for 5 minutes.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition text-sm font-medium"
            >
                Close
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition text-sm font-medium shadow-md shadow-blue-200">
                Download Report
            </button>
        </div>

      </div>
    </div>
  );
}

export default DeviceDetails;