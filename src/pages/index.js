import React from "react"
import CardContainer from "../components/cardContainer"
import Heading from "../components/heading"
import Instagram from "../components/instagram"
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
    <Heading as="h2">From Instagram</Heading>
    <Instagram />
  </Layout>
)

export default IndexPage
