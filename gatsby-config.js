/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Great gatsby multi-language blog",
    description: "The only home we've ever known extraplanetary. Brain is the seed of intelligence are softly dancing colonies globular star cluster as a patch of light!",
    phone: "+380 66 777 88 99",
  },
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // родные плагины remark
        remarkPlugins: [
          // ставит внешним ссылкам атрибуты rel="nofollow, noopener, noreferrer"
          // открывает их в новой вкладке
          require("remark-external-links"),
        ],
        // адаптированные плагины
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/translations`,
        languages: ["en", "ru", "uk"],
        defaultLanguage: "uk",
        // автоматически перенаправлять на `/ru` или `/en` когда человек на главной `/`
        // имейте ввиду: у Google Chrome всегда стоит `en-US`! экспериментируйте
        redirect: false,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
