import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import classes from "./blog.module.scss"

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
      <ol className={classes.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index} className={classes.post}>
              <Link to={`/blog/${edge.node.fields.slug}/`}>
                <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>)
        })}
      </ol>

    </Layout>
  )
}

Blog.propTypes = {}

export default Blog
