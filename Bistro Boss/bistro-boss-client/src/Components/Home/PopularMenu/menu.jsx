import PropTypes from "prop-types"

const Menu = ({ menu }) => {
  return (
    <div>
      <div className="card card-side bg-base-100">
        <figure>
          <img
            src={menu.image}
            className="rounded-r-full rounded-bl-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{menu.name} ----------</h2>
          <p>{menu.recipe}</p>
        </div>
        <div>
          <p className="text-[#BB8506] pt-9 pr-3 md:pr-5">${menu.price}</p>
        </div>
      </div>
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.object,
}

export default Menu
