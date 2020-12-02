import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

import { device } from "../css/device"
import LogoAbout from "../assets/logoabout.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledAbout = styled.div`
  position: relative;
  margin: calc(5vw - 0rem) 0 0 0;
  width: 60vw;
  height: calc(100vh - 10vw);
  display: flex;
  @media ${ device.tablet } {
    width: 80vw;
    height: calc(100vh - 20vw);
  }
  @media ${ device.mobileL } {
    width: 100vw;
    height: auto;
    display: block;
  }
`

const StyledManifest = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 30vw;
  height: 100%;
  & svg{
    width: auto;
    height: 100%;
  }
  & div.containerarticle{
    position: absolute;
    top: 5vw;
    left: 10%;
    width: 30%;
    height: calc(100% - 10vw);
  }
  & article{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & p{
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
  }
  & p.single{
    margin-left: 4rem;
  }
  & p.double{
    margin-left: 8rem;
  }
  & i{
    font-style: italic;
  }
  @media ${ device.tablet } {
    width: 40vw;
    display: block;
    & svg{
      width: 40vw;
      height: auto;
      margin-top: 10rem;
    }
    & article{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;     
      margin-top: 12rem;
    }
    & article p{
      font-size: 1.5rem;
    }
  }
  @media ${ device.mobileL } {
    width: 100vw;
    height: auto;
    & svg{
      width: 80vw;
      height: auto;
      margin: 2rem 10vw 0 10vw;
    }
    & article{
      width: 76vw;
      height: auto;
      margin: 8rem 12vw 0 12vw;
    }
    & article p{
      font-size: 1.5rem;
    }
  }
`

const StyledTeam = styled.div`
  width: 30vw;
  height: 80%;
  position: relative;
  margin-top: 5%;
  & div{
    width: 10vw;
    height: 10vw;
    margin: 0;
    position: absolute;
  }
  & div.container:nth-of-type(1){
    top: 0;
    left: 8vw;
  }
  & div.container:nth-of-type(2){
    top: 6vw;
    left: 20vw;
  }
  & div.container:nth-of-type(3){
    top: 12vw;
    left: 8vw;
  }
  & div.container:nth-of-type(4){
    top: 18vw;
    left: 20vw;
  }
  & div.container:nth-of-type(5){
    top: 24vw;
    left: 8vw;
  }
  & div h3{
    position: absolute;
    bottom: 1.25rem;
    left: 75%;
    padding: 0;
    margin: 0;
    font-size: 3rem;
    height: 3rem;
    padding: 1rem;
    width: auto;
    transition: left 1s ease, opacity .3s ease 0s;
    opacity: 0;
    color: black;
    z-index: 3;
  }
  & div:hover h3{
    left: 90%;
    opacity: 1;
    transition: left 1s ease, opacity .7s ease .3s;
  }
  & div.container:nth-of-type(1) h3, & div.container:nth-of-type(3) h3, & div.container:nth-of-type(5) h3{
    left: 4vw;
  }
  & div.container:nth-of-type(2) h3, & div.container:nth-of-type(4) h3{
    left: 4vw;
  }
  & div.container:nth-of-type(1):hover h3, & div.container:nth-of-type(3):hover h3, & div.container:nth-of-type(5):hover h3{
    left: -9vw;
  }
  & div.container:nth-of-type(2):hover h3, & div.container:nth-of-type(4):hover h3{
    left: 10vw;
  }
  & div div.gatsby-image-wrapper{
    height: 100%;
    width: 100%;
    margin:  0;
    transition: all 1s ease;
  }
  & div div.gatsby-image-wrapper:nth-of-type(2){
    opacity: 1;
  }
  & div div.gatsby-image-wrapper:nth-of-type(2){
    opacity: 0;
    transform: translateY(-100%);
  }
  & div:hover div.gatsby-image-wrapper:nth-of-type(1){
    opacity: 0; 
  }
  & div:hover div.gatsby-image-wrapper:nth-of-type(2){
    opacity: 1; 
  }
  @media ${ device.tablet } {
    width: 40vw;
    & div{
      width: 20vw;
      height: 20vw;
      margin: 6% 10vw 0rem 10vw;
    }
  }
  @media ${ device.mobileL } {
    width: 100vw;
    height: auto;
    & div{
      width: 60vw;
      height: 60vw;
      margin: 6% 20vw 3% 20vw;
    }
    & div.container:nth-of-type(1){
      top: 0 !IMPORTANT;
      left: 0 !IMPORTANT;
    }
    & div.container:nth-of-type(2){
      top: 80vw !IMPORTANT;
      left: 0 !IMPORTANT;
    }
    & div.container:nth-of-type(3){
      top: 160vw !IMPORTANT;
      left: 0 !IMPORTANT;
    }
    & div.container:nth-of-type(4){
      top: 240vw !IMPORTANT;
      left: 0 !IMPORTANT;
    }
    & div.container:nth-of-type(5){
      top: 320vw !IMPORTANT;
      left: 0 !IMPORTANT;
    }
    & div h3{
      position: absolute;
      left: -2vw !IMPORTANT;
      bottom: -5rem !IMPORTANT;
      padding: 0;
      margin: 0;
      font-size: 3rem;
      height: 3rem;
      padding: 1rem;
      width: auto;
      transition: left 1s ease, opacity .3s ease 0s;
      opacity: 0;
      color: black;
      z-index: 3;
    }
    & div:hover h3{
      opacity: 1 !IMPORTANT;
      transition: left 1s ease, opacity .7s ease .3s;
    }
    & div.container:nth-of-type(1) h3, & div.container:nth-of-type(3) h3, & div.container:nth-of-type(5) h3{
    }
    & div.container:nth-of-type(2) h3, & div.container:nth-of-type(4) h3{
    }
    & div.container:nth-of-type(1):hover h3, & div.container:nth-of-type(3):hover h3, & div.container:nth-of-type(5):hover h3{
    }
    & div.container:nth-of-type(2):hover h3, & div.container:nth-of-type(4):hover h3{
    }
  }
`

