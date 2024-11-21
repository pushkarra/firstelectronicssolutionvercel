// import React from 'react';
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";
// // import ImageSlider from './ImageSlider';
// // import './ImageSlider.css';
// import SliderImage from "./SliderImage";
// import { SliderData } from "./SliderData";

// const HeroSection = ({ myData }) => {
//   const { name } = myData;


//   return (
//     <Wrapper>
      
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-data">
//           <div className="myself">
//             <h1>
//               <span>We</span>'re<span> {name} </span>
//             </h1>
//             </div>
            
//             <br></br>
//             <br></br>
//             <br></br>
            
//             <div className="myself2">
//             <p9>where innovation meets illumination! We're your one-stop shop for cutting-edge lighting tech that makes your space shine while saving energy. Discover our wide range of top-notch LED products, from stylish home lighting to industrial-grade solutions. At First Electronic Solutions, we're dedicated to lighting up your space with efficiency and elegance. Join us in embracing a brighter & more sustainable future.
//             </p9>
//             </div>
//             <div className="myself3">
//               <NavLink to="./products">
//                 <Button>explore now</Button>
//             </NavLink>
//             </div>
//           </div>
          
//             <figure>
//               <NavLink to="/products">
//               <SliderImage slides={SliderData} autoPlay={true} />;
//               </NavLink>
//             </figure>
        
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 7rem 0;
//   background-color: #FFE2C9;


//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 60%;
//       height: 80%;
//       background-color: #8b0000;
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//     }
//   }
//   .img-style {
//     width: 100%;
//     height: auto;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//     }

//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       /* bottom: 10%; */
//       background-color: "#8b0000";
//     }
//   }

  
  

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//    .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }


//     @media screen and (max-width : 1000px){

//       .myself{
//          background-color: #FFC18A;
//          border-radius: 10px ;
//          border: 2px solid #8b0000;
        
//        }
 
//        h1 {
//          text-transform: capitalize;
//          font-weight: bold;
//          color: white;
//          text-align: center;
//          font-size: 30px;
//          padding: 14px;
//          background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
//          -webkit-background-clip: text;
//          -webkit-text-fill-color: transparent;
//          animation: shine 4s infinite linear;
//        }
 
//        @keyframes shine {
//          0% {
//            background-position: 0;
//          }
//          60% {
//            background-position: 600px;
//          }
//          100% {
//            background-position: 600px;
//          }
//        }

       
       
//     }

//     @media screen and (max-width : 600px){

//      .myself{
//         background-color: #FFC18A;
//         border-radius: 10px ;
//         border: 2px solid #8b0000;
        
//       }

//       h1 {
//         text-transform: capitalize;
//         font-weight: bold;
//         color: white;
//         text-align: center;
//         font-size: 25px;
//         padding: 14px;
//         background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         animation: shine 4s infinite linear;
//       }

//       @keyframes shine {
//         0% {
//           background-position: 0;
//         }
//         60% {
//           background-position: 600px;
//         }
//         100% {
//           background-position: 600px;
//         }
//       }

      
      
//     }

//     @media screen and (min-width : 1001px){

//       .myself{
//         padding: 0;
//         margin: 0!important;
//         background-color: #8b0000;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         min-height: 10vh;
//         border-radius: 20px ;
//         border: 3px solid white;
//       }

//       h1{
//         //  color: #262525;
//          color: white;
//          font-size: 30px;
//          font-weight: bold;
//          font-family: monospace;
//          letter-spacing: 1px;
//          cursor: pointer;
//          content: center;
//         //  color: #fff;
//         //  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
//         //  margin-right: 5px;
//         //  margin-left: 30px;
//         //  transition: 0.5s ease-out;
//        }
       
//        h1 span {
//          transition: 0.5s ease-out;
//        }
//        h1:hover span:nth-child(1) {
//          margin-right: 5px;
//        }
//        h1:hover span:nth-child(1):after {
//         //  content: "'";
//        }
//        h1:hover span:nth-child(2) {
//          margin-left: 30px;
//        }
//        h1:hover span {
//         //  color: #fff;
//         color: #231A1A;
//         text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
        
//        }

//     }

       

//     .intro-data {
//       margin-bottom: 0;
//     }

//     @media screen and (max-width : 1001px){

