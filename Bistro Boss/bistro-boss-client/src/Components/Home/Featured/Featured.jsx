import bg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../SectionTitle/SectionTitle"

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-fixed bg-no-repeat bg-cover bg-center mt-20"
    >
      <div className="bg-slate-800 bg-opacity-80 w-full h-full p-20">
        <SectionTitle
          title={"from our menu"}
          preTitle={"check it out"}
          text={"text-white"}
        />
        <div className="card lg:card-side shadow-none rounded-none mt-20">
          <figure>
            <img src={bg} />
          </figure>
          <div className="card-body">
            <h2 className="text-white">March 20, 2023</h2>
            <h2 className="card-title text-white">Where can I get some?</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="card-actions justify-start">
              <button className="px-6 py-1 text-white text-base font-medium uppercase bg-transparent border-b-2 border-white rounded-lg">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
