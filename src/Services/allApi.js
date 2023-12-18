import { base_url } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const registerUser = async(reqBody) => {
    return await commonAPI("POST", `${base_url}/users/register`, reqBody, "")
}

export const loginAPI = async(reqBody) => {
    return await commonAPI("POST", `${base_url}/users/login`, reqBody, "")
}

export const createCategoryApi = async(reqBody) => {
    return await commonAPI("POST", `${base_url}/list/create`, reqBody, "")
}

export const getCategoryAPI = async() => {
    return await commonAPI("POST", `${base_url}/list/getall`, "", "")
}
