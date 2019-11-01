import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection";

const IndexPage = ({data}) => {
  const latestPosts = data.allNodeIlluminatePost.nodes;
  const collections = data.allNodeCollectionListPage.nodes[0].relationships.field_collections;
  return(
    <Layout pageType="collectionListPageContainer">
      <SEO title="Illuminate.nucleusfinancial.com" />
      {collections.slice(0, 1).map(collections => (
        <Collection collectionObject={collections} latestPosts={latestPosts} />
      ))}
      {collections.slice(1).map(collection => (
        <Collection collectionObject={collection} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeIlluminatePost(limit: 5, sort: {fields: created, order: DESC}) {
      nodes {
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
                fluid(maxWidth: 600) {
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
    }
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
                        fluid(maxWidth: 600) {
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
              field_background_colour {
                field_hex
              }
              field_text_colour {
                field_hex
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
