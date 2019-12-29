import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./right.scss"

const Right = ({ children }) => (
  <div className="right-sidebar">
  Test
    {children}
  </div>
)

Right.propTypes = {
  children: PropTypes.node,
}

export default Right
