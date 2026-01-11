import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { getUserAllAlertAPI, updateResolveStatusAPI } from '../../../services/allAPI';
import { toast,ToastContainer } from 'react-toastify'

function Alerts() {
  const [alerts, setAlerts] = useState([]);
       console.log(alerts);
       
       useEffect(()=>{
         const token = sessionStorage.getItem("token")
         getAllAlerts(token)
         const interval = setInterval(()=>{
           getAllAlerts(token)
         },5000)
         return ()=> clearInterval(interval)
       },[])
   
       const getAllAlerts = async(token)=>{
           const reqHeader = {
               "Authorization" : `Bearer ${token}`
             }
           const result = await getUserAllAlertAPI(reqHeader)  
           if (result.status ==200) {
             setAlerts(result.data)
           }
           else{
             console.log(result);
           }
       }

       const handleResolve = async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
           "Authorization" : `Bearer ${token}`
        }
        const result = await updateResolveStatusAPI(id,reqHeader)
        if (result.status == 200) {
          toast.success("Resolved")
        }
        else{
          console.log(result);
        }
       }

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Alerts</h1>
        <p className="text-gray-600">
          Monitor and resolve system alerts
        </p>
      </div>

      {/* Alert list */}
      <div className="space-y-4">
      {
        alerts?.length>0?
        alerts.map((alert) => (
          <div key={alert?._id} className={`flex justify-between items-start p-5 rounded-xl border transition-all ${alert?.status == "resolve" ? "bg-green-50 border-green-200" :alert?.severity === "med" ? "bg-yellow-50 border-yellow-200": "bg-red-50 border-red-200" }`}>
            <div className="flex gap-4">
              {alert?.status == "resolve" ? (
                <CheckCircle className="text-green-600 mt-1" />
              ) : (
                <AlertTriangle
                  className={`mt-1 ${
                    alert.type === "battery"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                />
              )}

              <div>
                <p className={`font-medium ${alert?.status == "resolve" ?"text-green-800":"text-gray-800"}`}>
                  {alert?.message}
                </p>
                <p className="text-sm text-gray-500">{alert?.device?.deviceID}</p>
                <p className='text-sm text-gray-500 flex gap-2'>
                              {alert?.createdAt? new Date(alert?.createdAt).toLocaleTimeString([], {
                             hour: '2-digit',
                             minute: '2-digit'
                              })
                            : '—'}</p>
              </div>
            </div>

            {alert?.status =="active" && (
              <button onClick={()=>handleResolve(alert?._id)} className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Resolve
              </button>
            )}
            
          </div>
        ))
      :
      <p className='font-bold'>No Alerts</p>
      }
      </div>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default Alerts