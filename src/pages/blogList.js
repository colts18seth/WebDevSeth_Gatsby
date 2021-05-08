import * as React from "react";
import Layout from "../components/layout";
import Listing from '../components/listing';
import Seo from "../components/seo";

const blogList = ({ location }) => (
    <Layout location={location}>
        <Seo title="Blog" />
        <Listing />
    </Layout>
)

export default blogList
