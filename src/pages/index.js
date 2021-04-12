import * as React from "react"
import Listing from '../components/listing';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <SEO title="Home" />
        <Listing />
    </Layout>
)

export default IndexPage
