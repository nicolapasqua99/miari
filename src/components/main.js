import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { device } from "../css/device"

const StyledMain = styled.main`
  width: 60vw;
  margin: 0 20vw 0 20vw;
  @media ${ device.tablet } {
    margin: 10rem 10vw 0 10vw;
    width: 80vw;
  }
  @media ${ device.mobileL } {
    margin: 0;
    width: 100vw;
    position: relative;
  }
`

const Main = ({ children }) => (
  <StyledMain>
    { children }
  </StyledMain>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: ``,
}

export default Main
