import PropTypes from "prop-types"
import { MdClose } from "react-icons/md"

const BookingRow = ({ booking, handleDelete, handleUpdateBooking }) => {
  const { _id, img, service, price, serviceDate, status } = booking

  return (
    <>
      <tr>
        <th className="text-end">
          <div
            className="tooltip"
            data-tip="Remove"
          >
            <button
              onClick={() => handleDelete(_id)}
              className="text-xl text-[#FF3811] p-2 rounded-full bg-gray-200"
            >
              <MdClose />
            </button>
          </div>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squire rounded-lg w-28 h-28">
                <img src={img} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold uppercase">{service}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td>{serviceDate}</td>
        <th>
          {status === "confirmed" && (
            <button className="btn btn-sm bg-[#FF3811] hover:bg-[#FF3811] uppercase">
              <span className="text-white">confirmed</span>
            </button>
          )}
          {status !== "confirmed" && (
            <button
              onClick={() => handleUpdateBooking(_id)}
              className="btn btn-sm btn-ghost uppercase"
            >
              <span className="text-[#FF3811]">confirm</span>
            </button>
          )}
        </th>
      </tr>
    </>
  )
}

BookingRow.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdateBooking: PropTypes.func,
}

export default BookingRow
