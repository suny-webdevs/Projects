import { FaTrash } from "react-icons/fa6"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import useAuth from "../Hooks/useAuth"
import useCarts from "../Hooks/useCarts"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import Swal from "sweetalert2"

const Cart = () => {
  const { user } = useAuth()
  const [carts, refetch] = useCarts()

  const axiosSecure = useAxiosSecure()

  const userCarts = carts.filter((cart) => cart.email === user?.email)
  const totalPrice = carts.reduce((total, price) => total + price.price, 0)

  let count = 1

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          }
        })
      }
    })
  }

  return (
    <div>
      <div className="mt-10">
        <SectionTitle
          title={"Wanna add more?"}
          preTitle={"My cart"}
        />
      </div>
      <div className="bg-[#f7f7f7] px-14 py-10 rounded-xl my-20">
        <div className="flex items-center gap-20">
          <h1 className="text-3xl font-bold uppercase">
            Total Orders: {userCarts.length}
          </h1>
          <h1 className="text-3xl font-bold uppercase">
            Total Price: ${Math.round(totalPrice)}
          </h1>
          <button className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white">
            Pay
          </button>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white text-lg">
                <tr className="rounded-t-xl">
                  <th></th>
                  <th>Item image</th>
                  <th>Item name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {userCarts.map((cart) => (
                  <tr key={cart._id}>
                    <th>{count++}</th>
                    <th>
                      <img
                        src={cart.image}
                        className="w-12 h-12 rounded-md"
                      />
                    </th>
                    <th>{cart.name}</th>
                    <th>${cart.price}</th>
                    <th className="flex justify-center items-center">
                      <button
                        onClick={() => handleDeleteCart(cart._id)}
                        className="text-xl text-error"
                      >
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
