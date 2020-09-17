import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Header = ({ headerRef }) => {
  const siteData = useStaticQuery(graphql`
    {
      sanityAuthor {
        name
        role
        working
        location
      }
    }
  `)

  const { name, role, working, location } = siteData.sanityAuthor

  const scrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <header className="header pt--x-big p--fixed d--grid row fd--column">
      <h1 className="header__title">
        <Link ref={headerRef} to="/" className="is--lineAnimation">
          {name}
        </Link>
      </h1>
      <div className="header__info is--fadeOut">
        <h2>
          <span className="d--block mb--medium is--lineAnimation">{role}</span>
          <span className="d--block mb--medium is--lineAnimation">
            {working}
          </span>
          <span className="d--block mb--medium is--lineAnimation">
            {location}
          </span>
        </h2>
      </div>
      <div className="header__contact col--1-5 hide--mobile">
        <button
          type="button"
          onClick={scrollBottom}
          className="is--lineAnimation"
        >
          Get in Touch
        </button>
      </div>
    </header>
  )
}

export default Header
