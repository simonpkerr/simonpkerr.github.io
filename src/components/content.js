import styled, { css } from "styled-components"

const Content = styled.main`
  ${({ theme: { components, space } }) => css`
    ${components.layout}
    margin-bottom: ${space.large};
  `}
`

export default Content
