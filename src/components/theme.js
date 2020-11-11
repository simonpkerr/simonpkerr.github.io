import { createGlobalStyle, css } from "styled-components"

// $dodger-blue: #2191fbff;
// $bright-maroon: #ba274aff;
// $antique-ruby: #841c26ff;
// $middle-blue-green: #b2ece1ff;
// $middle-blue-green-2: #8cdedcff;
const colors = {
  primary1: "#2191fbff",
  primary2: "#080705ff",
  primary3: "#ba274aff",
  secondary1: "#841c26ff",
  secondary2: "#b2ece1ff",
  secondary3: "#8cdedcff",
}

const breakpoints = [768, 968, 1024, 1280]
breakpoints.mobile = `${breakpoints[0]}px`
breakpoints.tablet = `${breakpoints[1]}px`
breakpoints.desktop = `${breakpoints[2]}px`
breakpoints.lgDesktop = `${breakpoints[3]}px`
breakpoints.mobileMin = `@media screen and (min-width:${breakpoints.mobile})`
breakpoints.tabletMin = `@media screen and (min-width:${breakpoints.tablet})`
breakpoints.desktopMin = `@media screen and (min-width:${breakpoints.desktop})`

const space = {
  small: "1rem",
  medium: "2rem",
  large: "4rem",
}

const components = {
  layout: css`
    margin: 0 auto;
    max-width: ${breakpoints.desktop};
    padding: ${space.medium};
  `,
}

const fontSizes = [
  "0.75rem",
  "1.333rem",
  "1.777rem",
  "2.369rem",
  "3.157rem",
  "4.209rem",
  "1.6rem",
]
fontSizes.xSmall = fontSizes[0]
fontSizes.small = fontSizes[1]
fontSizes.medium = fontSizes[2]
fontSizes.large = fontSizes[3]
fontSizes.xLarge = fontSizes[4]
fontSizes.xxLarge = fontSizes[5]
fontSizes.default = fontSizes[6]

const typography = {
  default: css`
    font-size: ${fontSizes.default};
    line-height: 1.75;
    color: ${colors.primary2};
    margin: ${space.medium} 0;
  `,
  heading: css`
    margin: 3rem 0 1.38rem;
    font-family: "ABeeZee", sans-serif;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors.primary1};
  `,
  h1: css`
    margin-top: 0;
    font-size: ${fontSizes.xxLarge};
  `,
  h2: css`
    font-size: ${fontSizes.xLarge};
  `,
  h3: css`
    font-size: ${fontSizes.large};
  `,
  h4: css`
    font-size: ${fontSizes.medium};
  `,
  h5: css`
    font-size: ${fontSizes.small};
  `,
}

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: 'ABeeZee', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: ${colors.primary2};
    height: 100%;
  }

  #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'ABeeZee', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: ${fontSizes.xxLarge};
  }

  h2 {font-size: ${fontSizes.xLarge};}

  h3 {font-size: ${fontSizes.large};}

  h4 {font-size: ${fontSizes.medium};}

  h5 {font-size: ${fontSizes.small};}

  small, .text_small {font-size: ${fontSizes.xSmall};}

  p {
    font-size: ${fontSizes.default}
  }
`

export default {
  colors,
  breakpoints,
  components,
  space,
  fontSizes,
  typography,
}