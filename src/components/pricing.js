import React from "react"
import styled from "styled-components"
import Pricingl from "./pricingl"
import Pricingr from "./pricingr"
function Pricing() {
  return (
    <>
      <Wrapper>
        <Title>Pricing</Title>
        <Subwrapper>
          <Pricingl />
          <Pricingr />
        </Subwrapper>
      </Wrapper>
    </>
  )
}

export default Pricing
const Subwrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
  color: white;

  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
`
const Wrapper = styled.div``
