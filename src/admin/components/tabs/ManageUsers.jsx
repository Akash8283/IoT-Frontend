import React, { useState } from 'react'
import { Eye, UserPlus } from "lucide-react";
import AddUser from './AddUser';
import UserDevicesModal from '../deviceDetails/UserDevicesModal';
import { assinedUsersAPI } from '../../../services/allAPI';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function ManageUsers() {

   const [searchKey,setSearchKey] = useState("")
   const [addUser,setAddUser] = useState(null)
   const [selectedUsers,setSelectedUsers] = useState(null)
   const [allUsers,setAllUsers] = useState([])
  //  console.log(allUsers);
   
   useEffect(()=>{
    const token = sessionStorage.getItem("token")
    getAllUsers(token)
   },[])

  const getAllUsers = async(token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await assinedUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    }
    else{
      console.log(result);
    }
  }

  const filterUsers = allUsers.filter(user=>
    user.username.toLowerCase().includes(searchKey.toLowerCase())
  )
  

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Users
          </h1>
          <p className="text-gray-600">
            View platform users and their assigned devices
          </p>
        </div>

        <button onClick={()=>setAddUser(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* Users table */}
      <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">

        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Registered Users
          </h2>

          <input
            value={searchKey}
            onChange={e=>setSearchKey(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          {
            filterUsers?.length>0?
            <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Assigned Devices</th>
                {/* <th className="px-6 py-4 text-left">Status</th> */}
                <th className="px-6 py-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filterUsers?.map((user) => (
                <tr
                  key={user?._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {user?.username}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {user?.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user?.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user?.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {user?.assignedDevicesCount}
                  </td>
                  {/* <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Active
                    </span>
                  </td> */}
                  <td className="px-6 py-4">
                    <button onClick={()=>setSelectedUsers(user)} className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            :
            <p className='text-center font-bold my-3'>No Users</p>
          }
        </div>

      </div>
      {/* modal */}
      <UserDevicesModal user={selectedUsers} onClose={()=>setSelectedUsers(null)}/>
      <AddUser open={addUser} onClose={()=>setAddUser(null)}/>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />  
    </div>
  )
}

export default ManageUsers