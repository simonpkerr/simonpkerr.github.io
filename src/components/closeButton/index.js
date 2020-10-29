import React from "react"
import styled from "styled-components"
import { display, space, flex } from "styled-system"
import Icon from "./icon.inline.svg"

const StyledButton = styled.button`
  appearance: none;
  border: 0;
  background: 0;
  outline: 0;
  cursor: pointer;
  ${space}
  ${flex}
  ${display}
`

const CloseButton = props => (
  <StyledButton {...props}>
    <Icon />
  </StyledButton>
)

export default CloseButton
