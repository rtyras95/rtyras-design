import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./left.scss"

const Left = ({ children }) => (
  <div className="left-sidebar">
  Test
    {children}
  </div>
)

Left.propTypes = {
  children: PropTypes.node,
}

export default Left
