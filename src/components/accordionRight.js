import React from "react"
import styled from "styled-components"
import Free from "../images/Free.svg"
import Play from "../images/Play.svg"
import Lock from "../images/Lock.svg"
// import "@fontsource/poppins" // Defaults to weight 400 with all styles included.
function AccordionRight() {
  return (
    <>
      <Wrapper>
        <Chapter1>
          <Topic>
            <div>
              <Class>1. Tellus tincidunt massa venenatis.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Frees src={Free} alt="Free"></Frees>
          </Pay>
        </Chapter1>
        <Chapter2>
          <Topic>
            <div>
              <Class>2. Eu nunc vulputate nunc.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Frees2 src={Free} alt="Free"></Frees2>
          </Pay>
        </Chapter2>

        <Chapter3>
          <Topic>
            <div>
              <Class>3. ac tortor leo.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Locks src={Lock} alt="Lock"></Locks>
          </Pay>
        </Chapter3>
        <Chapter4>
          <Topic>
            <div>
              <Class>4. Erat donec nibh elementum magna.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Lock4 src={Lock} alt="Lock"></Lock4>
          </Pay>
        </Chapter4>
        <Chapter5>
          <Topic>
            <div>
              <Class>5. Sapien varius sit sed.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Lock5 src={Lock} alt="Lock"></Lock5>
          </Pay>
        </Chapter5>
        <Chapter6>
          <Topic>
            <div>
              <Class>6.Donec consectetur mauris nunc.</Class>
              <Change>
                <Start src={Play} alt="Play button"></Start>
                <Time>42:25</Time>
              </Change>
            </div>
          </Topic>
          <Pay>
            <Lock6 src={Lock} alt="Lock"></Lock6>
          </Pay>
        </Chapter6>
      </Wrapper>
    </>
  )
}

export default AccordionRight
const Wrapper = styled.div`
  font-family: "poppins";
  margin-top: 6rem;
  position: relative;
  left: -9rem;

  @media (max-width: 500px) {
    display: none;
  }
`
const Chapter1 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  :hover {
    border: solid 1px cyan;
  }
`
const Topic = styled.div``
const Class = styled.h3`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0px 3rem 0.3rem 0.8rem;
`
const Start = styled.img`
  padding-left: 0.9rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  /* padding-top: 5px; */
  height: 0.8rem;
`
const Time = styled.h4`
  font-size: 0.9rem;
  font-weight: 300;
  color: white;
  height: 1rem;
`
const Change = styled.div`
  display: flex;
  position: relative;
  bottom: 2.6rem;
  left: 1rem;
`
const Pay = styled.div``
const Frees = styled.img`
  padding-top: 1.6rem;
  padding-left: 13.8rem;
  height: 0.7rem;
`
const Chapter2 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  margin-top: 0.1rem;
  :hover {
    border: solid 1px cyan;
  }
`

const Frees2 = styled.img`
  padding-top: 1.6rem;
  padding-left: 18.7rem;
  height: 0.7rem;
`
const Chapter3 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  margin-top: 0.1rem;
  :hover {
    border: solid 1px cyan;
  }
`

const Locks = styled.img`
  padding-top: 1.6rem;
  padding-left: 25.8rem;
  height: 0.9rem;
`
const Chapter4 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  margin-top: 0.1rem;
  :hover {
    border: solid 1px cyan;
  }
`
const Lock4 = styled.img`
  padding-top: 1.6rem;
  padding-left: 12.7rem;
  height: 0.9rem;
`
const Chapter5 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  margin-top: 0.1rem;
  :hover {
    border: solid 1px cyan;
  }
`
const Lock5 = styled.img`
  padding-top: 1.6rem;
  padding-left: 21.2rem;
  height: 0.9rem;
`

const Chapter6 = styled.div`
  background: black;
  color: white;
  height: 5rem;
  width: 40rem;
  border-radius: 6px;
  display: flex;
  margin-top: 0.1rem;
  :hover {
    border: solid 1px cyan;
  }
`

const Lock6 = styled.img`
  padding-top: 1.6rem;
  padding-left: 15rem;
  height: 0.9rem;
`
