import styled, { css } from "styled-components"

const ListItem = styled.li`
  ${({ theme: { space, typography } }) => css`
    padding: 0 0 ${space.small} 0;
    ${typography.default}
  `}
`

export default ListItem
