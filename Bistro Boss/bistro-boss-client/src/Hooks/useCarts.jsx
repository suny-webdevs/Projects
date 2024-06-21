import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useCarts = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts")
      return res.data
    },
  })

  return [carts, refetch]
}

export default useCarts
