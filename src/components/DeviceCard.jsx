import React from 'react'

function DeviceCard({ title, count, icon:Icon, color }) {
// Map color names to Tailwind classes
  const colorVariants = {
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    red: 'bg-rose-500',
    yellow: 'bg-amber-400',
  };

  return (
    <div className={`${colorVariants[color]} text-white rounded-xl p-6 shadow-lg flex items-center justify-between`}>
      <div>
        <h3 className="text-sm font-medium opacity-90 mb-1">{title}</h3>
        <p className="text-3xl font-bold">{count}</p>
      </div>
      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}

export default DeviceCard