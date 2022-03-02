import React from "react"
import styled from "styled-components"
import CardIcon from "../images/CardIcon.svg"
import Ring from "../images/Ring.svg"

function Button() {
  return (
    <Wrapper>
      <Enroll>
        <Svg>
          <Svg1 src={CardIcon} alt="card"></Svg1>
          <Svg2 src={Ring} alt="Ring"></Svg2>
        </Svg>
        <Text className="button-text">
          <Texttop className="text-top">ENROLL NOW</Texttop>
          <Textbottom className="text-bottom">More than 100 Courses</Textbottom>
        </Text>
      </Enroll>
    </Wrapper>
  )
}

export default Button
const Wrapper = styled.div`
  position: absolute;
  top: 29rem;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    margin-top: -5rem;
  }
`
const Texttop = styled.div`
  padding-top: 1rem;
  font-weight: 700;
  padding-left: 0.47rem;
  border: none;

  @media (max-width: 500px) {
    padding-top: 0.7rem;
    font-weight: 600;
    padding-left: 0.52rem;
    font-size: 0.8rem;
  }
`

const Textbottom = styled.div`
  padding: 0.2rem 0.5rem 0.1rem 4rem;

  @media (max-width: 500px) {
    padding-left: 2.8rem;
    font-size: 0.7rem;
  }
`
const Svg = styled.div`
  /* :hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  } */
`
const Svg1 = styled.img`
  position: absolute;
  left: 0.48rem;
  top: 0.95rem;
  height: 2.7rem;
  :hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 500px) {
    height: 1.78rem;
  }
`
const Svg2 = styled.img`
  position: absolute;
  height: 3rem;
  top: 0.6rem;
  left: 0.5rem;

  @media (max-width: 500px) {
    height: 2rem;
    padding-top: 0.1rem;
  }

  /* :hover {
    transform: rotate(100deg);
    transition: 1s ease-in-out;
  } */
`
const Enroll = styled.button`
  display: flex;
  top: 5rem;
  cursor: pointer;
  border-radius: 0.8rem;
  height: 4.5rem;
  width: 15rem;
  position: relative;

  &:hover {
    transform: scale(1.1);
    transition: all 0.8s ease-in-out;
    /* transition-timing-function: ease-in;
    transition-timing-function: cubic-bezier(0.42, 0, 1, 1);

    transition-timing-function: ease-out;
    transition-timing-function: cubic-bezier(0, 0, 0.58, 1); */

    /* The cubic-bezier() equivalent of the ease-in-out keyword */
    /* transition-timing-function: cubic-bezier(0.1, 1, 1, 0.1); */

    ${Svg1} {
      transform: scale(1.1);
      transition: 0.5s ease-in-out;
    }

    ${Svg2} {
      transform: rotate(100deg);
      transition: 1.5s ease-in-out;
    }
  }

  @media (max-width: 500px) {
    height: 3.5rem;
    width: 12rem;
  }
`
const Text = styled.div`
  /* left: 10rem; */
`
