import PropTypes from "prop-types"
import Tilt from "react-parallax-tilt"
import { Parallax } from "react-parallax"

const PageTitle = ({ bgImg, title, subTitle, desc, height }) => {
  return (
    <div>
      <Parallax
        bgImage={bgImg}
        blur={{ min: -50, max: 50 }}
      >
        <div
          className={`bg-center bg-cover bg-no-repeat ${
            height || "h-screen"
          } w-full px-10 md:px-28 bg-fixed flex justify-center items-center`}
        >
          <Tilt
            className="background-stripes parallax-effect"
            perspective={500}
          >
            <div
              className={`px-10 md:px-60 py-20 md:py-32 bg-slate-800 bg-opacity-40 backdrop-blur-md flex flex-col justify-center gap-2`}
            >
              <h1 className="text-6xl md:text-8xl text-center text-white font-bold uppercase">
                {title}
              </h1>
              {subTitle && (
                <h4 className="text-base md:text-xl text-center text-white font-medium uppercase">
                  {subTitle}
                </h4>
              )}
              {desc && (
                <p className="md:px-20 text-white text-center font-medium">
                  {desc}
                </p>
              )}
            </div>
          </Tilt>
        </div>
      </Parallax>
    </div>
  )
}

PageTitle.propTypes = {
  bgImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
  height: PropTypes.string,
}

export default PageTitle
