import React, { useEffect, useRef, useState } from 'react'
import gsap, { TimelineMax } from 'gsap'
import { useStaticQuery, graphql } from 'gatsby'

// Layout
import Default from '../layouts/default'

// Utils
import SplitText from '../utils/splittext'

// Components
import SEO from '../components/seo'
import Projects from '../components/projects'

const IndexPage = () => {
  const handleScroll = () => {
    gsap.set('.header__contact', {
      opacity:
        1 -
        (document.documentElement.scrollTop /
          document.documentElement.offsetHeight) *
          12
    })
  }

  useEffect(() => {
    // prevents flashing
    gsap.to('body', 0, {
      css: {
        visibility: 'visible',
        overflow: 'auto'
      }
    })

    window.onscroll = () => handleScroll()

    // Intro Animation
    const tl = new TimelineMax()
    new SplitText('.is--lineAnimation', { type: 'lines' })

    tl.from('.line__content', 1.8, {
      y: 100,
      ease: 'power4.out',
      skewY: 7,
      stagger: {
        amount: 0.8
      }
    })
  }, [])

  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            slug
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Default>
      <SEO title="Home" />
      <Projects projects={projects} />
    </Default>
  )
}

export default IndexPage
