import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import FoodCard from "../../Shared/FoodCard"

const ChefRecommends = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FoodCard
          img={img1}
          title={"Caeser Salad"}
          desc={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
        <FoodCard
          img={img2}
          title={"Caeser Salad"}
          desc={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
        <FoodCard
          img={img3}
          title={"Caeser Salad"}
          desc={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        />
      </div>
    </div>
  )
}

export default ChefRecommends
