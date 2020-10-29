import styled, { css } from "styled-components"
import { typography as ssTypography } from "styled-system"

const Paragraph = styled.p`
  ${({ theme: { typography } }) => css`
    ${typography.default}
    ${ssTypography}
  `}
`

export default Paragraph
