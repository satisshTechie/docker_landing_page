import React from "react"
import styled from "styled-components"
import Quotes from "../images/Quotes.svg"
import Person1 from "../images/Person1.svg"
import Person2 from "../images/Person2.svg"
import Person3 from "../images/Person3.svg"
import Circle1 from "../images/Circle1.svg"
import Circle2 from "../images/Circle2.svg"

function Review() {
  return (
    <>
      <Wrapper>
        <Head>
          <Tick src={Quotes} alt="Quote"></Tick>
          <Text>
            <We>We love to</We>
            <Hear>hear your feedback</Hear>
          </Text>
        </Head>
        <Reviews>
          <Review1>
            <Words>
              “Pharetra tellus semper mauris ut nisl integer. Lorem pharetra sit
              mi vitae mi urna enim arcu faucibus. Consequat donec varius odio
              tristique porttitor in. Ultricies gravida eget eu, pharetra
              nullam. Nulla fermentum pellentesque a dictum.”{" "}
            </Words>
            <Profile>
              <Per1 src={Person1} alt="Person1"></Per1>
              <Name>Morbi</Name>
            </Profile>
          </Review1>
          <Review2>
            <Words>
              “Pharetra tellus semper mauris ut nisl integer. Lorem pharetra sit
              mi vitae mi urna enim arcu faucibus. Consequat donec varius odio
              tristique porttitor in. Ultricies gravida eget eu, pharetra
              nullam. Nulla fermentum pellentesque a dictum.”{" "}
            </Words>
            <Profile>
              <Per1 src={Person2} alt="Person2"></Per1>
              <Name>Volutpat</Name>
            </Profile>
          </Review2>
          <Review3>
            <Words>
              “Pharetra tellus semper mauris ut nisl integer. Lorem pharetra sit
              mi vitae mi urna enim arcu faucibus. Consequat donec varius odio
              tristique porttitor in. Ultricies gravida eget eu, pharetra
              nullam. Nulla fermentum pellentesque a dictum.”
            </Words>
            <Profile>
              <Per1 src={Person3} alt="Person3"></Per1>
              <Name>Varius</Name>
            </Profile>
          </Review3>
        </Reviews>
        <Scroll>
          <Dot src={Circle1} alt="Dotted image"></Dot>
          <Dot src={Circle2} alt="Dotted image"></Dot>
          <Dot src={Circle1} alt="Dotted image"></Dot>
        </Scroll>
      </Wrapper>
    </>
  )
}

export default Review
const Wrapper = styled.div`
  padding-top: 7rem;
  background: black;
  color: white;
  font-weight: 100;
  font-family: "poppins";

  @media (max-width: 500px) {
    padding-top: 0rem;
  }
`
const Reviews = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    padding-top: 3rem;
  }
`
const Head = styled.div`
  display: flex;
`
const Tick = styled.img`
  margin-left: 7rem;
  height: 7rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    display: none;
  }
`
const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 19rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`
const We = styled.h1`
  font-size: 2.5rem;
  line-height: 0.8rem;

  @media (max-width: 500px) {
    font-size: 1.8rem;
    line-height: 1rem;
  }
`
const Hear = styled.h1`
  line-height: 0.8rem;
  font-size: 2.5rem;

  @media (max-width: 500px) {
    font-size: 1.8rem;
    line-height: 1rem;
  }
`
const Words = styled.p``
const Review1 = styled.div`
  height: 24rem;
  width: 16rem;
  border-radius: 1rem;
  border: 2px solid white;
  font-weight: 100;
  background: black;
  color: white;
  padding: 3rem;
  margin-top: 3rem;
  margin-left: 6rem;

  @media (max-width: 500px) {
    height: 12rem;
    width: 7rem;
    border-radius: 1rem;
    border: 2px solid whitesmoke;
    font-weight: 100;
    font-size: 0.5rem;
    background: black;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: -11rem;
    z-index: 0;
    opacity: 0.3;
  }
`
const Profile = styled.div`
  display: flex;
  padding-top: 4rem;

  @media (max-width: 500px) {
    display: flex;
    padding-top: 1rem;
  }
`
const Per1 = styled.img`
  margin-top: 1rem;

  @media (max-width: 500px) {
    margin-top: 0.5rem;
    height: 1rem;
    padding-left: 1rem;
  }
`
const Name = styled.h3`
  margin-top: 2rem;
  padding-left: 0.5rem;

  @media (max-width: 500px) {
    margin-top: 0.5rem;
    padding-top: 0rem;
  }
`
const Review2 = styled.div`
  height: 24rem;
  width: 16rem;
  border-radius: 1rem;
  border: 2px solid white;
  font-weight: 100;
  background: black;
  color: white;
  padding: 3rem;
  margin-top: 3rem;
  margin-left: 0rem;

  @media (max-width: 500px) {
    height: 14rem;
    width: 8rem;
    border-radius: 1rem;
    border: 2px solid white;
    font-weight: 100;
    background: black;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 0.6rem;
    z-index: 3;
    margin-left: -12rem;
  }
`
const Review3 = styled.div`
  height: 24rem;
  width: 16rem;
  border-radius: 1rem;
  border: 2px solid white;
  font-weight: 100;
  background: black;
  color: white;
  padding: 3rem;
  margin-top: 3rem;
  margin-right: 6rem;

  @media (max-width: 500px) {
    height: 12rem;
    width: 7rem;
    border-radius: 1rem;
    border: 2px solid white;
    font-weight: 100;
    font-size: 0.5rem;
    background: black;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    margin-right: -12rem;
    margin-left: -12rem;
    z-index: 0;
    opacity: 0.3;
  }
`

const Scroll = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`
const Dot = styled.img`
  height: 0.5rem;
  padding: 0.5rem;
`
