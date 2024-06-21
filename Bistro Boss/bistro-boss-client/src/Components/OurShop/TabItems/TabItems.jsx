import PropTypes from "prop-types"
import FoodCard from "../../Shared/FoodCard"

const TabItems = ({ items }) => {
  console.log(items)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

TabItems.propTypes = {
  items: PropTypes.array,
}

export default TabItems