//       .myself2{
//         box-sizing: border-box;
//         padding: 20px;
//         margin: 20px;
//         background-color:  white;
//         display: inline-flex;
//         align-items: flex-start;
//         justify-content: start;
//         border-radius: 15px 40px 30px; 
//         border: 3px solid #8b0000;

//       }
//       p9{
//         color: hsl(0, 0%, 28%);
//         font-size: 1.7rem;
//         font-weight: bold!important;
//         // font-family: monospace;
//         // letter-spacing: 0.4px;
//         // text-transform: capitalize;
//         // text-align: justify;
//         // text-justify: inter-word;
//         word-spacing: 1px;
//         line-height: 1.7;
//         text-transform: capitalize;
//         text-align: justify;
//         text-justify: inter-word;
//         // padding: 44px;
        
//       }
//     }

    


//     @media screen and (min-width : 1000px){

//       .myself2{
        
//         // background-color: white!important;
//         background-color:   #f0ffff;
//         min-height: 30vh;
//         display: inline-flex;
//         align-items: flex-start;
//         justify-content: start;
//         border-radius: 15px 50px 30px; 
//         border: 3px solid #8b0000;
        
//       }
  
//       p9{
//         color: hsl(0, 0%, 28%);
//         font-size: 19px!important;
//         line-height: 1.7;
//         font-weight: bold!important;
//         word-spacing: 1px;
//         text-transform: capitalize;
//         text-align: justify;
//         text-justify: inter-word;
//         padding: 44px;
//       }

//     }

    
//     @media screen and (min-width : 1237px){

//       .myself3{
//         margin: 0;
//         padding: 0;
//         position: relative;
//         top: 10%;
//         left: 22rem;
//         -ms-transform: translateY(-50%);
//         transform: translateY(-50%);
//       }
//     }

//     @media screen and (min-width : 1073px){

//       .myself3{
//         margin: 0;
//         padding: 0;
//         position: relative;
//         // top: 89%;
//         // left: 17%;
//         -ms-transform: translateY(-50%);
//         transform: translateY(-50%);
//       }

//     }

//     @media screen and (max-width : 1073px){
//       .myself3{
//         margin: 0;
//         padding: 0;
//         position: relative;
//         top: 4%;
//         left:32%;
//       }

//     }

//     @media screen and (max-width : 400px){
//       .myself3{
//         margin: 0;
//         padding: 0;
//         position: relative;
//         top: 4%;
//         left:27%;
//       }

//     }

 

    

    
  

  
// `;

// export default HeroSection;


// import React from 'react';
// import { NavLink } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import SliderImage from "./SliderImage";
// import { SliderData } from "./SliderData";

// const glowAnimation = keyframes`
//   0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
//   50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(139,0,0,0.6); }
// `;

// const Wrapper = styled.section`
//   padding: 6rem 0;
//   background: linear-gradient(135deg, #f0ffff 0%, #e6f2f2 100%);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: 
//       radial-gradient(circle at center, rgba(139,0,0,0.05) 0%, transparent 70%),
//       linear-gradient(45deg, transparent 40%, rgba(139,0,0,0.1) 50%, transparent 60%);
//     z-index: 1;
//   }

//   .container {
//     position: relative;
//     z-index: 2;
//   }

//   .grid-two-column {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 4rem;

//     @media (max-width: 1000px) {
//       grid-template-columns: 1fr;
//       gap: 2rem;
//     }
//   }

//   .hero-section-data {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const PremiumHeading = styled.div`
//   background: linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,255,255,0.7) 100%);
//   border: 2px solid rgba(139,0,0,0.2);
//   border-radius: 15px;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   box-shadow: 
//     0 15px 30px rgba(139,0,0,0.1),
//     inset 0 0 20px rgba(139,0,0,0.05);
//   backdrop-filter: blur(10px);
//   transition: all 0.4s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 
//       0 20px 40px rgba(139,0,0,0.15),
//       inset 0 0 30px rgba(139,0,0,0.1);
//   }

//   h1 {
//     font-size: 3.5rem;
//     text-align: center;
//     background: linear-gradient(to right, #8b0000, #ff4500, #8b0000);
//     background-size: 200% auto;
//     color: transparent;
//     -webkit-background-clip: text;
//     background-clip: text;
//     animation: ${glowAnimation} 3s infinite alternate;
//     font-weight: 900;
//     letter-spacing: -2px;
//     text-transform: uppercase;
//   }
// `;

