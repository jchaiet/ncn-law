const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/templates/page-template.tsx`)

  const result = await graphql(`
  query {
    allSanityPage {
      edges {
        node {
          id
          title
          metadata {
            title
            description
            path {
              current
            }
          }
        }
      }
    }
  }
`)

  result.data?.allSanityPage?.edges.forEach(edge => {
    createPage({
      path: edge.node.metadata.path.current === 'home' ? '/' : edge.node.metadata.path.current,
      component: pageTemplate,
      context: {
        id: edge.node.id,
        title: edge.node.title,
      }
    })
  })
}