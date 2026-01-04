import React from 'react'
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from 'react';
import { recentAlertsAPI } from '../../../services/allAPI';


function RecentAlerts() {
 
    const [recentAlerts,setRecentAlerts] = useState([])
    console.log(recentAlerts);
    
    useEffect(()=>{
      const token = sessionStorage.getItem("token")
      const interval = setInterval(()=>{
        getRecentAlerts(token)
      },5000)
      return ()=> clearInterval(interval)
    },[])

    const getRecentAlerts = async(token)=>{
        const reqHeader = {
            "Authorization" : `Bearer ${token}`
          }
        const result = await recentAlertsAPI(reqHeader)  
        if (result.status ==200) {
          setRecentAlerts(result.data)
        }
        else{
          console.log(result);
        }
    }

  
  return (
    <div className="bg-white rounded-xl shadow border border-gray-100">

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Alerts
        </h2>
      </div>

      {/* Alert list */}
      <div className="divide-y divide-gray-100">
        {
          recentAlerts?.length>0 ?
          recentAlerts?.map((alert) => (
          <div
            key={alert?._id}
            className="px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition"
          >
            <div className="flex gap-4">

              {alert?.status=="resolved" ? (
                <CheckCircle className="text-green-500 mt-1" />
              ) : (
                <AlertTriangle
                  className={`mt-1 ${
                    alert?.severity === "high"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                />
              )}

              <div>
                <p
                  className={`font-medium ${
                    alert?.status == "resolved"
                      ? "text-green-700"
                      : "text-gray-800"
                  }`}
                >
                  {alert?.message}
                </p>
                <p className="text-sm text-gray-500">
                  Device: {alert?.device?.deviceID}
                </p>
                  <p className='text-sm text-gray-500'>
                   {alert?.resolvedBy}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              {alert?.createdAt? new Date(alert?.createdAt).toLocaleTimeString([], {
             hour: '2-digit',
             minute: '2-digit'
              })
            : '—'}
            </div>
          </div>
        ))
          :
          <p className='text-center font-bold'>Loading...</p>
        }
      </div>

      
    </div>
  )
}

export default RecentAlerts