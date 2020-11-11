import React from "react"
import styled, { css } from "styled-components"
import { color, space as ssSpace, layout } from "styled-system"
import Insta from "./insta.inline.svg"
import LinkedIn from "./linkedin.inline.svg"
import Twitter from "./twitter.inline.svg"

const icons = {
  Insta,
  LinkedIn,
  Twitter,
}

const Wrapper = styled.div`
  ${({ theme: { space, colors } }) => css`
    padding: 0 ${space.small};
    color: #fff;
    width: 5rem;
    height: 5rem;
    &:hover {
      color: ${colors.primary2};
    }
    ${color}
    ${ssSpace}
  ${layout}
  & svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  `}
`

const Icon = ({ icon, ...props }) => {
  const IconSvg = icons[icon]
  return (
    <Wrapper {...props}>
      <IconSvg />
    </Wrapper>
  )
}

export default Icon
