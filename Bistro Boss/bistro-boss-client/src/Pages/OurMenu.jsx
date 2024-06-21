import { Helmet } from "react-helmet-async"
import PageTitle from "../Components/PageTitle/PageTitle"

import menuBanner from "../assets/menu/banner3.jpg"
import dessertBg from "../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../assets/menu/pizza-bg.jpg"
import saladBg from "../assets/menu/salad-bg.jpg"
import soupBg from "../assets/menu/soup-bg.jpg"

import MenuItems from "../Components/OurShop/MenuItems/MenuItems"
import useMenus from "../Hooks/useMenus"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import Menu from "../Components/Home/PopularMenu/menu"

const OurMenu = () => {
  const [menus] = useMenus()

  const offered = menus.filter((item) => item.category === "offered")
  const desserts = menus.filter((item) => item.category === "dessert")
  const pizzas = menus.filter((item) => item.category === "pizza")
  const salads = menus.filter((item) => item.category === "salad")
  const soups = menus.filter((item) => item.category === "soup")

  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
      </Helmet>

      <PageTitle
        bgImg={menuBanner}
        title={"our menu"}
        subTitle={"would you like to try a dish?"}
      />

      <div className="mt-20">
        <SectionTitle
          title={"today's offer"}
          preTitle={"don't miss"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20 mt-10">
          {offered.map((item) => (
            <Menu
              key={item._id}
              menu={item}
            />
          ))}
        </div>
      </div>

      <MenuItems
        titleBg={dessertBg}
        title={"dessert"}
        menu={desserts}
      />
      <MenuItems
        titleBg={pizzaBg}
        title={"pizza"}
        menu={pizzas}
      />
      <MenuItems
        titleBg={saladBg}
        title={"salad"}
        menu={salads}
      />
      <MenuItems
        titleBg={soupBg}
        title={"soup"}
        menu={soups}
      />
    </div>
  )
}

export default OurMenu
