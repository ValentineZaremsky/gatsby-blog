// pages/index.js
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

// получить все записи, отсортированные по дате
const getPosts = graphql`
  query allPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            lang
            h1
            slug
            category
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default function HomePage({ pageContext: { language } }) {
  const response = useStaticQuery(getPosts)
  // только записи с актуальной локалью
  const posts = response.allMdx.edges.filter(
    post => post.node.frontmatter.lang === language
  )

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ node: { frontmatter: post } }, index) => (
          <li key={index}>
            <Link to={`/${post.lang}/${post.category}/${post.slug}/`}>
              {post.h1}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
