import React from 'react'

// Components
import SmoothScroll from '../components/smoothScroll'
import Header from '../components/header'
import Intro from '../components/intro'
import Footer from '../components/footer'

// Styles
import '../styles/styles.scss'

const Default = ({ headerRef, children }) => (
  <>
    <Header headerRef={headerRef} />
    {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ? (
      <div className="container p--relative">
        <Intro />
        {children}
        <Footer />
      </div>
    ) : (
      <SmoothScroll>
        <div className="container p--relative">
          <Intro />
          {children}
          <Footer />
        </div>
      </SmoothScroll>
    )}
  </>
)

export default Default
