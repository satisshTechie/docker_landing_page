import React from "react"
import styled from "styled-components"
import GLogo from "../images/GLogo.svg"
import Twitter from "../images/Twitter.svg"
import Insta from "../images/Insta.svg"
import Linkedin from "../images/Linkedin.svg"
import Facebook from "../images/Facebook.svg"
function FooterLeft() {
  return (
    <>
      <Wrapper>
        <Logo src={GLogo} alt="Genesys "></Logo>
        <Lorem>
          Donec feugiat morbi sodales ac elit tellus ac <br />
          amet.Donec feugiat morbi sodales ac elit.
        </Lorem>
        <Icons>
          <A href="#">
            <Social src={Linkedin} alt={Linkedin}></Social>
          </A>
          <A href="#">
            <Social src={Facebook} alt={Facebook}></Social>
          </A>
          <A href="#">
            <Social src={Insta} alt={Insta}></Social>
          </A>
          <A href="#">
            <Social src={Twitter} alt={Twitter}></Social>
          </A>
        </Icons>
      </Wrapper>
    </>
  )
}

export default FooterLeft
const Wrapper = styled.div`
  color: white;
  padding-bottom: 2rem;

  @media (max-width: 500px) {
    /* padding-left: 1rem; */
  }
`
const Logo = styled.img`
  padding-left: 250px;
  padding-top: 3rem;

  @media (max-width: 500px) {
    padding-left: 2rem;
    padding-top: 1rem;
    height: 2.2rem;
  }
`
const Lorem = styled.p`
  padding-left: 250px;
  color: grey;
  font-family: "poppins";

  @media (max-width: 500px) {
    padding-left: 2rem;
  }
`
const A = styled.a``
const Social = styled.img`
  height: 1.5rem;

  padding-top: 1.5rem;
  padding-left: 1.5rem;
  :hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;

    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }

  @media (max-width: 500px) {
    padding-left: 1rem;
  }
`
const Icons = styled.div`
  padding-left: 234px;

  @media (max-width: 500px) {
    padding-left: 1.4rem;
  }
`
