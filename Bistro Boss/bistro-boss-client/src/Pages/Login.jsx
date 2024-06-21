import { Link, useLocation, useNavigate } from "react-router-dom"
import imgBg from "../assets/others/authentication.png"
import imgSide from "../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle } from "react-icons/fa6"
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha"
import { useEffect, useState } from "react"
import useAuth from "../Hooks/useAuth"
import toast from "react-hot-toast"
import useAxiosPublic from "../Hooks/useAxiosPublic"

const Login = () => {
  const { user, loading, userSignIn, googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || "/"

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    loadCaptchaEnginge(4)
  }, [])

  const captchaHandler = (e) => {
    const value = e.target.value
    if (validateCaptcha(value) == true) {
      toast.success("Captcha Matched", { position: "top-center" })
      setDisabled(false)
    } else {
      toast.error("Captcha Does Not Match", { position: "bottom-center" })
      setDisabled(true)
    }
  }

  const loginHandler = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    userSignIn(email, password)
      .then(() => {
        console.log("login success")
        toast.success("Login success", { position: "top-center" })

        navigate(from, { replace: true })
      })
      .catch((err) => console.log(err.message))
  }

  const googleLogin = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          photo: res.user?.photoURL,
          role: "user",
        }

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Sign up successful", { position: "top-center" })
            navigate(from, { replace: true })
          }
        })
      })
      .catch((err) => {
        if (err.message.includes("popup-closed-by-user")) {
          toast.error("Login incomplete", { position: "bottom-center" })
        }
      })
  }

  useEffect(() => {
    if (user) navigate("/")
  }, [user, navigate])

  if (user || loading) return

  return (
    <div
      style={{ backgroundImage: `url(${imgBg})` }}
      className="flex justify-center items-center w-full h-full shadow-lg"
    >
      <div className="container mx-auto py-10 my-10 flex items-center justify-center shadow-xl">
        <div>
          <img src={imgSide} />
        </div>
        <div className="card shrink-0 w-full max-w-xl bg-transparent">
          <h1 className="text-center text-5xl font-bold">Login</h1>
          <form
            onSubmit={loginHandler}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Type the captcha above"
                onBlur={captchaHandler}
                name="captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#D1A054] hover:bg-[#D1A054B3] text-white"
                disabled={disabled}
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-[#D1A054]">
              New here?{" "}
              <Link
                to="/sign-up"
                className="font-bold"
              >
                Create a new account
              </Link>
            </p>
            <p>or login with</p>
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

export default Login
