/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const {paginate} = require('gatsby-awesome-pagination');

exports.createPages = async ({actions, graphql}) => {
  const{createPage} = actions;
  const posts = await graphql(`
    {
      allNodeIlluminatePost {
        nodes {
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
                publicURL
              }
            }
          }
          path {
            alias
          }
        }
      }
  }
  `);

  paginate({
    createPage,
    items: posts.data.allNodeIlluminatePost.nodes,
    itemsPerPage: 12,
    pathPrefix: '/explore',
    component: path.resolve(`src/templates/explore.js`),
  });

  const webpages = await graphql(`
  {
    allNodeDragAndDropPage {
      nodes {
        body {
          processed
        }
        title
        path {
          alias
        }
        id
      }
    }
  }
  `);
  webpages.data.allNodeDragAndDropPage.nodes.map(webpageData =>
    createPage({
      path: webpageData.path ? webpageData.path.alias : '/404',
      component: path.resolve(`src/templates/webPage.js`),
      context: {
        WebPageId: webpageData.id
      },
    })
  )
  posts.data.allNodeIlluminatePost.nodes.map(postData =>
    createPage({
      path: postData.path ? postData.path.alias : '/404',
      component: path.resolve(`src/templates/post.js`),
      context: {
        PostId: postData.id,
      },
    })
  );
}