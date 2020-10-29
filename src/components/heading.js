import styled, { css } from "styled-components"
import { typography as ssTypography, space } from "styled-system"

const Heading = styled.h1`
  ${({ as, theme: { typography } }) => css`
    ${typography.heading}
    ${typography[as]}
    ${ssTypography}
    ${space}
  `}
`

export default Heading
