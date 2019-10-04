/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../utils/blog-icon.png"

function SEO(props: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description

  return (
    <Helmet
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      script={[
        {
          type: "application/ld+json",
          innerHTML: `{
          '@context': 'https://jacknugent.io',
          'url': 'https://jacknugent.io',
          '@type': 'WebSite',
          'name': 'JackNugentBlog'
        }`,
        },
      ]}
    >
      <html lang={props.lang} />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {logo && <meta name="image" content={logo} />}
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={props.description} />
      {logo && <meta property="og:image" content={logo} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {logo && <meta name="twitter:image" content={logo} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaWithProperty[] | MetaWithName[]
  title: string
}

interface MetaWithProperty {
  property: string
  content: string
}

interface MetaWithName {
  name: string
  content: string
}

export default SEO
