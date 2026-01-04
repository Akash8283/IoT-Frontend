import React, { useState } from 'react'
import { FaEyeSlash,FaEye } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../services/allAPI'
import { toast,ToastContainer } from 'react-toastify'

function Auth() {

  const [loginUser,setLoginUser] = useState({
    email:"",
    password:""
  })
  const [viewPassword,setViewPassword] = useState(true)
  const navigate = useNavigate()
  console.log(loginUser);

  const handleLogin = async(e)=>{
     e.preventDefault()
     const {email,password} = loginUser
     if (email && password) {
      try{
        const result = await loginAPI(loginUser)
        if (result.status == 200) {
          toast.success("Login Successfull")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if (result.data.user.role == "admin") {
              navigate('/admin/dashboard')
            }
            else{
              navigate('/dashboard')
            }
          },2500)
        }
        else if(result.status == 401 || result.status == 404){
          toast.warning(result.response.data)
        }
        else{
          toast.error("Something went wrong")
        }
      }catch(err){
        console.log(err);
      }
     }
     else{
      toast.info("Please fill the form Completely")
     }
  }
  
  return (
    <div className='flex h-screen items-center justify-center bg-[url(/login-bg.png)] bg-cover bg-center'>
      <div className='p-5 m-5 border-gray-400 shadow rounded flex flex-col justify-center  bg-white'>
        <div className='flex items-center justify-center '>
          <img width={'40px'} src="/iot.png" alt="" />
          <h1 className='font-semibold'>IoT Monitor</h1>
        </div>
        <div className='my-5'>
          <h1 className='font-bold text-2xl'>Welcome</h1>
          <h1 className='text-gray-500'>Log in to your dashboard</h1>
          <div className='flex flex-col'>
            <input value={loginUser.email} onChange={e=>setLoginUser({...loginUser,email:e.target.value})} className='my-3 border border-gray-300 p-3 w-full rounded' type="mail" placeholder='Email' />
            <div className='relative w-full'>
              <input value={loginUser.password} onChange={e=>setLoginUser({...loginUser,password:e.target.value})} className='my-1 border border-gray-300 p-3 w-full rounded' type={viewPassword?"password":"text"} placeholder='Password' />
              {
                viewPassword?
                  <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='absolute left-78 top-1/2 text-gray-500 cursor-pointer -translate-y-1/2'/>
                     :
                  <FaEye onClick={()=>setViewPassword(!viewPassword)} className='absolute left-78 top-1/2 text-gray-500 cursor-pointer -translate-y-1/2'/>
              }
            </div>
          </div>
            <Link className='flex justify-end text-blue-500 '>Forgot Password ?</Link>
            <button onClick={handleLogin} className='p-3 flex justify-center w-full bg-blue-500 my-4 text-white rounded cursor-pointer'>LOGIN</button>
            <p className='text-center'>Don't have an account? <span className='text-gray-500'>Contact Administrator</span></p>
          </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default Auth