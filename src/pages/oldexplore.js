import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostPreview from "../components/postPreview";

const Explore = ({ data }) => {
  const posts = data.allNodeIlluminatePost.nodes;

  return (
    <Layout>
      <SEO title="posts" />
      <h1>Posts</h1>
      {posts.map(post => (
        <PostPreview
          key={post.id}
          title={post.title}
          path={post.path ? post.path.alias : "#"}
          image={post.relationships.field_featured_image.localFile.childImageSharp.fluid}
          alt={post.field_image ? post.field_image.alt : "default"}
          summary={ post.body.summary }
        />
      ))}

    </Layout>
  )
}

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

export default Explore;