import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css"

// import required modules
import { Navigation, Autoplay } from "swiper/modules"
import Slide from "./Slide"

const Slider = () => {
  return (
    <div className="h-[calc(100vh_-_68px)]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
