import React from "react"
import Lottie from "react-lottie-player"
import data from "./data.json"

const LightBulb = () => (
  <Lottie
    loop={false}
    animationData={data}
    play
    style={{ width: 40, height: 40 }}
  />
)

export default LightBulb
