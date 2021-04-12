import * as React from "react"
import Layout from "./layout"
import { graphql } from 'gatsby'

export default function postLayout({ data, location }) {
    const { markdownRemark } = data;
    return (
        <Layout location={location}>
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
              eq: $slug
            }
          }) {
            html
            frontmatter {
                    title
              date
              slug
              }
          }
    }
`