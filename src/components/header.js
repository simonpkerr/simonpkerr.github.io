import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import LightBulb from "./lightBulb"

const InnerWrapper = styled.div`
  ${({ theme: { components, colors } }) => css`
    ${components.layout}
    border-bottom: .2rem solid ${colors.primary1};
    display: flex;
    align-items: center;
  `}
`

const SiteTitle = styled(Link)`
  ${({ theme: { fontSizes, colors, space } }) => css`
    color: ${colors.primary1};
    text-decoration: none;
    font-size: ${fontSizes.large};
    padding-left: ${space.small};
    font-weight: 900;
  `}
`

const Header = ({ siteTitle }) => (
  <header>
    <InnerWrapper>
      <LightBulb />
      <SiteTitle to="/">{siteTitle}</SiteTitle>
    </InnerWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
