import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { allAlertsAPI } from '../../../services/allAPI';
function AllAlerts() {
  
    const [allAlerts,setAllAlerts] = useState([])
        console.log(allAlerts);
        
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
            const result = await allAlertsAPI(reqHeader)  
            if (result.status ==200) {
              setAllAlerts(result.data)
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
        allAlerts?.length>0?
        allAlerts.map((alert) => (
          <div key={alert?._id} className={`flex justify-between items-start p-5 rounded-xl border transition-all ${alert?.status == "resolve" ? "bg-green-50 border-green-200" :alert?.severity === "med" ? "bg-yellow-50 border-yellow-200": "bg-red-50 border-red-200" }`}>
            <div className="flex gap-4 justify-between items-center">
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
                <p className="text-sm text-gray-500">{alert?.status == "active" ?"Not Resolved":`Resolved by: ${alert?.resolvedBy?.username}`}</p>
                <p className="text-sm text-gray-500"> resolved at : {alert?.resolvedAt? new Date(alert?.resolvedAt).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' }): '—'}</p>
              </div>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
                <Clock className="w-4 h-4" />
                {alert?.createdAt? new Date(alert?.createdAt).toLocaleTimeString([],{
                hour:"2-digit",
                minute:"2-digit"
            }):"-"}</div>
          </div>
          
        ))
      :
      <p className='font-bold'>No Alerts</p>
      }
      </div>
    </div>
  )
}

export default AllAlerts