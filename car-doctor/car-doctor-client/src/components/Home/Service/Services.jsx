import { useEffect, useState } from "react"
import Service from "./Service"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const [services, setServices] = useState([])
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure.get("/services").then((res) => setServices(res.data))
  }, [axiosSecure])

  return (
    <div className="container mx-auto">
      <div>
        <p className="text-base text-center text-[#FF3811] font-medium">
          Service
        </p>
        <h1 className="text-5xl text-center font-medium capitalize">
          Our service area
        </h1>
        <p className="text-base text-center text-gray-500 font-normal px-72 mt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
          />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="px-6 py-2 rounded text-base text-[#FF3811] hover:text-white tracking-wide font-medium bg-white hover:bg-[#FF3811] border border-[#FF3811] transition-colors duration-200">
          More services
        </button>
      </div>
    </div>
  )
}

export default Services
