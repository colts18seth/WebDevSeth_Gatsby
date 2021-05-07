import * as React from "react";
import Layout from "../components/layout";
import About from '../components/about';
import Seo from "../components/seo";

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <Seo title="Home" />
        <About />
    </Layout>
)

export default IndexPage
