import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure"

const useMenus = () => {
  const [menus, setMenus] = useState([])
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure.get("/menus").then((res) => {
      setMenus(res.data)
    })
  }, [axiosSecure])

  return [menus]
}

export default useMenus
