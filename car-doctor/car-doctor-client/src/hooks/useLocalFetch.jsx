import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

const useLocalFetch = ({ url }) => {
  const [state, setState] = useState([])
  console.log(url)
  useEffect(() => {
    axios.get(`${url}`).then((res) => setState(res.data))
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setState(data))
  }, [url])

  return state
}

useLocalFetch.propTypes = {
  url: PropTypes.string,
}

export default useLocalFetch
