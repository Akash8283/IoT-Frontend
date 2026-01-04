import { X, Server } from "lucide-react";

function UserDevicesModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {user?.username}'s Devices
            </h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">

          {user?.devices?.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No devices assigned to this user.
            </p>
          ) : (
            user?.devices?.map((device) => (
              <div
                key={device._id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Server className="text-blue-500" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {device.deviceID}
                    </p>
                    <p className="text-sm text-gray-500">
                      {device.location}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    device.status === "online"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {device.status}
                </span>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t bg-gray-50 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDevicesModal;
