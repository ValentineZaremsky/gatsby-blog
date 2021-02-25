// components/layout.js
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({
  lang = "uk",
  title = "",
  description = "",
  children,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          // по желанию добавить Open Graph для социальных сетей
          { name: "description", content: metaDescription },
        ]}
      />
      <main>{children}</main>
    </>
  )
}
