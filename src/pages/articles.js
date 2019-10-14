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
          // image={article.relationships.field_featured_image.localFile.publicURL ? article.relationships.field_featured_image.localFile.publicURL : "http://illuminate2.nucleusfinancial.loc/sites/default/files/default_images/default_image_5.png"}
          // alt={article.field_image ? article.field_image.alt : "default"}
          // summary={article.body.summary ? article.body.summary : article.body.processed.substring(0, 300)}
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
    allNodeIlluminatePost(sort: {fields: created, order: DESC}, filter: {field_hr_toggle: {nin: true}}) {
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
              publicURL
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