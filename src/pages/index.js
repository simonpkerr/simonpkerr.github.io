import React from "react"
import A from "../components/a"
import CardContainer from "../components/cardContainer"
import Layout from "../components/layout"
import ListItem from "../components/listItem"
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
    <ul>
      <ListItem>
        <A
          href="https://www.linkedin.com/in/simon-kerr-06a53a25/"
          target="_blank"
        >
          LinkedIn
        </A>
      </ListItem>
      <ListItem>
        <A href="https://www.instagram.com/simonpkerr" target="_blank">
          Instagram
        </A>
      </ListItem>
      <ListItem>
        <A href="https://twitter.com/simon_p_kerr" target="_blank">
          Twitter
        </A>
      </ListItem>
    </ul>
  </Layout>
)

export default IndexPage
