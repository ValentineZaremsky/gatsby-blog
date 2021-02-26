// gatsby-node.js
const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, actions, plugins }) => {
  actions.setWebpackConfig({
    // отключить  source-map в итоговой сборке
    devtool: getConfig().mode === "production" ? false : "source-map",
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    // по желанию вырубить react-dev-tools
    plugins: [
      plugins.define({
        '__REACT_DEVTOOLS_GLOBAL_HOOK__': `({ isDisabled: true })`
      })
    ],
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
