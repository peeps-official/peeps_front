import axios from 'axios'

export const axiosWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDR,
  withCredentials: true,
})

export const axiosWithoutAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDR,
})
