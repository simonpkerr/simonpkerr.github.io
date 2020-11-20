import React, { useState } from "react"
import styled, { css } from "styled-components"
import media from "./media.json"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  height: 50rem;
  overflow: hidden;
  margin-bottom: ${({ theme: { space } }) => space.medium};

  &::before {
    content: "";
    width: 100%;
    height: 8rem;
    display: block;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, white, transparent);
  }
`

const Pic = styled.div`
  ${({ bg }) => css`
    background: url("${bg}") no-repeat 50% 50%;
    background-size: cover;
  `}
  display: block;
  width: 25%;
  height: 30rem;
  border: 1px solid white;
  flex-grow: 1;
`

const SeeMoreButton = styled.button`
  ${({ theme }) => css`
    ${theme.typography.link}
    display: block;
    margin: 0 auto;
  `}
`

const Instagram = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <Wrapper>
        {media.data.map(picture => (
          <Pic bg={picture.media_url} alt="" />
        ))}
      </Wrapper>
      <SeeMoreButton onClick={() => setToggled(!toggled)}>
        See more&hellip;
      </SeeMoreButton>
    </>
  )
}

export default Instagram
