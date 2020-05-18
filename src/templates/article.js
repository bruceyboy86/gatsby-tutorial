import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout';

const Article = ({data}) => {
  const post = data.nodeArticle;

  return (
    <Layout>

      <h1>{post.title}</h1>
      <img
        src={post.relationships.field_image && post.relationships.field_image.localFile && post.relationships.field_image.localFile.publicURL ? post.relationships.field_image.localFile.publicURL : null}
        alt={post.field_image && post.field_image.alt ? post.field_image.alt : null}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed}} />
    </Layout>
  )
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: {eq: $ArticleId }){
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

export default Article;
