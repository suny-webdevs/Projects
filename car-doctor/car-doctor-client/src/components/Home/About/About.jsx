/* eslint-disable react/no-unescaped-entities */
import about1 from "../../../assets/images/about_us/person.jpg"
import about2 from "../../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-full h-screen bg-white">
            <img
              src={about1}
              className="w-96 h-60 absolute top-40 rounded-md"
            />
            <img
              src={about2}
              className="w-60 h-40 absolute top-72 right-14 border-4 border-white rounded-md"
            />
          </div>
          <div>
            <p className="text-base text-[#FF3811] font-medium mb-2">
              About us
            </p>
            <h1 className="text-5xl font-bold w-80">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 pr-32 text-base text-gray-500 font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="pb-6 pr-32 text-base text-gray-500 font-normal">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="px-6 py-2 text-base text-white bg-[#FF3811] font-medium rounded">
              Get more info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
