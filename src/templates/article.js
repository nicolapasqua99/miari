import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from 'gatsby-image'
import X from "../assets/letter-x.svg"

const FullArticle = styled.div`
    position: relative;
    margin: 0 0 0 30vw;
    width: 50vw;
    height: 100vh;
    display: flex;
    transform: translate(-10vw, 0rem);
    overflow: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
`

const ArticleText = styled.div`
    width: 30vw;
    height: 100vh;
    position: fixed;
    top: 15vw;
    left: 10vw;
    & h1{
      width: 100%;
      font-size: 4rem;
      line-height: 4rem;
      font-family: 'Montserrat', sans-serif;
    }
    & h2{
      width: 100%;
      font-size: 3rem;
      line-height: 3rem;
      font-family: 'Montserrat', sans-serif;
    }
    & p{
      width: 100%;
      font-size: 1.75rem;
      line-height: 2.5rem;
    }
    & div.text{
      width: 100%;
    }
`

const ArticlePhotos = styled.div`
    width: 50vw;
    right: 0vw;
    top: 0;
    margin: 0;
    height: auto;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    & div.container-wrapper{
      position: relative;
      width: 80%;
      display: flex;
      align-items: center;
      margin: 5vh 10% 5vh 10%;
    }
    & div.gatsby-image-wrapper{
      position: relative;
      width: 70%;
      margin-left: 15%;
      margin-top: 5vh;
      margin-bottom: 5vh;
      height: auto;
    }
    & div.gatsby-image-wrapper picture img{
      width: auto;
      margin: auto;
    }
`

const CloseArticle = styled.div`
    position: fixed;
    top: 0;
    right: 5vw;
    width: 5rem;
    height: 5rem;
    margin: 5rem 0; 
    border: 2px solid black;
    & span{
      position: absolute;
      top: 2rem;
      width: 1rem;
      height: 1rem;
      margin: 0;
      border-radius: 1rem; 
      background-color: black;
      transition: all .3s ease .3s;
    }
    & span:nth-of-type(1){
      left: 1rem;
    }
    & span:nth-of-type(2){
      left: 3rem;
    }
    & svg{
      position: absolute;
      top: 2.5rem;      
      left: 2.5rem;
      height: 0rem;
      width: 0rem;
      transition: all .3s ease;
    }
    &:hover span:nth-of-type(1), &:hover span:nth-of-type(2){
      top: 2.5rem;
      left: 2.5rem;
      width: 0rem;
      height: 0rem;
      transition: all .3s ease;
    }
    &:hover svg{
      position: absolute;
      top: 1rem;
      left: 0rem;
      text-align: center;
      height: 3rem;
      width: 5rem;
      transition: all .3s ease .3s;
    }
    & a{
      position: absolute;
      top: 0rem;
      left: 0rem;
      height: 5rem;
      width: 5rem;
      z-index: 8;
    }
`


export const query = graphql`
  query($photolist: [String]){
    photos: allPhotos(filter: {id: {in: $photolist}}){
      nodes{
        imgSrc{
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      pageInfo {
        itemCount
      }
    }
  }  
`


export default function Article({ pageContext , data }) {

  //console.log(pageContext);
  console.log(data.photos.pageInfo.itemCount*100);
  
  const { article } = pageContext;

  const Images = data.photos.nodes.map((node, index) =>
    <div className="container-wrapper">
      <Img key={index} fluid={node.imgSrc.childImageSharp.fluid} alt="" />
    </div>
  );

  

  return (
    <Layout show={false}>
      <CloseArticle>
        <Link activeClassName="active" to="/" />
        <span></span>
        <span></span>
        <X />
      </CloseArticle>
      <ArticleText>
        <h1>{article.title}</h1>
        <h2>{article.name}</h2>
        <div className="text" dangerouslySetInnerHTML={{ __html: article.text }}></div>
      </ArticleText>
      <FullArticle height={data.photos.pageInfo.itemCount*100}>
          <ArticlePhotos>
            {Images}
          </ArticlePhotos>
      </FullArticle>
    </Layout>
  )
}

