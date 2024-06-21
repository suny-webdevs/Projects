import bg from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
  return (
    <div className="px-20 mt-28">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-center bg-cover bg-no-repeat p-20"
      >
        <div className="py-20 bg-white">
          <h1 className="text-5xl text-center font-semibold">Bistro Boss</h1>
          <p className="text-lg text-center font-normal px-40 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChefService
