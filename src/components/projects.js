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
              <div
                key={title}
                className="projects__project__image mb--big bg--white-10"
              >
                <Image fluid={imageData} alt={title} />
              </div>
            )
          })}
        </div>
      )
    })}
  </section>
)

export default Projects
