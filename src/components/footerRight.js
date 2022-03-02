import React from "react"
import styled from "styled-components"
function FooterRight() {
  return (
    <>
      <Wrapper>
        <Unordered>
          <List>
            <A href="#">About</A>
          </List>
          <List>
            <A href="#">Support</A>
          </List>
          <List>
            <A href="#">Privacy</A>
          </List>
        </Unordered>
      </Wrapper>
    </>
  )
}

export default FooterRight
const Wrapper = styled.div`
  padding-right: 276px;
  text-align: right;
  padding-top: 8rem;
  font-family: "poppins";

  @media (max-width: 500px) {
    padding-top: 0rem;
    padding-right: 0rem;
    height: 0.2rem;
    text-align: left;
  }
`
const Unordered = styled.ul``
const List = styled.li`
  list-style: none;
`
const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  line-height: 2.2rem;
  :hover {
    color: green;
  }
`
