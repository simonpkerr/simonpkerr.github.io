import React from "react"
import styled, { css } from "styled-components"
import A from "./a"
import Icon from "./icon"

const Bg = styled.div`
  ${({ theme: { colors, space } }) => css`
    background-color: ${colors.primary1};
    padding: ${space.large} 0;
    width: 100%;
    margin-top: auto;
  `}
`

const StyledFooter = styled.footer`
  ${({ theme }) => theme.components.layout}
  display: flex;
  justify-content: center;
`

const Footer = () => (
  <Bg>
    <StyledFooter>
      <A href="https://www.instagram.com/simonpkerr" target="_blank">
        <Icon icon="Insta" />
      </A>
      <A
        href="https://www.linkedin.com/in/simon-kerr-06a53a25/"
        target="_blank"
      >
        <Icon icon="LinkedIn" />
      </A>
      <A href="https://twitter.com/simon_p_kerr" target="_blank">
        <Icon icon="Twitter" />
      </A>
    </StyledFooter>
  </Bg>
)

export default Footer
