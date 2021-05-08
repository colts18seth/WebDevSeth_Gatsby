import * as React from "react";
import Layout from "../components/layout";
import ProjectsList from '../components/projectsList';
import Seo from "../components/seo";

const projects = ({ location }) => (
    <Layout location={location}>
        <Seo title="Projects" />
        <ProjectsList />
    </Layout>
)

export default projects
