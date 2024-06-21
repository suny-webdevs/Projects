import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import auth from "../firebase/firebaseConfig"
import axios from "axios"

// Create Auth Context
export const AuthContext = createContext(null)

// Create Google Provider
const googleProvider = new GoogleAuthProvider()

// Create Auth Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (name) => {
    setLoading(true)
    return updateProfile(user, {
      displayName: name,
    })
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = { email: userEmail }

      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
      }
    })
    return () => unSubscribe()
  }, [user?.email])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUser,
    loginUser,
    googleLogin,
    logOut,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider
