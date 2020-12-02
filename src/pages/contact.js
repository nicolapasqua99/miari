import React from "react"
import styled from "styled-components"

import { device } from "../css/device"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Form from "../components/formcontact"

const Contacts = styled.div`
  position: relative;
  margin: 10rem 10vw 0 0;
  width: 60vw;
  height: auto;
  @media ${ device.tablet } {
    width: 80vw;
    margin: 10rem 10vw 0 0;
    & div.form{
      width: 100% !IMPORTANT;
      padding: 0 0vw 0 0vw;
      margin: 0 !IMPORTANT;
      top: 0 !IMPORTANT;
    }
  }
  @media ${ device.mobileL } {
    width: 80vw;
    margin: 10rem 10vw 0 10vw;
    & div.form{
      width: 100% !IMPORTANT;
      padding: 0 0vw 0 0vw;
      margin: 0 !IMPORTANT;
      top: 0 !IMPORTANT;
    }
  }
  & div.form{
    position: relative;
    margin-left: 12.5%;
    top: 10rem;
    width: 75%;
    height: 70vh;
    background-color: transparent;
  }
`

const ContactPage = () => (
  <Layout show={true}>
    <SEO title="Contact" />
    <Contacts>
      <div className="form">
        <Form />
      </div>
    </Contacts>
  </Layout>
)

export default ContactPage
