import React from "react"
import ListItem from "../listItem"
import Paragraph from "../paragraph"

export default {
  about: (
    <>
      <Paragraph>
        I&rsquo;ve worked for over 20 years in both the public and private
        sector, working with React, Node, AWS, Umbraco, Hubspot, and a load of
        other stuff.
      </Paragraph>
      <Paragraph>
        I&rsquo;ve got a couple of degrees in Multimedia and Creative Technology
        and I&rsquo;m an AWS certified developer.
      </Paragraph>
      <Paragraph>
        I'm an artist and I like to play a few different instruments including
        guitar, piano and cello. I'm also fluent in Mandarin Chinese, having
        lived there and studied the language for the past 17 years.
      </Paragraph>
      <Paragraph>
        I&rsquo;ve got 2 kids, a great wife, and a cute dog called Skye.
      </Paragraph>
    </>
  ),
  work: (
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
  ),
  education: (
    <ul>
      <ListItem>2017: AWS Developer Certified</ListItem>
      <ListItem>2016: Hubspot inbound and COS certification</ListItem>
      <ListItem>2014: Umbraco Level 1 &amp; 2</ListItem>
      <ListItem>2012: MSc Creative Technology (Distinction)</ListItem>
      <ListItem>2005: BA (Hons) Interactive Multimedia (1st Class)</ListItem>
    </ul>
  ),
  projects: (
    <ul>
      <ListItem>Capital One Email Credit Limit Increase</ListItem>
      <ListItem>Capital One Online Account Servicing</ListItem>
      <ListItem>SAMS Mapping tool</ListItem>
      <ListItem>Financial express</ListItem>
      <ListItem>Talktalk business portal</ListItem>
      <ListItem>Talktalk salesforce CRM integration</ListItem>
      <ListItem>Leicester City Council redesign</ListItem>
    </ul>
  ),
}
