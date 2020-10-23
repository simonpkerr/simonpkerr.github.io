import styled, { css } from "styled-components"

const ListItem = styled.li`
  ${({ theme: { space } }) => css`
    padding: 0 0 ${space.small} 0;
  `}
`

export default ListItem
