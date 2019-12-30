import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sidebar.scss"

const Left = ({ children }) => (
  <div className="sidebar" id="left">
    <Link to="/gallery/" className="nav-item top" activeClassName="nav-item-active">
      Gallery
    </Link>
    <Link to="/rachel/" className="nav-item" activeClassName="nav-item-active">
        Rachel
    </Link>
    <Link to="/specs/" className="nav-item" activeClassName="nav-item-active">
        Specs
    </Link>
    <Link to="/contact/" className="nav-item bottom" activeClassName="nav-item-active">
        Contact
    </Link>
  </div>
)

Left.propTypes = {
  children: PropTypes.node,
}

export default Left
