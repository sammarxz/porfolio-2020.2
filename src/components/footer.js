import React from 'react'

const Footer = () => {
  const links = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/sammarques55'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/sammarxz'
    },
    {
      name: 'Github',
      url: 'https://github.com/sammarxz'
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/sammarxz'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@sammarxz'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/user/Nerdezinhu'
    }
  ]

  return (
    <footer className="footer mb--x-big d--grid row ai--end fd--column">
      <p>©2020 Samuel Marxz.</p>
      <p>
        Made with
        {' '}
        <a href="https://www.gatsbyjs.com/" target="blank" className="link">
          <span role="img" aria-label="atom">
            ⚛️
          </span>
          {' '}
          GatsbyJS
        </a>
      </p>
      <ul className="footer__social col--1-5">
        {links.map(({ name, url }) => (
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
