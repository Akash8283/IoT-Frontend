import React from 'react'
import { ShieldCheck, Mail, UserCircle } from "lucide-react";

function AdminProfile({adminDetails}) {

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Profile
        </h1>
        <p className="text-gray-600">
          View administrator account information
        </p>
      </div>

      {/* Profile card */}
      {
        adminDetails ?
         (
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
          <img width={"50px"} src="https://www.pngmart.com/files/23/User-PNG-Transparent.png" alt="" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-gray-900">
            {adminDetails?.username}
          </h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            {adminDetails?.email}
          </div>

        </div>
      </div>
         )
        :
        <p className='font-bold'>Loading...</p>
      }

      {/* Account details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Account Details
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500">Role</p>
              <p className="font-medium text-gray-800">Administrator</p>
            </div>

            <div>
              <p className="text-gray-500">Account Status</p>
              <p className="font-medium text-green-600">Active</p>
            </div>

            
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            System Privileges
          </h3>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>✔ Manage users </li>
            <li>✔ Add and approve devices</li>
            <li>✔ Monitor all system alerts</li>
            <li>✔ View device metrics</li>
            <li>✔ System-level access</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default AdminProfile