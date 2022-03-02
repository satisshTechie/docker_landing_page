import React from "react"
import styled from "styled-components"
import Dollar from "../images/Dollar.svg"
import Ninety from "../images/Ninety.svg"
function Pricingl() {
  return (
    <>
      <Wrapper>
        <Rupee>
          <Dollars src={Dollar} alt="Dollar"></Dollars>
          <Nine src={Ninety} alt="99"></Nine>
        </Rupee>
        <Button>Join Now</Button>
      </Wrapper>
    </>
  )
}

export default Pricingl
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    text-align: left;
  }
`
const Dollars = styled.img`
  height: 3rem;
  width: 3rem;
  padding-bottom: 5rem;
  padding-right: 1rem;

  @media (max-width: 500px) {
    padding-right: 0rem;
    height: 2rem;
    padding-bottom: 4rem;
  }
`
const Nine = styled.img`
  height: 8rem;
  padding-right: 3rem;
  @media (max-width: 500px) {
    padding-right: 0rem;
    height: 6rem;
  }
`
const Rupee = styled.div``
const Button = styled.button`
  padding: 1.3rem 2.7rem 1.3rem 2.7rem;
  font-size: 1rem;
  margin-top: 4rem;

  @media (max-width: 500px) {
    display: none;
  }
`
