import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sidebar.scss"

const Left = ({ children }) => (
  <div className="sidebar" id="left">
  Test
    {children}
  </div>
)

Left.propTypes = {
  children: PropTypes.node,
}

export default Left
