import React from 'react'
import Image from 'gatsby-image'

const Projects = ({ projects, projectsRef }) => (
  <section className="projects" ref={projectsRef}>
    {projects.map(({ node: project }) => {
      const { title, images } = project

      return (
        <div key={title} className="projects__project">
          {images.map((image) => {
            const imageData = image.childImageSharp.fluid
            return (
              <Image
                key={title}
                fluid={imageData}
                alt={title}
                className="projects__project__image mb--big"
              />
            )
          })}
        </div>
      )
    })}
  </section>
)

export default Projects
