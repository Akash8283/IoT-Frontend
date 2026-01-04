import React, { useState } from 'react'
import { AlertTriangle, CheckCircle } from "lucide-react";

function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "offline",
      message: "Device dev-b8f2a9 - High Temperature",
      time: "5 minutes ago",
      resolved: false,
    },
    {
      id: 2,
      type: "offline",
      message: "Device dev-b8f2a9 High Temperature",
      time: "5 minutes ago",
      resolved: false,
    },
  ]);


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
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex justify-between items-start p-5 rounded-xl border transition-all
              ${
                alert.resolved
                  ? "bg-green-50 border-green-200"
                  : alert.type === "battery"
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-red-50 border-red-200"
              }`}
          >
            <div className="flex gap-4">
              {alert.resolved ? (
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
                <p
                  className={`font-medium ${
                    alert.resolved
                      ? "text-green-800"
                      : "text-gray-800"
                  }`}
                >
                  {alert.message}
                </p>
                <p className="text-sm text-gray-500">{alert.time}</p>
              </div>
            </div>

            {!alert.resolved && (
              <button
                className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Resolve
              </button>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Alerts