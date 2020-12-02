import React, { useEffect } from "react"
import styled from 'styled-components'
import Instagram from "../assets/instagram.svg";
import Email from "../assets/email.svg";

//import { device } from "../css/device"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SentBody = styled.div`
  width: 80%;
  margin: 0 10% 0 10%;
  & h1, & h2{
    width: 100%;
    text-align: center;
  }
  & svg{
    height: 30px;
  }
`
function SentForm( { location } ){
  const[previous, setPrevious] = React.useState('');

  useEffect(() => {
    if (window === 'undefined') {
      return;
    }
    setPrevious( location.state );
  }, [ location.state ]);

  return (
    <Layout>
      <SEO title="SentForm" />
      <SentBody>
        <h1>
          { previous.destination }
        </h1>
        <h2>
          Ti daremo una risposta il prima possibile!
        </h2>
        <Instagram />
        <Email />
      </SentBody>
    </Layout>
  )
}

export default SentForm