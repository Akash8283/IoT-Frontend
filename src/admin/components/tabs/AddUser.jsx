import { UserPlus, X } from 'lucide-react'
import React, { useState } from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { registerAPI } from '../../../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';

function AddUser({open,onClose}) {

    const [registerUser,setRegisterUser] = useState({
      username:"",
      email:"",
      password:""
    })
    // console.log(registerUser);

    const [viewPassword,setViewPassword] = useState(true)

    const handleRegister = async(e)=>{
      e.preventDefault()
      const token = sessionStorage.getItem("token")
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
      }
      if (token) {
        const {username,email,password} = registerUser
        if (username && email && password) {
          try{
            const result = await registerAPI(registerUser,reqHeader)
            if (result.status == 200) {
              toast.success("Employee Registration Successfull!!!")
              setRegisterUser({username:"",email:"",password:""})
            }
            else if(result.status==409){
              toast.warning(result.response.data)
              setRegisterUser({username:"",email:"",password:""})
            }
            else{
              console.log(result);
              toast.error("Something went wrong")
              setRegisterUser({username:"",email:"",password:""})
            }
          }catch(err){
            console.log(err);
          }
        }
        else{
          toast.info("Please fill the form Completely")
        }
      }
    }

    if(!open) return null
    return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            Add New User
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X />
          </button>
        </div>

        <div className="p-6 space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input value={registerUser.username} onChange={e=>setRegisterUser({...registerUser,username:e.target.value})} type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input value={registerUser.email} onChange={e=>setRegisterUser({...registerUser,email:e.target.value})} type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Temporary Password
            </label>
            <div className=' relative w-full'>
              <input value={registerUser.password} onChange={e=>setRegisterUser({...registerUser,password:e.target.value})} type={viewPassword?"password":"text"} placeholder="Temporary password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {
                viewPassword?
              <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='absolute left-125 top-1/2 text-gray-500 cursor-pointer -translate-y-1/2'/>
              :
              <FaEye onClick={()=>setViewPassword(!viewPassword)} className='absolute left-125 top-1/2 text-gray-500 cursor-pointer -translate-y-1/2'/>
              }
            </div>
            <p className="text-xs text-gray-500 mt-1">
              User will change password on first login.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-700">
            Devices can be assigned after user creation.
          </div>
        </div>

        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm">Cancel</button>
          <button onClick={handleRegister} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm shadow"><UserPlus size={16} />Add User</button>
        </div>

      </div>
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default AddUser