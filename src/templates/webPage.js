import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout";

const WebPage = ({data}) => {

  const page = data.nodeDragAndDropPage;
  let addImageStrings = page.body.processed.replace(new RegExp("-base-url-/-files-directory-/", 'g'), 'https://illuminate.nucleusfinancial.com/sites/default/files/');
  return (
    <Layout pageType="webPageTemplate">
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: addImageStrings }} />
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