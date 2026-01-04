import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// register api: called by addUser component - admin
export const registerAPI = async(registerUser,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/register`,registerUser,reqHeader)
}

// register api: called by auth component 
export const loginAPI = async(loginUser)=>{
    return await commonAPI("POST",`${serverURL}/login`,loginUser)
}

// allusers api called by adddevice components when the page loads
export const allUsersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/allusers`,{},reqHeader)
}

// addDevice API called by adddevice component when add device btn clicked
export const addDeviceAPI = async(deviceDetails,reqHeader)=>{
   return await commonAPI("POST",`${serverURL}/admin/addDevice`,deviceDetails,reqHeader)
}

// getalldevice API called by managedevice component when page loads
export const getAllDeviceAPI = async(reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/admin/alldevice`,{},reqHeader)
}

// approveDevice API called by managedevice component when approve btn clicked
export const approveDeviceAPI = async(id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/admin/approve/${id}`,{},reqHeader)
}

// disableDevice API called by managedevice component when disable btn clicked
export const disableDeviceAPI = async(id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/admin/disable/${id}`,{},reqHeader)
}

// deleteDevice API called by managedevice component when delete btn clicked
export const deleteDeviceAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/admin/delete/${id}`,{},reqHeader)
}

// assignedusers API called by manageuser component when page loads
export const assinedUsersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin/assignedUsers`,{},reqHeader)
}

// admindetails api called by adminprofile component when page loads
export const adminDetailsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin/profile`,{},reqHeader)
}

// admindetails api called by adminprofile component when page loads
export const recentAlertsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin/recentalerts`,{},reqHeader)
}