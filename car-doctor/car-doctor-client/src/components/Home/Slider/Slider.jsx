import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

import "./styles.css"

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules"
import { useEffect, useState } from "react"
import axios from "axios"
import Slide from "./Slide"

const Slider = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    axios.get("/slides.json").then((res) => setSlides(res.data))
  }, [])

  return (
    <div className="h-[calc(100vh_-_100px)]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide
              img={slide.image}
              title={slide.title}
              desc={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
