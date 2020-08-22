import React from "react"
import Image from "gatsby-image"

const Projects = ({ projects }) => {
  return (
    <div className="container">
      <section className="projects">
        {projects.map(({ node: project }) => {
          const { title, description, slug, url } = project
          const imageData = project.image.childImageSharp.fluid

          return (
            <div key={slug} className="projects__project__image">
              <Image fluid={imageData} alt={title} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Projects
