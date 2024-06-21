import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { userSignOut } = useAuth()

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token")
      config.headers.authorization = `Bearer ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosSecure.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const status = error.response.status
      if (status === 401 || status === 403) {
        await userSignOut()
        navigate("/")
      }
      return Promise.reject(error)
    }
  )

  return axiosSecure
}

export default useAxiosSecure
