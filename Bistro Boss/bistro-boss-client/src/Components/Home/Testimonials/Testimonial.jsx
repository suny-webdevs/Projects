import quota from "../../../assets/home/quote-left 1.png"
import PropTypes from "prop-types"
import { Rating } from "@smastrom/react-rating"

import "@smastrom/react-rating/style.css"

const Testimonial = ({ testimonial }) => {
  return (
    <div>
      <div className="space-y-9">
        <div className="flex justify-center">
          <Rating
            style={{ maxWidth: 180 }}
            value={testimonial.rating}
            readOnly
          />
        </div>
        <div className="flex justify-center">
          <img
            src={quota}
            className="bg-center w-20 h-20"
          />
        </div>
        <p className="text-center text-lg lg:px-40">{testimonial.details}</p>
        <h2 className="text-center text-[#CD9003] text-xl font-medium uppercase">
          {testimonial.name}
        </h2>
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  testimonial: PropTypes.object,
}

export default Testimonial
