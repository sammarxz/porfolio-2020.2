import React from "react"

// Components
import SmoothScroll from "../components/smoothScroll"
import Header from "../components/header"

// Styles
import "../styles/styles.scss"

const Default = ({ children }) => (
  <>
    <Header />
    <SmoothScroll>{children}</SmoothScroll>
  </>
)

export default Default
