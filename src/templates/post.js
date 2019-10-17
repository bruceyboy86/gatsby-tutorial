import React from 'react';

import {graphql} from 'gatsby';
import Img from "gatsby-image";

import Layout from '../components/layout';

const Post = ({data}) => {
  const post = data.nodeIlluminatePost;

  return (
    <Layout>

      <h1>{post.title}</h1>
      <Img
        fluid={post.relationships.field_featured_image.localFile.childImageSharp.fluid}
        alt={post.field_featured_image.alt}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed}} />
    </Layout>
  )
};

export const query = graphql`
  query($PostId: String!) {
    nodeIlluminatePost(id: {eq: $PostId }){
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
            childImageSharp{
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Post;