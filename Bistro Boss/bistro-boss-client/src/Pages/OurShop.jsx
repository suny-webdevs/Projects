import { useState } from "react"
import { Helmet } from "react-helmet-async"
import PageTitle from "../Components/PageTitle/PageTitle"
import bannerBg from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "../Components/OurShop/styles.css"
import useMenus from "../Hooks/useMenus"
import TabItems from "../Components/OurShop/TabItems/TabItems"
import { useParams } from "react-router-dom"

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex)
  const [menus] = useMenus()

  const desserts = menus.filter((item) => item.category === "dessert")
  const soups = menus.filter((item) => item.category === "soup")
  const salads = menus.filter((item) => item.category === "salad")
  const pizzas = menus.filter((item) => item.category === "pizza")
  const drinks = menus.filter((item) => item.category === "drinks")

  return (
    <div>
      <Helmet>
        <title>Our Shop - Bistro Boss Restaurant</title>
      </Helmet>
      <PageTitle
        bgImg={bannerBg}
        title={"our shop"}
        subTitle={"would you like to buy a dish?"}
      />
      <div className="mt-20 container mx-auto px-5 md:px-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <TabItems items={salads} />
          </TabPanel>
          <TabPanel>
            <TabItems items={pizzas} />
          </TabPanel>
          <TabPanel>
            <TabItems items={soups} />
          </TabPanel>
          <TabPanel>
            <TabItems items={desserts} />
          </TabPanel>
          <TabPanel>
            <TabItems items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default OurShop
