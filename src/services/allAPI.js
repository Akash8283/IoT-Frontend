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

// recentalerts api called by recentalerts component when page loads
export const recentAlertsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin/recentalerts`,{},reqHeader)
}

// allalerts api called by allalerts component when page loads
export const allAlertsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin/allalerts`,{},reqHeader)
}

// get logined user device details called by userDashboard component when page loads
export const getUserDevicesAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user/device`,{},reqHeader)
}

export const getSingleDevicesAPI = async(id,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/device/${id}`,reqHeader)
}

// get metrics details called by devices component when page loads
export const getMetricesAPI = async(id,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/metrics/${id}`,{},reqHeader)
}

// get user recent alerts called by recentalerts componenet when page loads
export const getUserRecentAlertAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user/recentalerts`,{},reqHeader)
}

// get user all alerts called by alert componenet when page loads
export const getUserAllAlertAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user/allalerts`,{},reqHeader)
}

// update resolve status called by alert component when resolve btn clicked
export const updateResolveStatusAPI = async(id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/alert/${id}`,{},reqHeader)
}

// update password called by profile component when submit btn clicked
export const updatePasswordAPI = async(password,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/updatepassword`,{password},reqHeader)
}