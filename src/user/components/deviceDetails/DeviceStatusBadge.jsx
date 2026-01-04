import React from 'react'

function DeviceStatusBadge({status}) {
   const isOnline = status.toLowerCase() === 'online';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
        isOnline
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-rose-100 text-rose-700'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOnline ? 'bg-emerald-500' : 'bg-rose-500'
        }`}
      />
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}

export default DeviceStatusBadge