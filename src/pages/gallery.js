import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({data}) => (
  <Layout>
    <SEO title="image gallery" />
    <h1>Image gallery</h1>
    <Img fluid={data.astronautImage.childImageSharp.fluid} alt="Astronaut" />
    <Img fixed={data.gatsbyIcon.childImageSharp.fixed} alt="Icon" />
  </Layout>
)

export const query = graphql`
{
  gatsbyIcon: file(relativePath:{eq: "gatsby-icon.png"}){
    childImageSharp{
      fixed(width: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  astronautImage: file(relativePath:{eq: "gatsby-astronaut.png"}){
    childImageSharp{
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Gallery