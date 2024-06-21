import { Helmet } from "react-helmet-async"
import ChefRecommends from "../Components/Home/ChefRecommends/ChefRecommends"
import ChefService from "../Components/Home/ChefService/ChefService"
import Contact from "../Components/Home/Contact/Contact"
import Featured from "../Components/Home/Featured/Featured"
import OrderOnline from "../Components/Home/OrderOnline/OrderOnline"
import PopularMenu from "../Components/Home/PopularMenu/PopularMenu"
import Slider from "../Components/Home/Slider/Slider"
import Testimonials from "../Components/Home/Testimonials/Testimonials"
import SectionTitle from "../Components/SectionTitle/SectionTitle"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant</title>
      </Helmet>

      {/* Section-1: Banner slider */}
      <Slider />

      {/* Section-2: Order online */}
      <div className="mt-20">
        <SectionTitle
          preTitle={"From 11:00am to 10:00pm"}
          title={"Order online"}
        />
        <OrderOnline />
      </div>

      {/* Section-3: About Bistro Boss/Chef service */}
      <ChefService />

      {/* Section-4: Popular menus */}
      <div className="mt-20">
        <SectionTitle
          title={"From our menu"}
          preTitle={"Check it out"}
        />
        <PopularMenu />
      </div>

      {/* Section-5: Contact number */}
      <Contact />

      {/* Section-6: Chef recommends */}
      <div className="mt-20">
        <SectionTitle
          title={"chef recommends"}
          preTitle={"Should try"}
        />
        <ChefRecommends />
      </div>

      {/* Section-7: Featured */}
      <Featured />

      {/* Section-8: Testimonials */}
      <div className="mt-20">
        <SectionTitle
          title={"testimonials"}
          preTitle={"what out clients say"}
        />
        <Testimonials />
      </div>
    </div>
  )
}

export default Home
