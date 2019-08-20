import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    {
      allProjectsYaml {
        nodes {
          title
          description
          site_source
          site_label
          skills
          image {
            childImageSharp {
              fluid(maxHeight: 9999) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `).allProjectsYaml.nodes

  console.log(projects)
  return (
    <Layout>
      <SEO title="Resumé" />
      {projects.map((project: any, i: number) => (
        <Project
          title={project.title}
          description={project.description}
          site_source={project.site_source}
          site_label={project.site_label}
          fluid_img={project.image.childImageSharp.fluid}
          skills={project.skills}
        ></Project>
      ))}
    </Layout>
  )
}

export default Projects
