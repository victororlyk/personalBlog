import React from "react"


import Header from "./Header"
import Footer from "./Footer"
import classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header/>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
