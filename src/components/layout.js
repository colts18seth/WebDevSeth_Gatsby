import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Archive from './archive'
import ProjectsArchive from './projectsArchive'
import styled from 'styled-components'
import "./layout.css"

const MainLayout = styled.main`
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
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
        }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <MainLayout>
                <ProjectsArchive />

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
