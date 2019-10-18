import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import Pager from "../components/pager";
import "../styles/grid.css"

const Explore = ({data, pageContext}) => {
  const posts = data.allNodeIlluminatePost.nodes;
  const pageInfo = data.allNodeIlluminatePost.pageInfo;
  return(
    <Layout pageType="exploreContainer">
      <SEO title="blog posts" />
      <div className="exploreHeader">
        <h3 id="postCount">{data.allNodeIlluminatePost.totalCount} articles to get you thinking</h3>
        <p>find just what you're after</p>
      </div>
      <div className="gridContainer">
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
      </div>
      <Pager pageContext={pageContext} hasNextPage={pageInfo.hasNextPage} hasPreviousPage={pageInfo.hasPreviousPage} pageCount={pageInfo.pageCount}/>
    </Layout>
  )
};

export const query = graphql`
query($skip: Int!, $limit: Int!){
    allNodeIlluminatePost(
    sort: {fields: created, order: DESC}
    filter: {field_hr_toggle: {nin: true}, relationships: {field_featured_image: {localFile: {size: {gte: 1}}}}, body: {summary: {ne: "", nin: "null"}}}
    skip: $skip
    limit: $limit
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      pageCount
    }
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
  totalCount
  }
}
`;

export default Explore;