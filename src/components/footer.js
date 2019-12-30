import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './footer.scss'

const Footer = () => (
  <footer>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        color: 'white',
      }}
    >
      RTyras Design, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)
export default Footer
