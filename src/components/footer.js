import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const links = useStaticQuery(graphql`
    {
      sanityAuthor {
        social {
          name
          url
        }
      }
    }
  `)

  const { social } = links.sanityAuthor

  return (
    <footer className="footer mb--x-big d--grid row ai--end fd--column">
      <p>©2020 Samuel Marxz.</p>
      <p>
        Made with{' '}
        <a href="https://www.gatsbyjs.com/" target="blank" className="link">
          <span role="img" aria-label="atom">
            ⚛️
          </span>{' '}
          GatsbyJS
        </a>
      </p>
      <ul className="footer__social col--1-5">
        {social.map(({ name, url }) => (
          <li key={name} className="pb--x-small mr--small">
            <a href={url} target="blank" className="link">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
