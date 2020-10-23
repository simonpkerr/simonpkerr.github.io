import styled, { css } from "styled-components"

const A = styled.a`
  ${({ theme: { colors } }) => css`
    color: ${colors.primary3};
    &:hover {
      text-decoration: none;
    }
  `}
`

export default A
