import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import classes from './footer.module.scss'

const Footer = props => {
  const data = useStaticQuery(graphql`
      query{
          site{
              siteMetadata{
                  author
              }
          }

      }

  `)
  return (
    <footer className={classes.footer}>
      created by &copy; {data.site.siteMetadata.author}
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
