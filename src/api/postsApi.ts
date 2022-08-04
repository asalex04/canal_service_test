import {$fetchHost} from "./index";


export const fetchPosts = async (limit: number) => {
    const response = await $fetchHost.get(`posts?_limit=${limit}`, )
    return response.data
}
export const fetchUsers = async (limit: number) => {
    const response = await $fetchHost.get(`users?_limit=${limit}`, )
    return response.data
}
export const fetchPhotos = async (limit: number) => {
    const response = await $fetchHost.get(`photos?_limit=${limit}`, )
    return response.data
}
