import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import "./styles.css"

// import required modules
import { Autoplay, Navigation } from "swiper/modules"
import Testimonial from "./Testimonial"
import { useEffect, useState } from "react"
import axios from "axios"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setTestimonials(res.data)
    })
  }, [])
  return (
    <div className="px-5 md:px-10 lg:px-20 mt-20">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
