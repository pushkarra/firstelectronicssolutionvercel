import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
// import ImageSlider from './ImageSlider';
// import './ImageSlider.css';
import SliderImage from "./SliderImage";
import { SliderData } from "./SliderData";

const HeroSection = ({ myData }) => {
  const { name } = myData;


  return (
    <Wrapper>
      
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
          <div className="myself">
            <h1>
              <span>We</span>'re<span> {name} </span>
            </h1>
            </div>
            
            <br></br>
            <br></br>
            <br></br>
            
            <div className="myself2">
            <p9>where innovation meets illumination! We're your one-stop shop for cutting-edge lighting tech that makes your space shine while saving energy. Discover our wide range of top-notch LED products, from stylish home lighting to industrial-grade solutions. At First Electronic Solutions, we're dedicated to lighting up your space with efficiency and elegance. Join us in embracing a brighter & more sustainable future.
            </p9>
            </div>
            <div className="myself3">
              <NavLink to="./products">
                <Button>explore now</Button>
            </NavLink>
            </div>
          </div>
          
            <figure>
              <NavLink to="/products">
              <SliderImage slides={SliderData} autoPlay={true} />;
              </NavLink>
            </figure>
        
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;
  background-color: #FFE2C9;


  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #8b0000;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: "#8b0000";
    }
  }

  
  

  img {
    min-width: 10rem;
    height: 10rem;
  }

   .hero-section-data {
    p {
      margin: 2rem 0;
    }


    @media screen and (max-width : 1000px){

      .myself{
         background-color: #FFC18A;
         border-radius: 10px ;
         border: 2px solid #8b0000;
        
       }
 
       h1 {
         text-transform: capitalize;
         font-weight: bold;
         color: white;
         text-align: center;
         font-size: 30px;
         padding: 14px;
         background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         animation: shine 4s infinite linear;
       }
 
       @keyframes shine {
         0% {
           background-position: 0;
         }
         60% {
           background-position: 600px;
         }
         100% {
           background-position: 600px;
         }
       }

       
       
    }

    @media screen and (max-width : 600px){

     .myself{
        background-color: #FFC18A;
        border-radius: 10px ;
        border: 2px solid #8b0000;
        
      }

      h1 {
        text-transform: capitalize;
        font-weight: bold;
        color: white;
        text-align: center;
        font-size: 25px;
        padding: 14px;
        background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 4s infinite linear;
      }

      @keyframes shine {
        0% {
          background-position: 0;
        }
        60% {
          background-position: 600px;
        }
        100% {
          background-position: 600px;
        }
      }

      
      
    }

    @media screen and (min-width : 1001px){

      .myself{
        padding: 0;
        margin: 0!important;
        background-color: #8b0000;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 10vh;
        border-radius: 20px ;
        border: 3px solid white;
      }

      h1{
        //  color: #262525;
         color: white;
         font-size: 30px;
         font-weight: bold;
         font-family: monospace;
         letter-spacing: 1px;
         cursor: pointer;
         content: center;
         color: #fff;
         text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
         margin-right: 5px;
         margin-left: 30px;
         transition: 0.5s ease-out;
       }
       
      //  h1 span {
      //    transition: 0.5s ease-out;
      //  }
      //  h1:hover span:nth-child(1) {
      //    margin-right: 5px;
      //  }
      //  h1:hover span:nth-child(1):after {
      //   //  content: "'";
      //  }
      //  h1:hover span:nth-child(2) {
      //    margin-left: 30px;
      //  }
      //  h1:hover span {
      //    color: #fff;
      //    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
      //  }

    }

       

    .intro-data {
      margin-bottom: 0;
    }

    @media screen and (max-width : 1001px){

      .myself2{
        box-sizing: border-box;
        padding: 20px;
        margin: 20px;
        background-color:  white;
        display: inline-flex;
        align-items: flex-start;
        justify-content: start;
        border-radius: 15px 40px 30px; 
        border: 3px solid #8b0000;

      }
      p9{
        color: hsl(0, 0%, 28%);
        font-size: 1.7rem;
        font-weight: bold!important;
        // font-family: monospace;
        // letter-spacing: 0.4px;
        // text-transform: capitalize;
        // text-align: justify;
        // text-justify: inter-word;
        word-spacing: 1px;
        line-height: 1.7;
        text-transform: capitalize;
        text-align: justify;
        text-justify: inter-word;
        // padding: 44px;
        
      }
    }

    


    @media screen and (min-width : 1000px){

      .myself2{
        
        // background-color: white!important;
        background-color:   #f0ffff;
        min-height: 30vh;
        display: inline-flex;
        align-items: flex-start;
        justify-content: start;
        border-radius: 15px 50px 30px; 
        border: 3px solid #8b0000;
        
      }
  
      p9{
        color: hsl(0, 0%, 28%);
        font-size: 19px!important;
        line-height: 1.7;
        font-weight: bold!important;
        word-spacing: 1px;
        text-transform: capitalize;
        text-align: justify;
        text-justify: inter-word;
        padding: 44px;
      }

    }

    
    @media screen and (min-width : 1237px){

      .myself3{
        margin: 0;
        padding: 0;
        position: relative;
        top: 10%;
        left: 22rem;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    @media screen and (min-width : 1073px){

      .myself3{
        margin: 0;
        padding: 0;
        position: relative;
        // top: 89%;
        // left: 17%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

    }

    @media screen and (max-width : 1073px){
      .myself3{
        margin: 0;
        padding: 0;
        position: relative;
        top: 4%;
        left:32%;
      }

    }

    @media screen and (max-width : 400px){
      .myself3{
        margin: 0;
        padding: 0;
        position: relative;
        top: 4%;
        left:27%;
      }

    }

 

    

    
  

  
`;

export default HeroSection;