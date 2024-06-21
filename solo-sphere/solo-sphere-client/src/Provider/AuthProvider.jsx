import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import auth from "../Firebase/firebaseConfig"

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

      return () => unSubscribe()
    })
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    googleSignIn,
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
