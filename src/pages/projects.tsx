// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// app imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    {
      allProjectsYaml {
        nodes {
          title
          description
          site_source
          site_label
          type
          skills
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `).allProjectsYaml.nodes

  return (
    <Layout>
      <SEO title="Projects" />
      {projects.map((project: any, i: number) => (
        <Project
          key={i}
          title={project.title}
          description={project.description}
          site_source={project.site_source}
          site_label={project.site_label}
          type={project.type}
          fluid_img={project.image.childImageSharp.fluid}
          skills={project.skills}
        ></Project>
      ))}
    </Layout>
  )
}

export default Projects
