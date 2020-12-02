const { createRemoteFileNode } = require("gatsby-source-filesystem");

module.exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (node.internal.type === "Photos" && node.imgUrl !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.imgSrc, // string that points to the URL of the image
      //attach this node to parent you want to, so the parent will have imgSrc
      parentNodeId: node.id,
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    });
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      //dont have to be imgSrc, name it whatever you want
      node.imgSrc___NODE = fileNode.id;
    }
  }
};

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query allArticles {
      allArticles {
        nodes {
          link
          title
          text
          name
          photolist
        }
      }
    }
  `);

  const articleTemplate = path.resolve(`src/templates/article.js`);
  console.log(queryResults.data);
  queryResults.data.allArticles.nodes.forEach(node => {
    createPage({
      path: `/article/${node.link}`,
      component: articleTemplate,
      context: {
        article: node,
        photolist: node.photolist
      }
    });
  });
};