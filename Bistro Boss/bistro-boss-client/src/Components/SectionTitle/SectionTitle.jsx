import PropTypes from "prop-types"

const SectionTitle = ({ preTitle, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#D99904] text-base font-medium italic capitalize">
        ---{preTitle}---
      </p>
      <div className="border-y-2 w-96 mt-3 py-3 flex items-center justify-center">
        <h1 className={`text-4xl ${text} font-semibold uppercase`}>{title}</h1>
      </div>
    </div>
  )
}

SectionTitle.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default SectionTitle
