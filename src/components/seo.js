/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../utils/media/images/blog-icon.png";

const SEO = props => {
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
  );

  const metaDescription = props.description || site.siteMetadata.description;

  const imageLink =
    "https://jacknugent.io/static/724474e6acf4bb2e0e0cc9596679f985/59139/blog-icon.png?bust=cache";
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
        }`
        }
      ]}
    >
      <html lang={props.lang} />
      <title>{props.title}</title>
      <meta name="description" content={metaDescription} />
      {logo && <meta name="image" content={imageLink} />}
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta name="google-site-verification" content="NeZWBaavKcvpIapfD4Ur8BcIpdSfWABaIhnflR88V_4" />
      <meta property="og:description" content={metaDescription} />
      {logo && <meta property="og:image" content={imageLink} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={metaDescription} />
      {logo && <meta name="twitter:image" content={imageLink} />}
    </Helmet>
  );
};

export default SEO;
