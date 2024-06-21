import PropTypes from "prop-types"
import useAuth from "../../Hooks/useAuth"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import useCarts from "../../Hooks/useCarts"

const FoodCard = ({ item }) => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCarts()

  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: add cart to database
      console.log(food, user.email)
      const cartItem = {
        menuID: food._id,
        email: user.email,
        name: food.name,
        image: food.image,
        price: food.price,
      }
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.name} was add to cart`,
            showConfirmButton: false,
            timer: 2500,
          })
        }
        refetch()
      })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true })
        }
      })
    }
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-md">
        <figure className="h-[300px]">
          <img
            src={item?.image}
            className="object-cover w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{item?.name}</h2>
          <p>{item?.recipe}</p>
          <div className="card-actions justify-center mt-3">
            <button
              onClick={() => handleAddToCart(item)}
              className="px-6 py-1 bg-gray-300 text-[#BB8506] font-medium border-b-2 border-[#BB8506] uppercase hover:bg-[#1F2937] hover:border-[#1F2937] rounded-lg"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FoodCard.propTypes = {
  item: PropTypes.object,
}
export default FoodCard
