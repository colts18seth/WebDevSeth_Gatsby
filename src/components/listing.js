import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`

const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 5rem;
    a {
        color: #000;
        text-decoration: none;
    }
    h2 {
        margin-bottom: 0;
    }
    p {
        font-size: 0.8rem;
    }
    .read-more {
        font-size: 0.8rem;
        text-decoration: underline;
        color: #17a2b8;
    }
`

const Listing = () => (
    <StaticQuery
        query={LISTING_QUERY}
        render={({ allMarkdownRemark }) => (
            allMarkdownRemark.edges.map(({ node }) => (
                <Post key={node.frontmatter.slug}>
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    <Link to={`/posts${node.frontmatter.slug}`} className="read-more">
                        Read More
                    </Link>
                </Post>
            ))
        )}
    />
)

export default Listing
