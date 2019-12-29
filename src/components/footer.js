import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        marginLeft: `1.0875rem`,
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
