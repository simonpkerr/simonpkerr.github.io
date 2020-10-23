import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there.</h1>
    <p>I&rsquo;m a software engineer, working with React, Node and AWS.</p>
    <h2>About</h2>
    <ul>
      <li>Linked in</li>
      <li>Instagram</li>
      <li>Twitter</li>
    </ul>
    <h2>Work</h2>
    <ul>
      <li>Capital One - Principal software engineer (web)</li>
      <li>SK Web Consultancy Ltd. - Company director</li>
      <li>Oegen - Lead software engineer</li>
      <li>Leicester City Council - Web Manager</li>
    </ul>
  </Layout>
)

export default IndexPage
