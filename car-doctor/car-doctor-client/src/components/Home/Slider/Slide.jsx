import PropTypes from "prop-types"

const Slide = ({ img, title, desc }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={img}
        className="w-full h-full"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-[#000000F2] to-[#0000000D]] flex flex-col justify-center pl-20 space-y-5">
        <h1 className="text-6xl text-white font-bold w-96">{title}</h1>
        <p className="text-lg text-gray-300 font-normal w-96">{desc}</p>
        <div className="flex items-center gap-5">
          <button className="px-6 py-2 text-sm text-white tracking-wide font-medium rounded bg-[#FF3811] border border-[#FF3811]">
            Discover more
          </button>
          <button className="px-6 py-2 text-sm text-white tracking-wide font-medium rounded bg-transparent border border-white">
            Latest project
          </button>
        </div>
      </div>
    </div>
  )
}

Slide.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Slide
