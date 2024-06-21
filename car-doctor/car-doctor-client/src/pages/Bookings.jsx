import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import BookingRow from "../components/Booking/BookingRow"
import toast, { Toaster } from "react-hot-toast"
import bookingsBg from "../assets/images/bookingsCart/bookingsCartBg.png"
import PageTitle from "../components/PageTitle/PageTitle"
import useAxiosSecure from "../hooks/useAxiosSecure"

const Bookings = () => {
  const { user } = useAuth()
  const [bookings, setBookings] = useState([])
  const axiosSecure = useAxiosSecure()

  const url = `/bookings?email=${user?.email}`
  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data))
  }, [url, axiosSecure])

  const totalPrice = bookings
    .map((booking) => parseInt(booking.price))
    .reduce((acc, sum) => acc + sum, 0)

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?")
    if (proceed) {
      axiosSecure.delete(`/bookings/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Deleted successful")
          const remain = bookings.filter((booking) => booking._id !== id)
          setBookings(remain)
        }
      })
    }
  }

  const handleUpdateBooking = (id) => {
    axiosSecure
      .patch(`/bookings/${id}`, { status: "confirmed" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Confirmed")
          const remain = bookings.filter((booking) => booking._id !== id)
          const updated = bookings.find((booking) => booking._id === id)
          updated.status = "confirmed"
          const newBookings = [updated, ...remain]
          setBookings(newBookings)
        }
      })
  }

  return (
    <div className="container mx-auto px-5 md:px-0 mt-10">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <PageTitle
        bgImage={bookingsBg}
        pageTitle={"Bookings"}
      />
      <div className="mt-10">
        {
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg font-medium uppercase">
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Confirmation</th>
                </tr>
              </thead>
              <tbody className="text-lg font-medium">
                {/* row 1 */}
                {bookings.map((booking) => (
                  <BookingRow
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleUpdateBooking={handleUpdateBooking}
                  />
                ))}
              </tbody>
              {/* foot */}
              <tfoot className="text-xl text-[#131313] font-medium uppercase">
                <tr>
                  <th></th>
                  <th>Total service: {bookings.length}</th>
                  <th>Total price: ${totalPrice}.00</th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        }
      </div>
    </div>
  )
}

export default Bookings
