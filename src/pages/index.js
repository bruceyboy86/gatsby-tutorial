import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection";

const IndexPage = ({data}) => {
  const collections = data.allNodeCollectionListPage.nodes[0].relationships.field_collections;
  return(
    <Layout pageType="exploreContainer">
      <SEO title="Illuminate.nucleusfinancial.com" />
      {collections.map(collection => (
        <Collection collectionObject={collection} />
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
            path {
              alias
            }
            field_show_link_to_full_collecti
            relationships {
              field_articles {
                title
                field_readtime
                path {
                  alias
                }
                created
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
                id
                body {
                  summary
                }
                field_featured_image {
                  alt
                }
              }
              field_layout {
                title
                field_css_class
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
