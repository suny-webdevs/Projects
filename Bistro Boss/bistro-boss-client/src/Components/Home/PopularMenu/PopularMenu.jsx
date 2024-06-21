import { useEffect, useState } from "react"
import axios from "axios"
import Menu from "./menu"

const PopularMenu = () => {
  const [menus, setMenus] = useState([])
  useEffect(() => {
    axios.get("/menu.json").then((res) => {
      const popularItems = res.data.filter(
        (menu) => menu.category === "popular"
      )
      setMenus(popularItems)
    })
  }, [])
  return (
    <div>
      <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {menus
          .map((menu) => (
            <Menu
              key={menu._id}
              menu={menu}
            />
          ))
          .slice(0, 6)}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 rounded-xl border-b-2 border-black uppercase font-medium">
          View full menu
        </button>
      </div>
    </div>
  )
}

export default PopularMenu
