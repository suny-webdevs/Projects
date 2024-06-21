import { useNavigate } from "react-router-dom"
import error from "../assets/404.svg"
import { FaHome, FaLongArrowAltLeft } from "react-icons/fa"

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen grid place-items-center">
      <img src={error} />
      <div className="">
        <div
          className="tooltip"
          data-tip="Go back"
        >
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 text-xl text-[#FF3811] border-x border-y border-orange-300 bg-orange-50 rounded-l"
          >
            <FaLongArrowAltLeft />
          </button>
        </div>
        <div
          className="tooltip"
          data-tip="Go home"
        >
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 text-xl text-[#FF3811] border-r border-y border-orange-300 bg-orange-50 rounded-r"
          >
            <FaHome />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error
