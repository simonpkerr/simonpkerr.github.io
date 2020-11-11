import React, { useState } from "react"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import styled, { css } from "styled-components"
import Heading from "../heading"
import CloseButton from "../closeButton"
import Box from "../box"
import text from "./text"

const Wrapper = styled.ul`
  ${({ theme: { space } }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: ${space.medium} 0;
    position: relative;
  `}
`

// const stateStyles = ({ disabled, theme: { colors } }) =>
//   disabled
//     ? css`
//         cursor: default;
//         opacity: 0.3;
//       `
//     : css`
//         cursor: pointer;
//         &:hover {
//           background-color: ${colors.secondary2};
//           border: 0.2rem solid ${colors.secondary3};
//           h2 {
//             color: ${colors.primary2};
//           }
//         }
//       `

const MiniCard = styled(motion.li)`
  ${({ theme: { space, colors } }) => css`
    background-color: ${colors.primary3};
    color: white;
    list-style-type: none;
    z-index: 1;
    border: 0.2rem solid ${colors.secondary1};
    border-bottom: 1rem solid ${colors.secondary1};
    /* padding: ${space.medium} ${space.large} ${space.large} ${space.medium}; */
    margin-bottom: ${space.medium};
    width: 23%;
    box-sizing: border-box;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      border: 0.2rem solid ${colors.primary1};
      border-bottom: 1rem solid;
      background: white;
      color: ${colors.primary1};
    }
    h2 {
      color: inherit;
    }
  `}
`

const Card = styled(motion.div)`
  ${({ theme: { space, colors, breakpoints } }) => css`
    /* display: flex;
    flex-wrap: wrap; */
    z-index: 3;
    background: white;
    padding: ${space.medium};
    border-radius: 1rem;
    border: 0.2rem solid ${colors.primary1};
    width: 100%;
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);
    ${breakpoints.tabletMin} {
      width: 70rem;
    }
  `}
`

const CardModal = styled(motion.div)`
  display: flex;
  position: absolute;
  place-content: center;
  place-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const CardBg = styled(motion.div)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary2};
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  `}
`

const bgVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
}

const CardContainer = () => {
  const items = [
    { id: 1, title: "About", content: text.about },
    { id: 2, title: "Work", content: text.work },
    { id: 3, title: "Education", content: text.education },
    { id: 4, title: "Projects", content: text.projects },
  ]
  const [selectedId, setSelectedId] = useState(null)
  const selectedItem = items.find(x => x.id === selectedId)
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <Wrapper>
          {items.map(item => (
            <MiniCard
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <Heading as="h2" m={0} textAlign="center" px="medium" py="large">
                {item.title}
              </Heading>
            </MiniCard>
          ))}
        </Wrapper>

        <AnimatePresence>
          {selectedId && (
            <CardModal>
              <Card layoutId={selectedId}>
                <Heading as="h2" mt={0}>
                  {selectedItem.title}
                </Heading>
                <Box w="100%">{selectedItem.content}</Box>
                <CloseButton
                  display="flex"
                  ml="auto"
                  onClick={() => setSelectedId(null)}
                  title="close"
                />
              </Card>
              <CardBg
                onClick={() => setSelectedId(null)}
                // variants={bgVariants}
                // initial="hidden"
                // animate="visible"
              />
            </CardModal>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}

export default CardContainer
