// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// app imports
import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/Helpers/Project";
import YouTubeEmbed from "../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Projects = () => {
  const projects = useStaticQuery(graphql`
    {
      tech_projects: allProjectsYaml {
        nodes {
          title
          description
          site_source
          type
          date__MM_DD_YY_
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      youtube_videos: allYoutubeVideo(limit: 10) {
        nodes {
          title
          description
          videoId
          publishedAt
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const tech_projects = projects.tech_projects.nodes;
  const youtube_videos = projects.youtube_videos.nodes;

  const all_projects = [...tech_projects, ...youtube_videos].sort(
    (a, b) =>
      new Date(b.date__MM_DD_YY_ ? b.date__MM_DD_YY_ : b.publishedAt) -
      new Date(a.date__MM_DD_YY_ ? a.date__MM_DD_YY_ : a.publishedAt)
  );

  const build_preview = (type, image, source) => {
    switch (type) {
      case "local":
        return (
          <Link to={source}>
            <Img alt={""} fluid={image} />
          </Link>
        );
      case "external":
        return (
          <a href={source}>
            <Img alt={""} fluid={image} />
          </a>
        );
      case "youtube":
        return <YouTubeEmbed id={source} fluid_url={image}></YouTubeEmbed>;
      default:
        return <div>No image</div>;
    }
  };

  const LayoutContainer = styled.div`
    max-width: 900px;
    margin: auto;
  `;

  return (
    <Layout>
      <SEO title="Projects" />
      <LayoutContainer>
        {all_projects.map((project, i) =>
          project.site_source ? (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              preview={build_preview(
                project.type,
                project.image && project.image.childImageSharp.fluid,
                project.site_source
              )}
            ></Project>
          ) : (
            <Project
              key={i}
              title={project.title}
              description={project.description.match(/[^\n]+/g)[1]}
              preview={build_preview(
                "youtube",
                project.localThumbnail &&
                  project.localThumbnail.childImageSharp.fluid,
                project.videoId
              )}
            ></Project>
          )
        )}
      </LayoutContainer>
    </Layout>
  );
};

export default Projects;
