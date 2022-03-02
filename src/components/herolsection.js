import React from "react"
import styled from "styled-components"
import Button from "./button"
import PoppinsBold from "../fonts/Poppins-Bold.ttf"
import { createGlobalStyle } from "styled-components"

function Herolsection() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          The
          <br /> Complete <br />
          Docker
          <br />
          <Bootcamp>Bootcamp</Bootcamp>
        </Title>
        <Sub>
          The Complete Docker Bootcamp for 2021 <br />
          Learn everything from just 1 Course
        </Sub>
        <Button name="main_btn" />
      </Wrapper>
    </>
  )
}

export default Herolsection

const Wrapper = styled.div`
  padding-left: 7.5rem;
  margin-top: 4rem;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-left: 0rem;
    margin-top: 0rem;
  }
`
const Title = styled.h1`
  color: white;
  font-size: 70px;
  line-height: 70px;
  font-weight: 500;
  font-family: Poppins;

  @media (max-width: 500px) {
    font-size: 2rem;
    display: grid;
    grid-template-row: 1fr 0.2fr;
    justify-content: space-around;
    text-align: center;
    justify-content: center;
    line-height: 3rem;
    font-weight: 700;
    margin-bottom: 0rem;

    /* br {
      display: none;
    } */
  }
`

const Bootcamp = styled.span`
  font-family: Poppins;
  color: #898989;
`

const Sub = styled.p`
  color: #898989;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: absolute;
  font-weight: 500;
  top: 27.5rem;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: 0.5fr;
    justify-content: space-around;
    text-align: center;
    padding: 0rem;
    margin: 0rem;
    font-size: 14px;
    position: absolute;
    top: 22rem;
  }
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 500;
    font-style: bold;
    font-display: auto;
  }
  h1 {
    font-family: 'Poppins';
    font-weight: 500;
  }
`
