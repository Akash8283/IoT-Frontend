import React, { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import { updatePasswordAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'

function Profile({count}) {

  const [password,setPassword] = useState("")  
  const [confirmPassword,setConfirmPassword] = useState("")
  const [passwordMatch,setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  const checkPasswordMatch = (value) => {
  setConfirmPassword(value)
  setPasswordMatch(password === value)
  }

  const updatePassword = async()=>{
    if (!password) {
      toast.info("Please complete the input fields")
    }
    else{
      const token = sessionStorage.getItem("token")
      const reqHeader = {
       "Authorization" : `Bearer ${token}`
      }
      const result = await updatePasswordAPI(password,reqHeader)
      if (result.status == 200) {
        toast.success("Password updated successfully!!! Please Login")
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      }
      else{
        console.log(result);
        toast.error("Something went wrong")
      }
    }

  }

  const userDetails = JSON.parse(sessionStorage.getItem("user"))


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
          <h2 className="text-xl font-semibold text-gray-900">{userDetails.username}</h2>
          <p className="text-gray-600">{userDetails.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            {userDetails.role}
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
            <p className="font-medium">{count}</p>
          </div>

          <div>
            <p className="text-gray-500">Account Status</p>
            <p className="font-medium text-green-600">Active</p>
          </div>
           <div>
            <p className="text-gray-500">Change Your Password</p>
            <input
              value={password}
              onChange={e=>{setPassword(e.target.value)
                setPasswordMatch(e.target.value == confirmPassword)
              }}
              type="password"
              placeholder="Password"
              className="w-70 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              value={confirmPassword}
              onChange={e=>checkPasswordMatch(e.target.value)}
              type="password"
              placeholder="Confirm password"
              className="w-70 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ms-5"
            />
            {!passwordMatch &&
             <p className='text-red-500 mt-1'>*Confirm password must match with new password</p>
            }
            <div className='flex justify-end mr-1'><button onClick={updatePassword} className='cursor-pointer rounded bg-blue-600 px-2 py-1 text-white mt-3'>Submit</button></div>
          </div>
        </div>
      </div>
     <ToastContainer
       position="top-center"
       autoClose={2000}
       theme="dark"
     />
    </div>
  );
}

export default Profile