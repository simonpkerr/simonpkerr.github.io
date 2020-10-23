import styled from "styled-components"

const Content = styled.main`
  ${({ theme: { components } }) => components.layout}
`

export default Content
