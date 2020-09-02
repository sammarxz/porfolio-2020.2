import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Header = ({ headerRef }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          about {
            name
            role
            working
            location
          }
        }
      }
    }
  `)

  const {
    name, role, working, location
  } = siteData.site.siteMetadata.about

  return (
    <div className="container">
      <header className="header pt--x-big p--fixed">
        <h1 className="header__title">
          <Link ref={headerRef} to="/" className="is--lineAnimation">
            {name}
          </Link>
        </h1>
        <div className="header__info is--fadeOut">
          <h2>
            <span className="d--block mb--medium is--lineAnimation">
              {role}
            </span>
            <span className="d--block mb--medium is--lineAnimation">
              {working}
            </span>
            <span className="d--block mb--medium is--lineAnimation">
              {location}
              .
            </span>
          </h2>
        </div>
        <div className="header__contact">
          <Link to="#get-in-touch" className="is--lineAnimation">
            Get in Touch
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
