import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Archive from './archive'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Spring } from 'react-spring/renderprops'
import "./layout.css"

const MainLayout = styled.main`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
`

const Layout = ({ children, location }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
            file(relativePath: { regex: "/background/" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
                }
            }
        }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <Spring
                from={{ height: 100 }} to={{ height: 200 }}
            >
                {styles => (
                    <div style={{ overflow: 'hidden', ...styles }}>
                        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Photo of a Computer" />
                    </div>
                )}
            </Spring>

            <MainLayout>
                <div>
                    {children}
                </div>

                <Archive />

            </MainLayout>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
