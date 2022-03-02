import React from "react"
import styled from "styled-components"
import One from "../images/One.svg"
import Two from "../images/Two.svg"
import Three from "../images/Three.svg"
import Four from "../images/Four.svg"
import Five from "../images/Five.svg"
import Six from "../images/Six.svg"
import Seven from "../images/Seven.svg"
import Eight from "../images/Eight.svg"
import Polygon from "../images/Polygon.svg"
import Polygon1 from "../images/Polygon1.svg"
// import Noise from "../images/Noise.svg"
function AccordionLeft() {
  
  return (
    <>
      <Wrapper>
        <Left className="left">
          <Acc>
            <Button>
              <Number src={One} alt="one"></Number>
              <Text>Welcome & Orientation</Text>
              <Polygons src={Polygon} alt="Polygon"></Polygons>
            </Button>
            <Button>
              <Number src={Two} alt="Two"></Number>
              <Text>Docker: An introduction</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Three} alt="Three"></Number>
              <Text>Command line for linux</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Four} alt="Four"></Number>
              <Text>Docker: Building Images</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Five} alt="Five"></Number>
              <Text>Docker: Working with container</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Six} alt="Six"></Number>
              <Text>Docker: Multi container Bridge</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Seven} alt="Seven"></Number>
              <Text>Development</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
            <Button>
              <Number src={Eight} alt="Eight"></Number>
              <Text>Conclusion</Text>
              <Triangle src={Polygon1} alt="Polygon"></Triangle>
            </Button>
          </Acc>
        </Left>
      </Wrapper>
    </>
  )
}

export default AccordionLeft

const Wrapper = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
  }
`
const Left = styled.div`
  margin-top: 99px;

  @media (max-width: 500px) {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Acc = styled.div``
const Button = styled.button`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 34rem;
  border-radius: 0.5rem;
  margin: 45px 250px 0px 137px;
  margin-top: 30px;
  height: 4.5rem;
  color: white;

  background: linear-gradient(
    27.84deg,
    rgba(255, 255, 255, 0.1) 17.65%,
    rgba(255, 255, 255, 0.2) 91.64%
  );

  border-image-source: linear-gradient(
    230.61deg,
    rgba(255, 255, 255, 0.5) 6.9%,
    rgba(255, 255, 255, 0) 72.54%
  );

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content: center;
    margin: 25px 25px 0px 20px;

    width: 21rem;
    height: 3.5rem;
  }
`
const Number = styled.img`
  /* overflow: hidden; */
  padding-top: 1.3rem;
  height: 3rem;
  padding-left: 0.5rem;

  @media (max-width: 500px) {
    padding-top: 1.5rem;
    height: 1.7rem;
    padding-left: 0.6rem;
  }
`
const Text = styled.h3`
  text-align: left;
  padding: 6px 0px 5px 1px;
  font-size: 1.1rem;

  @media (max-width: 500px) {
    text-align: left;
    padding: 8.5px 0px 3px 10px;
    font-size: 0.8rem;
  }
`
const Polygons = styled.img`
  padding-top: 1.5rem;
  padding-left: 0.5rem;

  @media (max-width: 500px) {
    height: 1rem;
    padding-top: 1.2rem;
    transform: rotate(90deg);
    padding-left: 1.8rem;
  }
`
const Triangle = styled.img`
  padding-top: 1.8rem;

  @media (max-width: 500px) {
    height: 0.7rem;
    padding-top: 1.2rem;
  }
`
