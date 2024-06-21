import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

// import "./styles.css"

// import required modules
// import { Pagination } from "swiper/modules"

const OrderOnline = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 mt-10">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} />
          <h3 className="text-3xl text-center text-white font-medium uppercase absolute left-0 right-0 bottom-4">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-3xl text-center text-white font-medium uppercase absolute left-0 right-0 bottom-4">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-3xl text-center text-white font-medium uppercase absolute left-0 right-0 bottom-4">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-3xl text-center text-white font-medium uppercase absolute left-0 right-0 bottom-4">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-3xl text-center text-white font-medium uppercase absolute left-0 right-0 bottom-4">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default OrderOnline
