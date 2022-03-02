import React from "react"
import Header from "./header"
import Herolsection from "./herolsection"
import styled from "styled-components"
import Background from "../images/Background.png"
function Herosection() {
  return (
    <>
      <Wrapper>
        <Header />
        <Herolsection />
      </Wrapper>
    </>
  )
}

export default Herosection

const Wrapper = styled.div`
  z-index: 1;
  background-image: url(${Background});
  background-color: #000000;
  height: 105vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;

  @media (max-width: 500px) {
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    background-size: 100%;
    background-color: black;
    position: relative;
  }
`
