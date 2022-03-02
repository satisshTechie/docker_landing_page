import React from "react"
import styled from "styled-components"
import Tick from "../images/Tick.svg"
function Pricingr() {
  return (
    <>
      <Wrapper>
        <Plan>Plan Includes</Plan>
        <Contains>
          <Ticks src={Tick} alt="tick"></Ticks>
          <Text>Beginner to Masters</Text>
        </Contains>
        <Contains>
          <Ticks src={Tick} alt="tick"></Ticks>
          <Text>5 Hours of Content</Text>
        </Contains>
        <Contains>
          <Ticks src={Tick} alt="tick"></Ticks>
          <Text>100+ Courses</Text>
        </Contains>
        <Contains>
          <Ticks src={Tick} alt="tick"></Ticks>
          <Text>Cheat sheets/ Downloadables</Text>
        </Contains>
        <Contains>
          <Ticks src={Tick} alt="tick"></Ticks>
          <Text>24/7 Expert Access</Text>
        </Contains>
        <Button>Join Now</Button>
      </Wrapper>
    </>
  )
}

export default Pricingr
const Wrapper = styled.div`
  display: flex;
  align-items: left;
  margin-left: 3rem;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-left: 1rem;
  }
`
const Ticks = styled.img`
  height: 1.1rem;
  align-items: left;
  padding-right: 0.5rem;
`
const Text = styled.h3`
  font-size: 1.2rem;
  font-weight: lighter;
  line-height: 0.6rem;
`

const Contains = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;

  @media (max-width: 500px) {
    text-align: center;
  }
`
const Plan = styled.h3`
  font-size: 1.5rem;
`
const Button = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    display: block;

    width: 7rem;
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
    margin-top: 4rem;
  }
`
