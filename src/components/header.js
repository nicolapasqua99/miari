import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import InstagramLogo from "../assets/instagram-circle.svg"
import { device } from "../css/device"

const StyledHeader = styled.header`
  display: ${props => props.show ? "flex" : "none"};
  flex-flow: row-reverse wrap;
  justify-content: flex-start;
  height: 10rem;
  width: 60vw;
  margin: 0 20vw 0rem 20vw;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 9;
  & a{
    font-family: 'Montserrat', sans-serif;
    color: gray;
    font-weight: 400;
    height: 2rem;
    width: auto;
    margin: 4rem 0 4rem 6rem;
    text-align: center;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    &.active{
      color: black;
      font-weight: 600;
    }
  }
  @media ${ device.tablet } {
    justify-content: space-around;
    margin: 0 !IMPORTANT;
    width: 100% !IMPORTANT;
    & a{
      margin: 4rem 0 4rem 0rem;
    }
  }
  @media ${ device.mobileL } {
    flex-direction: column-reverse;
    height: 20rem;
    position: relative;
    & a{
      height: 2rem !IMPORTANT;
      margin: 1.5rem 0 1.5rem 0 !IMPORTANT;
      font-size: 2rem !IMPORTANT;
    }
  }
`
const StyledLogo = styled.div`
  display: ${props => props.show ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  margin: 5vw 5vw 0 5vw;
  height: auto;
  width: 8vw;  
  & svg{
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;  
  }
  @media ${ device.tablet } {
    display: none;
  }
  @media ${ device.mobileL } {
    flex-direction: column-reverse;
    height: 20rem;
    & a{
      height: 2rem !IMPORTANT;
      margin: 1.5rem 0 1.5rem 0 !IMPORTANT;
      font-size: 2rem !IMPORTANT;
    }
  }
`


const StyledinstagramLink = styled.div`
  position: fixed;
  top: calc(50vh - 4rem);
  right: 0;
  margin: 0 2vw 0 0;
  height: 6rem;
  width: 6rem;  
  & svg{
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 4rem;
    width: 4rem;  
  }
  & a{
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 4rem;
    width: 4rem; 
    z-index: 4;
  }
  @media ${ device.tablet } {
  }
  @media ${ device.mobileL } {
    display: none;
  }
`

const Header = ({ show }) => (
  <>
    <StyledLogo show={show}><Logo /></StyledLogo>
    <StyledHeader show={show}>
      <Link activeClassName="active" to="/submission/">Submission</Link>
      <Link activeClassName="active" to="/contact/">Contact</Link>
      <Link activeClassName="active" to="/about/">About</Link>
      <Link activeClassName="active" to="/">Home</Link>
    </StyledHeader>
    <StyledinstagramLink><Link to="https://www.instagram.com/miari_mag/" target="_blank"></Link><InstagramLogo /></StyledinstagramLink>
  </>
)

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header
