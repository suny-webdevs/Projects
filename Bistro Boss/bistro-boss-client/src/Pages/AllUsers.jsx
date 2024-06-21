import { useQuery } from "@tanstack/react-query"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import { FaTrash } from "react-icons/fa"
import Swal from "sweetalert2"
import { FaUsers } from "react-icons/fa6"
// import useAuth from "../Hooks/useAuth"

const AllUsers = () => {
  // const {removeUser}=useAuth()
  const axiosSecure = useAxiosSecure()
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data
    },
  })

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an Admin now`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  const handleDeleteUsers = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // removeUser(user).then()
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          }
        })
      }
    })
  }

  let count = 1

  return (
    <div className="bg-[#f7f7f7] w-full px-20">
      <div className="mt-10 mb-20">
        <SectionTitle
          title={"manage all users"}
          preTitle={"how many???"}
        />
      </div>
      <div className="bg-white px-14 py-10 rounded-xl my-20">
        <div>
          <h1 className="text-4xl text-black font-bold uppercase mb-4">
            Total user: {users.length}
          </h1>
        </div>
        <div className="rounded-t-xl">
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table table-zebra w-full rounded-t-xl">
              {/* head */}
              <thead className="bg-[#D1A054] text-white text-lg rounded-t-xl">
                <tr className="rounded-t-xl">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {users.map((user) => (
                  <tr key={user._id}>
                    <th>{count++}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th className="text-center">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="text-xl text-white bg-[#D1A054] p-2 rounded-md"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </th>
                    <th className="text-center">
                      <button
                        onClick={() => handleDeleteUsers(user)}
                        className="text-xl text-error"
                      >
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers
