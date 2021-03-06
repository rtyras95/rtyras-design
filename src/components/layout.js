/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Left from "./left"
import Right from "./right"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children, rightChildren }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main> 
        <Left />
        <div id="center">
          {children}
        </div>
        <Right>
          {rightChildren} 
        </Right>
      </main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  rightChildren: PropTypes.node,
}

export default Layout
