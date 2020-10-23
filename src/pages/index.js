import React from "react"
import A from "../components/a"
import Layout from "../components/layout"
import ListItem from "../components/listItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there.</h1>
    <p>
      I&rsquo;m a software engineer with over 20 years of experience in both the
      public and private sector, working with React, Node and AWS.
    </p>
    <p>
      I&rsquo;ve got a couple of degrees in Multimedia and Creative Technology
      and I&rsquo;m an AWS certified developer.
    </p>
    <p>
      I'm an artist and I like to play a few different instruments including
      guitar, piano and cello. I'm also fluent in Mandarin Chinese, having lived
      there and studied the language for the past 17 years.
    </p>
    <p>I&rsquo;ve got 2 kids, a great wife, and a cute dog called Skye.</p>
    <h2>Social media</h2>
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
    <h2>Work</h2>
    <ul>
      <ListItem>
        2016-Present: Capital One - Principal software engineer (web)
      </ListItem>
      <ListItem>
        2019-Present: SK Web Consultancy Ltd. - Company director
      </ListItem>
      <ListItem>2015-2016: Oegen - Lead software engineer</ListItem>
      <ListItem>2009-2015: Leicester City Council - Web Manager</ListItem>
    </ul>
  </Layout>
)

export default IndexPage
