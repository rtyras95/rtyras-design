import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sidebar.scss"

const Right = ({ children }) => (
  <div className="sidebar" id="right">
    {children}
  </div>
)

Right.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Right
