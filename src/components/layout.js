import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "../css/rem.css"

import Header from "./header"
import Footer from "./footer"
import Main from "./main"

const Layout = ({ children, show }) => {
  
  return (
    <>
        <Header show={show}/>
        <Main>{children}</Main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
