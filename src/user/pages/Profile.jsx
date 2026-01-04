import React from 'react'

function Profile() {
  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-8">

      {/* page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">View your account information</p>
      </div>

      {/* profile card */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">
        <img
          src="https://www.pngmart.com/files/23/User-PNG-Transparent.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full border"
        />

        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">Akash</h2>
          <p className="text-gray-600">akash@gmail.com</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            User
          </span>
        </div>
      </div>

      {/* account deatils */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold">Account Details</h3>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Role</p>
            <p className="font-medium">User</p>
          </div>

          <div>
            <p className="text-gray-500">Assigned Devices</p>
            <p className="font-medium">5</p>
          </div>

          <div>
            <p className="text-gray-500">Account Status</p>
            <p className="font-medium text-green-600">Active</p>
          </div>
           <div>
            <p className="text-gray-500">Change Your Password</p>
            <input
              type="password"
              placeholder="Password"
              className="w-70 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-70 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ms-5"
            />
            <div className='flex justify-end mr-1'><button  className='cursor-pointer rounded bg-blue-600 px-2 py-1 text-white mt-3'>Submit</button></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile