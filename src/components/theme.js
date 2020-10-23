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

const space = {
  small: "1rem",
  medium: "2rem",
  large: "4rem",
}

const components = {
  layout: css`
    margin: 0 auto;
    max-width: ${breakpoints.desktop};
    padding: ${space.small} ${space.medium};
  `,
}

const fontSizes = [
  "0.8rem",
  "1.25rem",
  "1.563rem",
  "1.953rem",
  "2.441",
  "3.052",
]
fontSizes.xSmall = fontSizes[0]
fontSizes.small = fontSizes[1]
fontSizes.medium = fontSizes[2]
fontSizes.large = fontSizes[3]
fontSizes.xLarge = fontSizes[4]
fontSizes.xxLarge = fontSizes[5]

export default {
  colors,
  breakpoints,
  components,
  space,
  fontSizes,
}

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: 'ABeeZee', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: ${colors.primary2}
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'ABeeZee', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors.primary3};
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {font-size: 2.441rem;}

  h3 {font-size: 1.953rem;}

  h4 {font-size: 1.563rem;}

  h5 {font-size: 1.25rem;}

  small, .text_small {font-size: 0.8rem;}
`
