import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout';

const Article = ({data}) => {
  const post = data.nodeIlluminatePost;

  return (
    <Layout>

      <h1>{post.title}</h1>
      <img
        src={post.relationships.field_featured_image.localFile ? post.relationships.field_featured_image.localFile.publicURL : "http://illuminate2.nucleusfinancial.loc/sites/default/files/default_images/default_image_5.png"}
        alt={post.field_featured_image.alt}
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
    nodeIlluminatePost(id: {eq: $ArticleId }){
      id
      title
      body {
        processed
      }
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
    }
  }
`;

export default Article;