// const PremiumContent = styled.div`
//   background: linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(240,255,255,0.6) 100%);
//   border: 2px solid rgba(139,0,0,0.15);
//   border-radius: 20px;
//   padding: 2.5rem;
//   margin-bottom: 2rem;
//   box-shadow: 
//     0 15px 35px rgba(139,0,0,0.08),
//     inset 0 0 25px rgba(139,0,0,0.03);
//   backdrop-filter: blur(15px);
//   transition: all 0.4s ease;

//   &:hover {
//     transform: scale(1.02);
//     box-shadow: 
//       0 20px 45px rgba(139,0,0,0.12),
//       inset 0 0 35px rgba(139,0,0,0.06);
//   }

//   p {
//     font-size: 1.3rem;
//     color: #2c3e50;
//     line-height: 1.8;
//     letter-spacing: 0.5px;
//     text-align: justify;
//     font-weight: 500;
//   }
// `;

// const PremiumButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   a {
//     display: inline-block;
//     padding: 1rem 2.5rem;
//     background: linear-gradient(145deg, #8b0000, #ff4500);
//     color: white;
//     text-transform: uppercase;
//     font-weight: 700;
//     letter-spacing: 2px;
//     border-radius: 50px;
//     box-shadow: 0 15px 25px rgba(139,0,0,0.2);
//     transition: all 0.4s ease;
//     position: relative;
//     overflow: hidden;

//     &::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         120deg, 
//         transparent, 
//         rgba(255,255,255,0.3), 
//         transparent
//       );
//       transition: all 0.4s ease;
//     }

//     &:hover {
//       transform: scale(1.1);
//       box-shadow: 0 20px 35px rgba(139,0,0,0.3);

//       &::before {
//         left: 100%;
//       }
//     }
//   }
// `;

// const HeroSection = ({ myData }) => {
//   const { name } = myData;

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid-one-column">
//           <div className="hero-section-data">
//             <PremiumHeading>
//               <h1>We're {name}</h1>
//             </PremiumHeading>
            
//             <PremiumContent>
//               <p>
//                 Where innovation meets illumination! We're your one-stop shop for cutting-edge lighting tech that makes your space shine while saving energy. Discover our wide range of top-notch LED products, from stylish home lighting to industrial-grade solutions. At First Electronic Solutions, we're dedicated to lighting up your space with efficiency and elegance. Join us in embracing a brighter & more sustainable future.
//               </p>
//             </PremiumContent>
            
//             <PremiumButton>
//               <NavLink to="./products">
//                 Explore Now
//               </NavLink>
//             </PremiumButton>
//           </div>
          
//           {/* <figure>
//             <NavLink to="/products">
//               <SliderImage slides={SliderData} autoPlay={true} />
//             </NavLink>
//           </figure> */}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default HeroSection;











