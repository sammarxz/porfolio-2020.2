import React, { useEffect, useRef } from 'react'
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
  const projectsRef = useRef([])
  const headerTitleRef = useRef([])

  const data = useStaticQuery(graphql`
    {
      sanityAuthor {
        name
      }

      allSanityProject {
        edges {
          node {
            title
            images {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { name } = data.sanityAuthor

  const projects = data.allSanityProject.edges
  const projectsList = []

  const handleScroll = () => {
    const { scrollTop } = document.documentElement
    const windowHeight = document.documentElement.offsetHeight

    // fadeOut when scroll
    gsap.set('.is--fadeOut', {
      opacity: 1 - (scrollTop / windowHeight) * 100
    })

    const header = headerTitleRef.current
    let current = 1
    let totalHeight = 1

    // check when project enters on screen
    projectsList.forEach((element) => {
      const headerPos = header.getBoundingClientRect()
      const pos = element.getBoundingClientRect()

      totalHeight += pos.height

      if (
        headerPos.top >= pos.top &&
        headerPos.top <= element.getBoundingClientRect().height
      ) {
        header.textContent = `${current} — ${projectsList.length}`
        current += 1
      } else if (
        scrollTop <
        header.parentElement.offsetHeight + window.innerHeight / 3
      ) {
        header.textContent = name
      }
    })

    if (scrollTop > totalHeight + window.innerHeight * 3.4) {
      header.classList.add('is--end')
      header.textContent = 'Hey, thanks for coming this far, you are awesome!✌️'
    } else {
      header.classList.remove('is--end')
    }
  }

  useEffect(() => {
    Object.keys(projectsRef.current.children).forEach((key) => {
      const projectListRef = [projectsRef.current.children[key]]

      projectListRef.map(({ children }) => projectsList.push(...children))
    })

    // prevents flashing
    gsap.to('body', 0, {
      css: {
        visibility: 'visible',
        overflow: 'hidden'
      }
    })

    // Hide project image
    gsap.to('.projects', 0, {
      css: {
        opacity: 0
      }
    })

    // Add listener
    window.addEventListener('scroll', () => handleScroll())

    // Intro Animation
    const tl = new TimelineMax()

    /* eslint-disable no-unused-vars */
    const splitText = new SplitText('.is--lineAnimation', { type: 'lines' })

    tl.from('.line__content', 1.8, {
      y: 100,
      ease: 'power4.out',
      skewY: 8,
      stagger: {
        amount: 0.8
      }
    })
      .to('.projects', 0, { delay: -0.8, css: { opacity: 1 } })
      .to('.intro__reveal', 1.8, {
        x: 0,
        ease: 'expo.inOut',
        delay: -2.4,
        stagger: {
          amount: 0.4
        }
      })

      .to('.intro__reveal', 1.8, {
        xPercent: 100,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4
        }
      })
      .to('.intro', 0, { css: { display: 'none' } })
      .from('.projects__project__image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4
        }
      })
      .to('body', 0, {
        css: {
          overflow: 'auto'
        }
      })

    // remove listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Default headerRef={headerTitleRef}>
      <SEO />
      <Projects projects={projects} projectsRef={projectsRef} />
    </Default>
  )
}

export default IndexPage
