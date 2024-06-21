import PropTypes from "prop-types"

const PageTitle = ({ bgImage, pageTitle }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center bg-no-repeat w-full h-52 rounded-xl"
    >
      <div className="h-full flex items-center pl-10 bg-gradient-to-r from-[#000000f2] to-[#0000000d] rounded-xl">
        <h1 className="text-5xl text-white font-bold uppercase">{pageTitle}</h1>
      </div>
    </div>
  )
}

PageTitle.propTypes = {
  bgImage: PropTypes.string,
  pageTitle: PropTypes.string,
}

export default PageTitle
