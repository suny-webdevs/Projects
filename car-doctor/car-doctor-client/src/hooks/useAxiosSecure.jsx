import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res
      },
      async (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          await logOut().then(() => {
            toast.success("Logged out")
            navigate("/login")
          })
        }
      }
    )
  }, [logOut, navigate])

  return axiosSecure
}

export default useAxiosSecure