import React from 'react';
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const particleAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-50px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const Wrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #e0e7f0, #d1dbe6, #c2cdd9);
  background-size: 400% 400%;
  position: relative;
  overflow: hidden;
  animation: gradient 15s ease infinite;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.02);
    animation: ${particleAnimation} 10s linear infinite;
  }

  &::after {
    animation-delay: -5s;
    background: rgba(0,0,0,0.01);
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const CompanyName = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 5.5rem;
  background: linear-gradient(45deg, #8b0000, #ff4500);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -4px;
  position: relative;
  display: inline-block;
  transition: text-shadow 0.3s ease;

  &::before {
    content: 'First Electronics Solutions';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(45deg, #8b0000, #ff4500);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(139,0,0,0);
    transition: text-shadow 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #8b0000, #ff4500);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    &::before {
      text-shadow: 0 0 15px rgba(139,0,0,0.7);
    }

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 525px) {
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  max-width: 800px;
  font-size: 1.5rem;
  color: #2c3e50;
  line-height: 2;
  margin-bottom: 5.5rem;
  font-weight: 300;
  letter-spacing: 0.7px;
  position: relative;
`;

const PremiumButton = styled.div`
  a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    padding: 1.2rem 3rem;
    background: linear-gradient(145deg, #8b0000, #ff4500);
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 2px;
    border-radius: 50px;
    box-shadow: 0 15px 25px rgba(139,0,0,0.2);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg, 
        transparent, 
        rgba(255,255,255,0.3), 
        transparent
      );
      transition: all 0.4s ease;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 20px 35px rgba(139,0,0,0.3);

      &::before {
        left: 100%;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Container>
        <CompanyName>First Electronics Solutions</CompanyName>
        
        <Description>
          "At First Electronics Solution, we're pioneering innovative lighting technologies that transform spaces and elevate efficiency. Our cutting-edge LED solutions blend sophisticated design with sustainable performance, delivering intelligent lighting solutions for homes, businesses, and industries."
        </Description>
        
        <PremiumButton>
          <NavLink to="./products">
            Explore Our Products
          </NavLink>
        </PremiumButton>
      </Container>
    </Wrapper>
  );
};

export default HeroSection;


// import React from 'react';
// import { NavLink } from "react-router-dom";
// import styled, { keyframes } from "styled-components";

// const particleAnimation = keyframes`
//   0% { transform: translateY(0) rotate(0deg); }
//   50% { transform: translateY(-50px) rotate(180deg); }
//   100% { transform: translateY(0) rotate(360deg); }
// `;

// const Wrapper = styled.section`
//   padding: 8rem 0;
//   background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
//   background-size: 400% 400%;
//   position: relative;
//   overflow: hidden;
//   animation: gradient 15s ease infinite;

//   &::before, &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(255,255,255,0.02);
//     animation: ${particleAnimation} 10s linear infinite;
//   }

//   &::after {
//     animation-delay: -5s;
//     background: rgba(255,255,255,0.01);
//   }

//   @keyframes gradient {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }
// `;

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   position: relative;
//   z-index: 2;
// `;

// const CompanyName = styled.h1`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 5.5rem;
//   background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   margin-bottom: 4rem;
//   font-weight: 900;
//   text-transform: uppercase;
//   letter-spacing: -4px;
//   position: relative;
  
//   &::before {
//     content: '';
//     position: absolute;
//     bottom: -15px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 120%;
//     height: 5px;
//     background: linear-gradient(to right, #ff6b6b, #4ecdc4);
//     opacity: 0.7;
//   }
// `;

// const Description = styled.p`
//   font-family: 'Open Sans', sans-serif;
//   max-width: 800px;
//   font-size: 1.3rem;
//   color: #e0e0e0;
//   line-height: 2;
//   margin-bottom: 4.5rem;
//   font-weight: 300;
//   letter-spacing: 0.7px;
//   position: relative;
  
//   &::before, &::after {
//     content: '"';
//     font-size: 5rem;
//     color: #4ecdc4;
//     position: absolute;
//     opacity: 0.5;
//     font-family: 'Georgia', serif;
//   }

//   &::before {
//     top: -30px;
//     left: -50px;
//   }

//   &::after {
//     bottom: -30px;
//     right: -50px;
//   }
// `;

// const PremiumButton = styled.div`
//   a {
//     font-family: 'Montserrat', sans-serif;
//     display: inline-block;
//     padding: 1.2rem 3rem;
//     background: linear-gradient(145deg, #ff6b6b, #4ecdc4);
//     color: white;
//     text-transform: uppercase;
//     font-weight: 700;
//     font-size: 1.1rem;
//     letter-spacing: 3px;
//     border-radius: 50px;
//     box-shadow: 0 15px 25px rgba(0,0,0,0.2);
//     transition: all 0.4s ease;
//     position: relative;
//     overflow: hidden;

//     &::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         120deg, 
//         transparent, 
//         rgba(255,255,255,0.3), 
//         transparent
//       );
//       transition: all 0.4s ease;
//     }

//     &:hover {
//       transform: scale(1.1);
//       box-shadow: 0 20px 35px rgba(0,0,0,0.3);

//       &::before {
//         left: 100%;
//       }
//     }
//   }
// `;

// const HeroSection = () => {
//   return (
//     <Wrapper>
//       <Container>
//         <CompanyName>First Electronics Solution</CompanyName>
        
//         <Description>
//           At First Electronics Solution, we're pioneering innovative lighting technologies that transform spaces and elevate efficiency. Our cutting-edge LED solutions blend sophisticated design with sustainable performance, delivering intelligent lighting solutions for homes, businesses, and industries.
//         </Description>
        
//         <PremiumButton>
//           <NavLink to="./products">
//             Explore Our Products
//           </NavLink>
//         </PremiumButton>
//       </Container>
//     </Wrapper>
//   );
// };

// export default HeroSection;