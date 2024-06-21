import PropTypes from "prop-types"
import PageTitle from "../../PageTitle/PageTitle"
import Menu from "../../Home/PopularMenu/menu"
import SectionTitle from "../../SectionTitle/SectionTitle"
import { Link } from "react-router-dom"

const MenuItems = ({ titleBg, title, preTitle, menu }) => {
  return (
    <div className="mt-20">
      {titleBg && (
        <PageTitle
          bgImg={titleBg}
          title={title}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      )}
      {preTitle && (
        <SectionTitle
          title={title}
          preTitle={preTitle}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20 mt-10">
        {menu.map((item) => (
          <Menu
            key={item._id}
            menu={item}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/our-shop/${title}`}>
          <button className="px-6 py-1 font-medium uppercase border-b-2 border-black rounded-md">
            order your favorite food
          </button>
        </Link>
      </div>
    </div>
  )
}

MenuItems.propTypes = {
  titleBg: PropTypes.string,
  title: PropTypes.string,
  preTitle: PropTypes.string,
  menu: PropTypes.array,
}

export default MenuItems
