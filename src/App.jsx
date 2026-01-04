import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Auth from './pages/Auth'
import { useState } from 'react'
import PreLoader from './components/PreLoader'
import Pnf from './pages/Pnf'
import Devices from './user/pages/Devices'
import Profile from './user/pages/Profile'
import MainDashboard from './user/pages/MainDashboard'
import AdminDashboard from './admin/pages/AdminDashboard'
import AddUser from './admin/components/tabs/AddUser'
import ManageUsers from './admin/components/tabs/ManageUsers'
import ManageDevice from './admin/components/tabs/ManageDevice'

function App() {

  const [loading,setLoading] = useState(true)

  setTimeout(()=>{
    setLoading(false)
  },4000)

  return (
    <>
     <Routes>
      <Route path='/' element={loading?<PreLoader/>:<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>

      <Route path='/dashboard' element={<MainDashboard/>}/>
      <Route path='/device' element={<Devices/>}/>
      <Route path='/profile' element={<Profile/>}/>

      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin/dashboard/adduser' element={<AddUser/>}/>
      <Route path='/admin/managedevice' element={<ManageDevice/>}/>
      <Route path='/admin/manageusers' element={<ManageUsers/>}/>
      
      <Route path='/*' element={<Pnf/>}/>
     </Routes>
    </>
  )
}

export default App
