/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({actions, graphql}) => {
  const{createPage} = actions;
  const articles = await graphql(`
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
  articles.data.allNodeIlluminatePost.nodes.map(articleData =>
    createPage({
      path: articleData.path ? articleData.path.alias : '/404',
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      },
    })
  );
}