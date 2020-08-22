import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Header = () => {
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

  const { name, role, working, location } = siteData.site.siteMetadata.about

  return (
    <div className="container">
      <header className="header pt--x-big p--fixed">
        <h1 className="header__title">
          <Link to="/" className="is--lineAnimation">
            {name}
          </Link>
        </h1>
        <div className="header__info">
          <h2>
            <span className="d--block mb--medium is--lineAnimation">
              {role}
            </span>
            <span className="d--block mb--medium is--lineAnimation">
              {working}
            </span>
            <span className="d--block mb--medium is--lineAnimation">
              {location}.
            </span>
          </h2>
        </div>
        <Link to="#get-in-touch" className="header__contact is--lineAnimation">
          Get in Touch
        </Link>
      </header>
    </div>
  )
}

export default Header
