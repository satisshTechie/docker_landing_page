import React from "react"
import FooterRight from "./footerRight"
import FooterLeft from "./footerLeft"
import styled from "styled-components"
// import Button from './button'

function Footer() {
  return (
    <>
      <Wrapper>
        <FooterLeft />
        <FooterRight />
      </Wrapper>
    </>
  )
}

export default Footer
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  background: #0a0d1d;

  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
`
