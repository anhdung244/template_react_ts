import axios, { AxiosRequestConfig } from "axios"

const { VITE_PUBLIC_DB_HOST } = import.meta.env
const DB_HOST = VITE_PUBLIC_DB_HOST || "http://localhost:4001"
export const formDataConfig = {
  headers: {
    "Content-Type": "multipart/form-data; ; charset=utf-8",
  },
}
export const blobFileConfig = { responseType: "blob" } as AxiosRequestConfig

export const axiosInstance = axios.create({
  baseURL: `${DB_HOST}/api`,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  signal: new AbortController().signal,
})
