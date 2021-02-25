// gatsby-node.js
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// createPages даёт доступ к graphql и некоторым методам gatsby (actions)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // получить все markdown-записи
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              lang
              slug
              category
            }
          }
        }
      }
    }
  `)

  // для каждой записи создать страницу
  posts.forEach(({ node }) => {
    const { lang, slug, category } = node.frontmatter
    return createPage({
      // путь к странице
      path: `${lang}/${category}/${slug}`,
      // шаблон страницы
      component: require.resolve("./src/templates/post-template.js"),
      // контекст, который попадёт в шаблон
      // может быть использован для дальнейших манипуляций с данными
      context: { lang, slug },
    })
  })
}
