import { useLoaderData, useNavigate } from "react-router-dom"
import checkBg from "../assets/images/checkout/checkout.png"
import useAuth from "../hooks/useAuth"
import toast from "react-hot-toast"
import PageTitle from "../components/PageTitle/PageTitle"
import useAxiosSecure from "../hooks/useAxiosSecure"

const CheckOut = () => {
  const { _id, title, price, img } = useLoaderData()
  const { user } = useAuth()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  const handleCheckOut = (e) => {
    e.preventDefault()

    const form = e.target

    const name = form.name.value
    const date = form.date.value
    const phone = form.phone.value
    const email = form.email.value
    const service = form.service.value
    const price = form.price.value
    const message = form.message.value

    const order = {
      customerName: name,
      email,
      phone,
      message,
      serviceID: _id,
      img,
      service,
      price,
      serviceDate: date,
    }

    axiosSecure.post("/bookings", order).then((res) => {
      if (res.data.insertedId) {
        toast.success("Add to bookings")
        navigate("/bookings")
      }
      form.reset()
    })
  }

  return (
    <div className="container mx-auto mt-10 px-5 md:px-0">
      <PageTitle
        bgImage={checkBg}
        pageTitle={"Check out"}
      />
      <div className="flex justify-center items-center mt-10">
        <div className="card shrink-0 w-full max-w-5xl shadow-md bg-base-100">
          <form
            onSubmit={handleCheckOut}
            className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="service"
                defaultValue={title}
                placeholder="Your service"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="phone"
                placeholder="Your phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-2">
              <textarea
                className="textarea textarea-bordered textarea-lg"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="form-control mt-6 md:col-span-2">
              <button className="text-base text-white font-medium px-6 py-2 bg-[#FF3811] rounded">
                Confirm booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
