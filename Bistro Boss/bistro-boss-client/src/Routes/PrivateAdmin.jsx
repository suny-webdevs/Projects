import { Navigate } from "react-router-dom"
import useAdmin from "../Hooks/useAdmin"
import useAuth from "../Hooks/useAuth"
import PropTypes from "prop-types"

const PrivateAdmin = ({ children }) => {
  const { user, loading } = useAuth()
  const [isAdmin, adminLoading] = useAdmin()

  if (loading || adminLoading)
    return <span className="loading loading-spinner loading-lg"></span>

  if (user && isAdmin) return children

  return (
    <Navigate
      to={"/login"}
      state={{ from: location }}
      replace
    />
  )
}

PrivateAdmin.propTypes = {
  children: PropTypes.node,
}

export default PrivateAdmin
