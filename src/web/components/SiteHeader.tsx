import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

/** Site header view component */
export const SiteHeader = () => {
  const {
    site: {
      siteMetadata: {
        content: {
          siteHeader: { title, tagline }
        }
      }
    }
  } = useStaticQuery(QUERY)

  return (
    <div className='site-header'>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: tagline }} />

      {/* Search form goes here */}
    </div>
  )
}

/** GraphQL query */
const QUERY = graphql`
  query MetaData {
    site {
      siteMetadata {
        content {
          siteHeader {
            title
            tagline
          }
        }
      }
    }
  }
`

/* Export */
export default SiteHeader
