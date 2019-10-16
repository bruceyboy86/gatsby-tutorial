import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";

const WebPage = ({data}) => {
  const page = data.nodeDragAndDropPage;

  return (
    <Layout>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body.processed }} />
    </Layout>
  )
};

export const query = graphql`
  query($WebPageId: String!){
    nodeDragAndDropPage(id: {eq: $WebPageId}){

        id
        title
        body {
          processed
        }

    }
  }
`;

export default WebPage;