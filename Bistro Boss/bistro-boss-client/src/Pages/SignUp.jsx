import { Link, useNavigate } from "react-router-dom"
import imgBg from "../assets/others/authentication.png"
import imgSide from "../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle } from "react-icons/fa6"
import useAuth from "../Hooks/useAuth"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import useAxiosPublic from "../Hooks/useAxiosPublic"

const SignUp = () => {
  const { user, loading, createUser, updateUserProfile, googleSignIn } =
    useAuth()
  const axiosPublic = useAxiosPublic()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (user) navigate("/")
  }, [user, navigate])

  const signUpHandler = ({ name, photo, email, password }) => {
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name,
              email,
              photo,
            }
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset()
                toast.success("Sign up successful", { position: "top-center" })
                navigate("/")
              }
            })
          })
          .catch((err) => {
            console.log(err.message)
          })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const googleLogin = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          photo: res.user?.photoURL,
        }

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Sign up successful", { position: "top-center" })
            navigate("/")
          }
        })
      })
      .catch((err) => {
        // console.log(err.message)
        if (err.message.includes("popup-closed-by-user")) {
          toast.error("Sign up incomplete", { position: "bottom-center" })
        }
      })
  }

  if (user || loading) return

  return (
    <div
      style={{ backgroundImage: `url(${imgBg})` }}
      className="flex justify-center items-center w-full h-full"
    >
      <div className="container mx-auto py-10 my-10 flex flex-row-reverse items-center justify-center shadow-xl">
        <div>
          <img src={imgSide} />
        </div>
        <div className="card shrink-0 w-full max-w-xl bg-transparent">
          <h1 className="text-center text-5xl font-bold">Sign up</h1>
          <form
            onSubmit={handleSubmit(signUpHandler)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p className="text-error">Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="Photo"
                {...register("photo")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <span className="text-error">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /[A-Za-z]/,
                })}
                className="input input-bordered"
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="text-error">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-error">
                Password should be at least 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-error">
                Password should be at least one uppercase letter & one lowercase
                letter
              </span>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] hover:bg-[#D1A054B3] text-white">
                Sign up
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-[#D1A054]">
              Already registered?{" "}
              <Link
                to="/login"
                className="font-bold"
              >
                Go to login
              </Link>
            </p>
            <p>or sign up with</p>
            <div className="flex items-center justify-center gap-4">
              <button className="p-3 text-xl border border-black rounded-full">
                <FaFacebookF />
              </button>
              <button
                onClick={googleLogin}
                className="p-3 text-xl border border-black rounded-full"
              >
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
