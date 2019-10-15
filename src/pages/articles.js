import React from "react";
// import PropTypes from "prop-types";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";

const Articles = ({ data }) => {
  const articles = data.allNodeIlluminatePost.nodes;

  return (
    <Layout>
      <SEO title="articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          path={article.path ? article.path.alias : "#"}
          image={article.relationships.field_featured_image.localFile.childImageSharp.fluid}
          alt={article.field_image ? article.field_image.alt : "default"}
          summary={ article.body.summary }
        />
      ))}

    </Layout>
  )
}

// Articles.PropTypes = {
//   data: PropTypes.object.isRequired,
// };

export const data = graphql`
  {
    allNodeIlluminatePost(sort: {fields: created, order: DESC}, filter: {field_hr_toggle: {nin: true}, relationships: {field_featured_image: {localFile: {size: {gte: 1}}}}, body: {summary: {ne: "", nin: "null"}}}, limit: 10) {
      nodes {
        title
        id
        body {
          summary
          processed
        }
        created
        field_featured_image {
          alt
        }
        relationships {
          field_featured_image {
            localFile {
              id
              childImageSharp{
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        path {
          alias
        }
      }
    }
  }
`;

export default Articles;