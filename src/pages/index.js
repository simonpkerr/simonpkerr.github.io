import React from "react"
import A from "../components/a"
import Layout from "../components/layout"
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
      <li>
        <A
          href="https://www.linkedin.com/in/simon-kerr-06a53a25/"
          target="_blank"
        >
          LinkedIn
        </A>
      </li>
      <li>
        <A href="https://www.instagram.com/simonpkerr" target="_blank">
          Instagram
        </A>
      </li>
      <li>
        <A href="https://twitter.com/simon_p_kerr" target="_blank">
          Twitter
        </A>
      </li>
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
