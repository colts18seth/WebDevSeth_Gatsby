import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Archive from './archive'
import styled from 'styled-components'
import "./layout.css"

const MainLayout = styled.main`
    max-width: 90%;
    min-height: calc(100vh + 80px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-gap: 40px;
`

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
            file(relativePath: { regex: "/computer/" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
                }
            }
        }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <MainLayout>
                <div>
                    {children}
                </div>

                <Archive />

            </MainLayout>

            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