export const query = graphql`
  query {
    davidedraw: file(relativePath: { eq: "davidead.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    davidereal: file(relativePath: { eq: "davidear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    giorgiadraw: file(relativePath: { eq: "giorgiaad.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    giorgiareal: file(relativePath: { eq: "giorgiaar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nicoladraw: file(relativePath: { eq: "nicolaad.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nicolareal: file(relativePath: { eq: "nicolaar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const articletext = "<p>Miari è una galassia che non esiste ma che c’è.</p><p>Non è un luogo:</p><p> è una concezione,</p><p><i>una nuova visione della fotografia.</i></p><p></p><p>La fotografia è documento:</p><p><i>rendetela vostra per renderla arte.</i></p><p>Traete ispirazione dalla realtà,</p><p>ma <i>create</i> qualcosa di</p><p class='single'>Fantastico</p><p class='single'>Visionario</p><p class='single'>Innovativo</p><p></p><p><i>Producete</i></p><p class='single'>sensazioni</p><p class='single'>emozioni</p><p></p><p><i>Raccontate</i></p><p class='single'>le storie del mondo</p><p><i>Plasmate</i></p><p class='single'>il mondo delle storie</p><p class='double'>con i vostri occhi</p><p class='double'>con le vostre mani</p><p class='double'>con il vostro corpo</p><p class='double'>con la vostra mente</p><p class='double'>con le vostre paure</p><p class='double'>con il vostro coraggio</p><p class='double'>con tutto quello che siete</p><p class='double'>con quello che vorreste essere</p><p>Concepite una storia presente</p><p>Concepite una storia universale</p><p><i>Concepite una storia.</i></p><p><i>Ricordate</i></p><p class='single'>il mezzo è solo un mezzo</p><p>Noi siamo praticamente liberi.</p><p>Noi siamo tecnicamente liberi.</p><p><i>Noi siamo liberi.</i></p>";

const AboutPage = ( props ) => (
  <Layout show={true}>
    <SEO title="About" />
    <StyledAbout>
      <StyledManifest>
        <LogoAbout />
          <div className="containerarticle">
            <article id="manifest" dangerouslySetInnerHTML={{ __html: articletext }}>
            </article>
          </div>
      </StyledManifest>
      <StyledTeam>
        <div className="container">
          <Img fluid={props.data.davidedraw.childImageSharp.fluid} alt="" />
          <Img fluid={props.data.davidereal.childImageSharp.fluid} alt="" />
          <h3>Ruolo/Nome</h3>
        </div>
        <div className="container">
          <Img fluid={props.data.giorgiadraw.childImageSharp.fluid} alt="" />
          <Img fluid={props.data.giorgiareal.childImageSharp.fluid} alt="" />
          <h3>Ruolo/Nome2</h3>
        </div>
        <div className="container">
          <Img fluid={props.data.nicoladraw.childImageSharp.fluid} alt="" />
          <Img fluid={props.data.nicolareal.childImageSharp.fluid} alt="" />
          <h3>Ruolo/Nome3</h3>
        </div>
        <div className="container">
          <Img fluid={props.data.davidedraw.childImageSharp.fluid} alt="" />
          <Img fluid={props.data.davidedraw.childImageSharp.fluid} alt="" />
          <h3>Ruolo/Nome</h3>
        </div>
        <div className="container">
          <Img fluid={props.data.davidedraw.childImageSharp.fluid} alt="" />
          <Img fluid={props.data.davidedraw.childImageSharp.fluid} alt="" />
          <h3>Ruolo/Nome</h3>
        </div>
      </StyledTeam>
    </StyledAbout>
    
  </Layout>
)

export default AboutPage