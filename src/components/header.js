import React from "react"
import styled from "styled-components"
import Bootcamp from "../images/Bootcamp.svg"
import course from "../images/course.svg"
import GLogo from "../images/GLogo.svg"
import Contact from "../images/Contact.svg"
import Project from "../images/Project.svg"
import Search from "../images/Search.svg"
import PoppinsRegular from "../fonts/Poppins-Regular.ttf"
import { createGlobalStyle } from "styled-components"
import Hamburger from "../images/Hamburger.svg"

function Header() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav>
          <Svg src={GLogo} alt="Genesys logo"></Svg>
          <Svg1 src={course} alt="course"></Svg1>
          <A href="#">Courses</A>
          <Svg1 src={Bootcamp} alt="Bootcamp"></Svg1>
          <A href="#">Bootcamp</A>
          <Svg1 src={Project} alt="Project"></Svg1>
          <A href="#">Projects</A>
          <Svg1 src={Search} alt="Search"></Svg1>
          <Svg1 src={Contact} alt="Contact"></Svg1>
          <Ham src={Hamburger} alt="Hamburger"></Ham>
        </Nav>
      </Wrapper>
    </>
  )
}

export default Header
const Wrapper = styled.div`
  /* height: 8vh; */
  /* position: sticky;
  top: 0; */

  @media (max-width: 500px) {
    padding-top: 2rem;
    background: black;
  }
`
const Ham = styled.img`
  display: none;

  @media (max-width: 500px) {
    display: block;
    height: 1rem;
  }
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 4fr 0fr 0.7fr 0fr 0.9fr 0fr 0.8fr 0.5fr 0.5fr;
  grid-column-gap: 0.25rem;
  padding: 1.5rem;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`

const Svg = styled.img`
  height: 2.5rem;
  padding-left: 6rem;

  @media (max-width: 500px) {
    padding-left: 1rem;
    transition: 0.5s ease-in-out;
  }
`
const Svg1 = styled.img`
  height: 1.3rem;

  @media (max-width: 500px) {
    display: none;
  }
`
const A = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  font-family: Poppins;
  font-weight: 300;
  :hover {
    color: green;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 300;
    font-display: auto;
  }
  a {
    font-family: 'Poppins';
    font-weight: 300;
  }
`
