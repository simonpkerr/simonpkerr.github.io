import React, { useState } from "react"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import styled, { css } from "styled-components"
import Heading from "../heading"
import Paragraph from "../paragraph"
import ListItem from "../listItem"
import CloseButton from "../closeButton"
import Box from "../box"

const content = {
  about: (
    <>
      <Paragraph>
        I&rsquo;ve worked for over 20 years in both the public and private
        sector, working with React, Node, AWS, Umbraco, Hubspot, and a load of
        other stuff.
      </Paragraph>
      <Paragraph>
        I&rsquo;ve got a couple of degrees in Multimedia and Creative Technology
        and I&rsquo;m an AWS certified developer.
      </Paragraph>
      <Paragraph>
        I'm an artist and I like to play a few different instruments including
        guitar, piano and cello. I'm also fluent in Mandarin Chinese, having
        lived there and studied the language for the past 17 years.
      </Paragraph>
      <Paragraph>
        I&rsquo;ve got 2 kids, a great wife, and a cute dog called Skye.
      </Paragraph>
    </>
  ),
  work: (
    <ul>
      <ListItem>
        2016-Present: Capital One - Principal software engineer (web)
      </ListItem>
      <ListItem>
        2019-Present: SK Web Consultancy Ltd. - Company director
      </ListItem>
      <ListItem>2015-2016: Oegen - Lead software engineer</ListItem>
      <ListItem>2009-2015: Leicester City Council - Web Manager</ListItem>
    </ul>
  ),
}

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
    background-color: white;
    list-style-type: none;
    z-index: 1;
    border: 0.2rem solid ${colors.primary3};
    padding: ${space.medium} ${space.large} ${space.large} ${space.medium};
    margin-bottom: ${space.medium};
    width: 49%;
    box-sizing: border-box;
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover {
      border: 0.2rem solid ${colors.primary1};
      h2 {
        color: ${colors.primary1};
      }
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
    border-radius: 2rem;
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
    { id: 1, title: "About", content: content.about },
    { id: 2, title: "Work", content: content.work },
    { id: 3, title: "Education", content: "" },
    { id: 4, title: "Projects", content: "" },
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
              <Heading as="h2" m={0} textAlign="left">
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
