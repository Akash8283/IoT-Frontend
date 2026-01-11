import { Wifi, WifiOff } from 'lucide-react';
import React from 'react'

function DeviceStatusBadge({status}) {
   const isOnline = status === 'online';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
        isOnline
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-rose-100 text-rose-700'
      }`}
    >
      {
        isOnline?<Wifi/>:<WifiOff/>
      }
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}

export default DeviceStatusBadge