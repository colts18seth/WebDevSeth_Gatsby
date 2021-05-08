import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'

const NotFound = styled.main`
    text-align: center;
    max-width: 650px;
    margin:0 auto;
    padding: 1rem;
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
    border-radius: 4px;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NotFound>
  </Layout>
)

export default NotFoundPage
