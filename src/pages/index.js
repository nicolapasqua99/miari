import React from "react"
import SEO from "../components/seo"
import random from "random"
import seedrandom from "seedrandom"

import { Link } from "gatsby"
import Layout from "../components/layout"

import Img from 'gatsby-image'
import { graphql } from "gatsby"

import styled from 'styled-components'
import { device } from "../css/device"

const ArticleContainer = styled.div`
  width: 100%;
  margin-top: calc(5vw - 0rem);
`

const Article = styled.div`
  width: ${props => props.width || "24"}%;
  height: 100%;
  margin: ${props => props.pos || "4"}% ${props => props.pos || "4"}% 0 ${props => props.pos || "4"}%;
  cursor: pointer;
  position: relative;
  float: left;
  & a{
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 100%;
    width: 100%;
    z-index: 8;
  }
  & h4{
    position: absolute;
    bottom: 1rem;
    color: white;
    font-size: 2rem;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: 4;
    margin: 0;
    text-align: center;
    opacity: 0;
    transition: all .4s ease;
  }
  & span{
    position: absolute;
    top: calc(50% - 2rem);
    left: calc(50% - 6rem);
    width: 12rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
    z-index: 3;
    transition: all .4s ease;
  }
  & span::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 1);
    z-index: 3;
    transition: all .4s ease;
  }
  & span::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 1);
    z-index: 3;
    transition: all .4s ease;
  }
  &::after{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: all .4s ease;
  }
  &:hover::before, &:hover::after, &:hover h4, &:hover span{
    opacity: 1;
  }
  @media ${ device.tablet } {
    
  }
  @media ${ device.mobileL } {
    margin: 5vw 5% 0 5%;
    width: 90%;

  }
`

export const query = graphql`
  query {
    allArticles(limit: 10) {
      nodes {
        text
        title
        name
        link
        photos {
          imgSrc {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

var width

function IndexPage({ data}) {
  
  var rng = seedrandom();
  console.log(rng());

  const Articles = data.allArticles.nodes.map((node, index) =>
    <Article onLoad={width=Math.floor(rng() * (48 - 24) + 24)} key={index} className="container-wrapper"  pos={(48 - width)/2} width={width}>
      <span></span>
      <h4>{node.title + " - " + node.name}</h4>
      <Img fluid={node.photos[0].imgSrc.childImageSharp.fluid} alt=""/>
      <Link activeClassName="active" to={"/article/" + node.link} />
    </Article>
  );
  
  return (
    <Layout show={true}>
      <SEO title="Home" />
      <ArticleContainer>
        {Articles}
      </ArticleContainer>
    </Layout>
  )
}

export default IndexPage
