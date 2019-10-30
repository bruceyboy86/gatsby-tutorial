import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const collections = data.allNodeCollectionListPage.nodes[0].relationships.field_collections;
  return(
    <Layout>
      <SEO title="Illuminate.nucleusfinancial.com" />
      {collections.map(collection => (
        <p>{collection.title}</p>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeCollectionListPage(limit: 1, filter: {status: {eq: true}, relationships: {field_collections: {elemMatch: {field_hr_toggle: {eq: false}}}}}) {
      nodes {
        relationships {
          field_collections {
            title
          }
        }
      }
    }
  }
`

export default IndexPage
