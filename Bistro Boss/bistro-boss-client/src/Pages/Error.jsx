import notFound from "../assets/404.gif"

const Error = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <img
        src={notFound}
        alt="404 not found"
        className="object-cover"
      />
    </div>
  )
}

export default Error
