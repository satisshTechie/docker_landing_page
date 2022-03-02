import React from "react"

import styled from "styled-components"
import Herosection from "../components/herosection"
import Accordion from "../components/accordion"
import Review from "../components/review"
import Pricing from "../components/pricing"
import Footer from "../components/footer"
// import Button from '../components/button'
export default function Home() {
  return (
    <Wrapper>
      <Herosection />
      <Accordion />
      <Review />
      <Pricing />
      <Footer />
      {/* <Button>{props.main_btn}</Button> */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: black;

  @media (max-width: 500px) {
    overflow-x: hidden;
  }
`
