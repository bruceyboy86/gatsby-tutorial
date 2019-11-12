import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import Pager from "../components/pager";

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
            readtime={post.field_readtime}
            title={post.title}
            path={post.path ? post.path.alias : "#"}
            image={post.relationships.field_featured_image.localFile.childImageSharp.fluid}
            alt={post.field_image ? post.field_image.alt : "default"}
            summary={ post.body.summary }
            author={post.relationships.field_author_tax.name}
            created={post.created}
            category={post.relationships.field_category.name}
            summaryOff={true}
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
    filter: {field_hr_toggle: {nin: true}, relationships: {field_featured_image: {localFile: {size: {gte: 1}}}}}
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
      }
      field_readtime
      path {
        alias
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
        field_author_tax {
          name
        }
        field_category {
          name
        }
      }
    }
  totalCount
  }
}
`;

export default Explore;