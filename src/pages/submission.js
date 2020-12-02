import React from "react"
import styled from "styled-components"

import { device } from "../css/device"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Form from "../components/formsubmission"

const StyledIntro = styled.h1`
  position: fixed;
  margin: 10rem 0 0 0;
  width: 60vw;
  height: 4rem;
  font-size: 3.3rem;
  font-weight: 200;
  padding: 4.5rem 0 3rem 0;
  background-color: white;
  z-index: 8;
  @media ${ device.tablet } {
    width: 80vw;
    transform: translateY(-15rem);
    margin: 0;
    padding-bottom: 5rem;
  }
  @media ${ device.mobileL } {
    width: 98vw;
    transform: none;
    margin: 5rem 1vw 0 1vw;
    padding: 0rem;
    position: relative;
    font-size: 2.5rem;
    text-align: center;
  }
`

const StyledGuidelines = styled.div`
  position: fixed;
  margin: 21.5rem 0 0 0;
  width: 25vw;
  height: auto;
  & h1{
    font-size: 4rem;
  }
  & ul{
    font-size: 2rem;
  }
  @media ${ device.tablet } {
    width: 80vw;
    transform: translateY(-15rem);
    margin: 0;
    padding-bottom: 5rem;
    position: relative;
    right: auto;
    margin: 21.5rem 10vw 0 0vw;
    & h1{
      font-size: 3rem;
    }
  }
  @media ${ device.mobileL } {
    margin: 21.5rem 10vw 0 10vw;
  }
`

const Submission = styled.div`
  position: absolute;
  right: 16.6vw;
  margin: 21.5rem 0 0 10rem;
  width: 40vw;
  height: auto;
  @media ${ device.tablet } {
    position: relative;
    right: auto;
    margin: 21.5rem 10vw 0 10vw;
    width: 60vw;
    & div.form{
      width: 100% !IMPORTANT;
      padding: 0 0vw 0 0vw;
      margin: 0 !IMPORTANT;
      top: 0 !IMPORTANT;
      height: fit-content !IMPORTANT;
    }
    & form{
      display: contents;
      height: auto;
    }
  }
  @media ${ device.mobileL } {
    position: relative;
    right: auto;
    margin: 2rem 10vw 0 10vw;
    width: 80vw;
    & div.form{
      width: 100% !IMPORTANT;
      padding: 0 0vw 0 0vw;
      margin: 0 !IMPORTANT;
      top: 0 !IMPORTANT;
    }
  }
  & div.form{
    position: relative;
    margin-left: 0;
    width: 100%;
    height: 70vh;
    background-color: transparent;
  }
`

const SubmissionPage = () => (
  <Layout  show={true}>
    <SEO title="Submission" />
    <StyledIntro>
      Inviateci il vostro progetto per contribuire a costruire con noi una nuova visione della fotografia.
    </StyledIntro>
    <Submission>
      <div className="form">
        <Form />
      </div>
    </Submission>
    <StyledGuidelines>
      <h1>Il materiale inviato deve avere i seguenti requisiti:</h1>
      <ul>
        <li>Accettiamo esclusivamente progetti finiti</li>
        <li>Massimo 20 immagini</li>
        <li>File jpg 2000px lato lungo</li>
        <li>Rinominare e ordinare i file nel seguente modo:nome_nomeprogetto_submission_1(2-3-4…).jpg</li>
      </ul>
    </StyledGuidelines>
  </Layout>
)

export default SubmissionPage
