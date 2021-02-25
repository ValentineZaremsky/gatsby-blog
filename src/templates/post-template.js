// src/templates/post-template.js
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// динамический slug берётся из переданного на этапе создания страниц контекста
export const query = graphql`
  query getPost($slug: String!, $lang: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }) {
      body
      frontmatter {
        h1
        date(formatString: "MMMM Do, YYYY", locale: $lang)
      }
    }
  }
`
// Отобразить контент помогает MDXRenderer
export default function PostTemplate({ data }) {
  const { h1 } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <main>
      <h1>{h1}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </main>
  )
}
