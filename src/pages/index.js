import React from "react"
import CardContainer from "../components/cardContainer"
import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Paragraph fontSize="large">
      Software engineer with over 20 years of experience, working with React,
      Node and AWS.
    </Paragraph>
    <CardContainer />
  </Layout>
)

export default IndexPage
