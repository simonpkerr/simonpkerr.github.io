import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const InnerWrapper = styled.div`
  ${({ theme: { components } }) => components.layout}
`

const SiteTitle = styled(Link)`
  ${({ theme: { fontSizes, colors } }) => css`
    color: ${colors.primary1};
    display: block;
    border-bottom: 1px solid ${colors.primary1};
    text-decoration: none;
    font-size: ${fontSizes.medium};
  `}
`

const Header = ({ siteTitle }) => (
  <header>
    <InnerWrapper>
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
