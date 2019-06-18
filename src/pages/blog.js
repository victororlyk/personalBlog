import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"

const Blog = props => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark{
              edges{
                  node{
                      frontmatter{
                          date
                          title
                      }
                      fields{
                          slug
                      }
                  }
              }
          }
      }`)
  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index}>
              <Link to={`/blog/${edge.node.fields.slug}/`}> <h1>{edge.node.frontmatter.title}</h1></Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>)
        })}
      </ol>

    </Layout>
  )
}

Blog.propTypes = {}

export default Blog
