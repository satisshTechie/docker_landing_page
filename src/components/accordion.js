import React from "react"
import styled from "styled-components"
import AccordionLeft from "./accordionLeft"
import AccordionRight from "./accordionRight"

function Accordion() {
  return (
    <>
      <Wrapper>
        <Heading>
          <Title>Curriculum</Title>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur
            <br />
          </Lorem>
          <Span>adipising ,amet varius eu. Blandit euismod ultrices.</Span>
        </Heading>
        <Subwrapper>
          <AccordionLeft />
          <AccordionRight />
        </Subwrapper>
      </Wrapper>
    </>
  )
}

export default Accordion
const Wrapper = styled.div`
  background: black;
  color: white;

  @media (max-width: 500px) {
    /* display: grid;
    justify-content: center;
    align-items: center; */
  }
`
const Subwrapper = styled.div`
  display: flex;
  background: black;
  justify-content: center;
`
const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Title = styled.h1`
  font-size: 76px;
  margin-bottom: 0rem;
  line-height: 3.5rem;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`
const Lorem = styled.p`
  color: grey;
  font-size: 1.2rem;
  line-height: 0.5rem;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 0.8rem;
    br {
      display: none;
    }
  }
`

const Span = styled.div`
  color: grey;
  font-size: 1.2rem;
  line-height: 0.5rem;
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 0.8rem;
  }
`
