import PropTypes from "prop-types"
import { Link } from "react-router-dom"
// import { FaLongArrowAltRight } from "react-icons/fa"

const Service = ({ service }) => {
  const { _id, img, title, price } = service

  return (
    <div>
      <div className="card bg-base-100 shadow-md border">
        <figure className="px-5 pt-5">
          <img
            src={img}
            className="rounded-lg object-cover h-60"
          />
        </figure>
        <div className="card-body items-start">
          <h2 className="card-title text-2xl ">{title}</h2>
          <div className="w-full flex items-center justify-between">
            <p className="text-base text-[#FF3811] font-semibold">
              Price: ${price}
            </p>
            <Link to={`/checkOut/${_id}`}>
              <button className="bg-[#FF3811] text-sm text-white font-medium px-6 py-2 rounded">
                {/* <FaLongArrowAltRight /> */}
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {
  service: PropTypes.object,
}

export default Service
