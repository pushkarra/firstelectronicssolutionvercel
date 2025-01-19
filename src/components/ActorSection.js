import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaBuilding, FaBoxes, FaHandshake } from 'react-icons/fa';

const AboutSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="background-pattern"></div>
      <div className="container">
        <div className="about-header">
          <div className="title-wrapper">
            <span className="subtitle">Our Journey</span>
            <div className="animated-border"></div>
          </div>
          <h1>{name}</h1>
        </div>
        
        <div className="grid grid-two-column">
          <div className="about-section-image">
            <div className="image-wrapper">
              <figure>
                <img
                  src="images/hand.png"
                  alt="about-section"
                  className="img-style"
                />
              </figure>
              <div className="floating-card">
                <span className="years">7+</span>
                <span className="label">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="about-section-data">
            <div className="about-card">
              <div className="card-header">
                <span className="highlight-text">Our Legacy</span>
              </div>
              <p>
                Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 
                within the electronic industry. In 2019, we ventured into the LED 
                lighting sector.
              </p>
            </div>

            <div className="achievement-cards">
              <div className="achievement-card">
                <div className="icon-wrapper">
                  <FaBuilding className="icon" />
                </div>
                <span className="number">2016</span>
                <span className="label">Established</span>
              </div>
              <div className="achievement-card">
                <div className="icon-wrapper">
                  <FaBoxes className="icon" />
                </div>
                <span className="number">100+</span>
                <span className="label">Products</span>
              </div>
              <div className="achievement-card">
                <div className="icon-wrapper">
                  <FaHandshake className="icon" />
                </div>
                <span className="number">50+</span>
                <span className="label">Partners</span>
              </div>
            </div>

            <div className="feature-cards">
              <div className="feature">
                <h3>Innovation First</h3>
                <p>Cutting-edge LED lighting solutions for modern needs</p>
              </div>
              <div className="feature">
                <h3>Quality Assured</h3>
                <p>Rigorous testing and premium manufacturing standards</p>
              </div>
            </div>

            <p className="description">
              Through a strategic approach centered on innovation, we have been 
              consistently developing a range of LED lighting products, including LED 
              panel lights for indoor and outdoor commercial use. We have also fostered 
              partnerships with renowned enterprises in India for LED manufacturing. 
            </p>

            <div className="cta-section">
              <NavLink to="/contact">
                <Button className="main-button">Connect With Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  position: relative;
  overflow: hidden;

  .background-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(120deg, #fff5f5 0%, #fff 100%);
    // opacity: 0.9;
    background:linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);
    opacity: 0.8;
    z-index: -1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // background: radial-gradient(circle at 50% 50%, #ff000010 0%, transparent 8%);
      // background-size: 25px 25px;
      background: radial-gradient(circle at 50% 50%, #ff000008 0%, transparent 10%);
      background-size: 30px 30px;
    }
  }

  .about-header {
    text-align: center;
    margin-bottom: 7rem;
    position: relative;
    
    .title-wrapper {
      display: inline-block;
      position: relative;
      margin-bottom: 1.5rem;
    }

    .subtitle {
      // color: #d10000;
      color: #8b0000;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
    }

    .animated-border {
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 2px;
      // background: #d10000;
      background: #8b0000;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: #d10000;
        background: #8b0000;
        transform: scaleX(0);
        transform-origin: right;
        animation: borderAnimation 4s infinite;
      }
    }

    h1 {
      font-size: 4.8rem;
      // background: linear-gradient(120deg, #d10000 0%, #ff3333 100%);
      background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
  }

  .image-wrapper {
    position: relative;
    
    .floating-card {
      position: absolute;
      right: -3rem;
      bottom: 3rem;
      background: white;
      padding: 2.5rem;
      border-radius: 2rem;
      // box-shadow: 0 25px 50px rgba(209, 0, 0, 0.15);
      box-shadow: 0 20px 40px rgba(139, 0, 0, 0.1);
      animation: float 5s ease-in-out infinite;

      .years {
        display: block;
        font-size: 4rem;
        font-weight: 800;
        // color: #d10000;
        color: #8b0000;
        line-height: 1;
      }

      .label {
        font-size: 1.5rem;
        // color: #555;
        color: #666;
      }
    }
  }

  .about-section-data {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .about-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 3.5rem;
    border-radius: 2.5rem;
    // box-shadow: 0 25px 50px rgba(209, 0, 0, 0.1);
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.08);
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-8px);
      // box-shadow: 0 30px 60px rgba(209, 0, 0, 0.15);
    }

    .card-header {
      margin-bottom: 2rem;
    }

    .highlight-text {
      font-size: 2.2rem;
      font-weight: 700;
      // background: linear-gradient(120deg, #d10000 0%, #ff3333 100%);
      background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      margin: 0;
      font-size: 1.7rem;
      line-height: 1.8;
      color: #444;
    }
  }

  .achievement-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    .achievement-card {
      background: white;
      padding: 2.8rem 2rem;
      border-radius: 2.5rem;
      text-align: center;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: linear-gradient(120deg, #d10000 0%, #ff3333 100%);
        background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
        opacity: 0;
        transition: all 0.4s ease;
        z-index: 1;
      }

      &:hover {
        transform: translateY(-12px);
        
        &::before {
          opacity: 0.98;
        }

        .icon-wrapper {
          background: white;
          transform: scale(1.1);

          .icon {
            // color: #d10000;
            color: #8b0000;
          }
        }

        .number, .label {
          color: white;
          position: relative;
          z-index: 2;
        }
      }

      .icon-wrapper {
        width: 65px;
        height: 65px;
        margin: 0 auto 2rem;
        // background: #fff5f5;
        background: #fff1f1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
        position: relative;
        z-index: 2;

        .icon {
          font-size: 2.8rem;
          // color: #d10000;
          color: #8b0000;
          transition: color 0.4s ease;
        }
      }

      .number {
        display: block;
        font-size: 3.8rem;
        font-weight: 800;
        // color: #d10000;
        color: #8b0000;
        margin-bottom: 0.8rem;
        transition: color 0.4s ease;
      }

      .label {
        font-size: 1.5rem;
        font-weight: 500;
        color: #555;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: all 0.4s ease;
      }
    }
  }

  .feature-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    .feature {
      background: white;
      padding: 3rem;
      border-radius: 2.5rem;
      // box-shadow: 0 20px 40px rgba(209, 0, 0, 0.08);
      box-shadow: 0 15px 30px rgba(139, 0, 0, 0.06);
      transition: all 0.4s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(209, 0, 0, 0.12);
      }

      h3 {
        // color: #d10000;
        color: #8b0000;
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      p {
        color: #555;
        font-size: 1.6rem;
        line-height: 1.7;
      }
    }
  }

  .description {
    font-size: 1.7rem;
    line-height: 1.8;
    color: #444;
    text-align: justify;
    padding: 0 1.5rem;
  }

  .cta-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.5rem;

    .main-button {
      padding: 1.6rem 4.5rem;
      font-size: 1.8rem;
      border-radius: 3.5rem;
      // background: linear-gradient(120deg, #d10000 0%, #ff3333 100%);
      background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.4s ease;
      
      &:hover {
        transform: translateY(-5px);
        // box-shadow: 0 15px 30px rgba(209, 0, 0, 0.25);
        box-shadow: 0 10px 20px rgba(139, 0, 0, 0.2);
      }
    }
  }

  @keyframes borderAnimation {
    0% { transform: scaleX(0); transform-origin: right; }
    45% { transform: scaleX(1); transform-origin: right; }
    55% { transform: scaleX(1); transform-origin: left; }
    100% { transform: scaleX(0); transform-origin: left; }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 65%;
      height: 85%;
      // background: linear-gradient(120deg, #d10000 0%, #ff3333 100%);
      background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
      position: absolute;
      left: 45%;
      top: -4rem;
      z-index: -1;
      border-radius: 2.5rem;
      opacity: 0.85;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
    border-radius: 2.5rem;
    // box-shadow: 0 25px 50px rgba(209, 0, 0, 0.18);
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0;

    .grid {
      gap: 4rem;
    }

    .about-header h1 {
      font-size: 3.2rem;
    }

    .achievement-cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .feature-cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .floating-card {
      right: 0.5rem;
      bottom: 0.5rem;
      padding: 1.5rem;
    }

    figure::after {
      width: 45%;
      height: 90%;
      left: 0;
      top: 8%;
    }

    .cta-section {
      flex-direction: column;
      gap: 2.5rem;
    }
  }
`;

export default AboutSection;






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import { NavLink } from "react-router-dom";

// import styled from "styled-components";

// import { Button } from "../styles/Button";

// import { FaBuilding, FaBoxes, FaHandshake } from 'react-icons/fa';



// const AboutSection = ({ myData }) => {

//   const { name } = myData;



//   return (

//     <Wrapper>

//       <div className="background-pattern"></div>

//       <div className="container">

//         <div className="about-header">

//           <div className="title-wrapper">

//             <span className="subtitle">Our Journey</span>

//             <div className="animated-border"></div>

//           </div>

//           <h1>{name}</h1>

//         </div>

        

//         <div className="grid grid-two-column">

//           <div className="about-section-image">

//             <div className="image-wrapper">

//               <figure>

//                 <img

//                   src="images/hand.png"

//                   alt="about-section"

//                   className="img-style"

//                 />

//               </figure>

//               <div className="floating-card">

//                 <span className="years">7+</span>

//                 <span className="label">Years of Excellence</span>

//               </div>

//             </div>

//           </div>



//           <div className="about-section-data">

//             <div className="about-card">

//               <div className="card-header">

//                 <span className="highlight-text">Our Legacy</span>

//               </div>

//               <p>

//                 Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 

//                 within the electronic industry. In 2019, we ventured into the LED 

//                 lighting sector.

//               </p>

//             </div>



//             <div className="achievement-cards">

//               <div className="achievement-card">

//                 <div className="icon-wrapper">

//                   <FaBuilding className="icon" />

//                 </div>

//                 <span className="number">2016</span>

//                 <span className="label">Established</span>

//               </div>

//               <div className="achievement-card">

//                 <div className="icon-wrapper">

//                   <FaBoxes className="icon" />

//                 </div>

//                 <span className="number">100+</span>

//                 <span className="label">Products</span>

//               </div>

//               <div className="achievement-card">

//                 <div className="icon-wrapper">

//                   <FaHandshake className="icon" />

//                 </div>

//                 <span className="number">50+</span>

//                 <span className="label">Partners</span>

//               </div>

//             </div>



//             <div className="feature-cards">

//               <div className="feature">

//                 <h3>Innovation First</h3>

//                 <p>Cutting-edge LED lighting solutions for modern needs</p>

//               </div>

//               <div className="feature">

//                 <h3>Quality Assured</h3>

//                 <p>Rigorous testing and premium manufacturing standards</p>

//               </div>

//             </div>



//             <p className="description">

//               Through a strategic approach centered on innovation, we have been 

//               consistently developing a range of LED lighting products, including LED 

//               panel lights for indoor and outdoor commercial use. We have also fostered 

//               partnerships with renowned enterprises in India for LED manufacturing. 

//             </p>



//             <div className="cta-section">

//               <NavLink to="/contact">

//                 <Button className="main-button">Connect With Us</Button>

//               </NavLink>

              

//             </div>

//           </div>

//         </div>

//       </div>

//     </Wrapper>

//   );

// };



// const Wrapper = styled.section`

//   padding: 12rem 0;

//   position: relative;

//   overflow: hidden;



//   .background-pattern {

//     position: absolute;

//     top: 0;

//     left: 0;

//     right: 0;

//     bottom: 0;

//     background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);

//     opacity: 0.8;

//     z-index: -1;

    

//     &::before {

//       content: '';

//       position: absolute;

//       top: 0;

//       left: 0;

//       right: 0;

//       bottom: 0;

//       background: radial-gradient(circle at 50% 50%, #ff000008 0%, transparent 10%);

//       background-size: 30px 30px;

//     }

//   }



//   .about-header {

//     text-align: center;

//     margin-bottom: 8rem;

//     position: relative;

    

//     .title-wrapper {

//       display: inline-block;

//       position: relative;

//       margin-bottom: 2rem;

//     }



//     .subtitle {

//       color: #8b0000;

//       font-size: 2rem;

//       font-weight: 600;

//       letter-spacing: 0.3rem;

//       text-transform: uppercase;

//       position: relative;

//       z-index: 1;

//     }



//     .animated-border {

//       position: absolute;

//       bottom: -5px;

//       left: 50%;

//       transform: translateX(-50%);

//       width: 80px;

//       height: 3px;

//       background: #8b0000;

      

//       &::before {

//         content: '';

//         position: absolute;

//         top: 0;

//         left: 0;

//         width: 100%;

//         height: 100%;

//         background: #8b0000;

//         transform: scaleX(0);

//         transform-origin: right;

//         animation: borderAnimation 3s infinite;

//       }

//     }



//     h1 {

//       font-size: 5rem;

//       background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);

//       -webkit-background-clip: text;

//       -webkit-text-fill-color: transparent;

//       margin-top: 2rem;

//       font-weight: 800;

//       letter-spacing: -0.5px;

//     }

//   }



//   .image-wrapper {

//     position: relative;

    

//     .floating-card {

//       position: absolute;

//       right: -2rem;

//       bottom: 2rem;

//       background: white;

//       padding: 2rem;

//       border-radius: 1.5rem;

//       box-shadow: 0 20px 40px rgba(139, 0, 0, 0.1);

//       animation: float 6s ease-in-out infinite;



//       .years {

//         display: block;

//         font-size: 3.5rem;

//         font-weight: 800;

//         color: #8b0000;

//         line-height: 1;

//       }



//       .label {

//         font-size: 1.4rem;

//         color: #666;

//       }

//     }

//   }

//   .about-section-data {
//     display: flex;
//     flex-direction: column;
//     gap: 4rem;
//   }

//   .about-card {
//     background: rgba(255, 255, 255, 0.9);
//     padding: 4rem;
//     border-radius: 2rem;
//     box-shadow: 0 20px 40px rgba(139, 0, 0, 0.08);
//     transition: transform 0.3s ease;
    
//     &:hover {
//       transform: translateY(-5px);
//     }

//     .card-header {
//       margin-bottom: 2rem;
//     }

//     .highlight-text {
//       font-size: 2rem;
//       font-weight: 700;
//       background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }

//     p {
//       margin: 0;
//       font-size: 1.8rem;
//       line-height: 1.8;
//       color: #444;
//     }
//   }

//   .achievement-cards {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 3rem;

//     .achievement-card {
//       background: white;
//       padding: 3rem 2rem;
//       border-radius: 2rem;
//       text-align: center;
//       transition: all 0.3s ease;
//       position: relative;
//       overflow: hidden;
      
//       &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
//         opacity: 0;
//         transition: opacity 0.3s ease;
//         z-index: 1;
//       }

//       &:hover {
//         transform: translateY(-10px);
        
//         &::before {
//          opacity: 0.95;

//         }



//         .icon-wrapper {

//           background: white;

//           .icon {

//             color: #8b0000;

//           }
//         }

//         .number, .label {
//           color: white;
//           position: relative;
//           z-index: 2;
//         }
//       }

//       .icon-wrapper {
//         width: 60px;
//         height: 60px;
//         margin: 0 auto 2rem;
//         background: #fff1f1;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         transition: all 0.3s ease;

//         position: relative;

//         z-index: 2;



//         .icon {

//           font-size: 2.5rem;

//           color: #8b0000;

//           transition: color 0.3s ease;

//         }
//       }

//       .number {
//         display: block;
//         font-size: 3.5rem;
//         font-weight: 800;
//         color: #8b0000;
//         margin-bottom: 1rem;
//         transition: color 0.3s ease;
//       }

//       .label {
//         font-size: 1.6rem;
//         font-weight: 500;
//         color: #666;
//         text-transform: uppercase;
//         letter-spacing: 0.1rem;
//         transition: color 0.3s ease;
//       }
//     }
//   }

//   .feature-cards {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 3rem;

//     .feature {
//       background: white;
//       padding: 3rem;
//       border-radius: 2rem;
//       box-shadow: 0 15px 30px rgba(139, 0, 0, 0.06);
//       transition: transform 0.3s ease;

//       &:hover {
//         transform: translateY(-5px);
//       }

//       h3 {
//         color: #8b0000;
//         font-size: 2rem;
//         margin-bottom: 1rem;
//       }

//       p {
//         color: #666;
//         font-size: 1.6rem;
//         line-height: 1.6;
//       }
//     }
//   }

//   .description {
//     font-size: 1.8rem;
//     line-height: 1.8;
//     color: #444;
//     text-align: justify;
//     text-justify: inter-word;
//     padding: 0 2rem;
//   }

//   .cta-section {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 4rem;

//     .main-button {
//       padding: 1.5rem 4rem;
//       font-size: 1.8rem;
//       border-radius: 3rem;
//       background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
//       border: none;
//       color: white;
//       cursor: pointer;
//       transition: transform 0.3s ease;
      
//       &:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 10px 20px rgba(139, 0, 0, 0.2);
//       }
//     }

//     .scroll-indicator {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 1rem;

//       span {
//         font-size: 1.4rem;
//         color: #666;
//       }

//       .scroll-line {
//         width: 2px;
//         height: 50px;
//         background: #8b0000;
//         position: relative;
//         overflow: hidden;

//         &::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(to bottom, transparent 0%, #ff1a1a 50%, transparent 100%);
//           animation: scrollAnimation 2s infinite;
//         }
//       }
//     }
//   }

//   @keyframes borderAnimation {
//     0% { transform: scaleX(0); transform-origin: right; }
//     50% { transform: scaleX(1); transform-origin: right; }
//     50.1% { transform: scaleX(1); transform-origin: left; }
//     100% { transform: scaleX(0); transform-origin: left; }
//   }

//   @keyframes float {
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-20px); }
//     100% { transform: translateY(0px); }
//   }

//   @keyframes scrollAnimation {
//     0% { transform: translateY(-100%); }
//     100% { transform: translateY(100%); }
//   }

//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 60%;
//       height: 80%;
//       background: linear-gradient(135deg, #8b0000 0%, #ff1a1a 100%);
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//       border-radius: 2rem;
//       opacity: 0.8;
//     }
//   }

//   .img-style {
//     width: 100%;
//     height: auto;
//     border-radius: 2rem;
//     box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.02);
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 8rem 0;

//     .grid {
//       gap: 5rem;
//     }

//     .about-header h1 {
//       font-size: 3.5rem;
//     }

//     .achievement-cards {
//       grid-template-columns: 1fr;
//       gap: 2rem;
//     }

//     .feature-cards {
//       grid-template-columns: 1fr;
//       gap: 2rem;
//     }

//     .floating-card {
//       right: 1rem;
//       bottom: 1rem;
//       padding: 1.5rem;
//     }

//     figure::after {
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//     }

//     .cta-section {
//       flex-direction: column;
//       gap: 3rem;
      
//       .scroll-indicator {
//         display: none;
//       }
//     }
//   }
// `;

// export default AboutSection;









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";

// const AboutSection = ({ myData }) => {
//   const { name } = myData;

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="about-header">
//           <span className="subtitle">Our Story</span>
//           <h1>{name}</h1>
//         </div>
        
//         <div className="grid grid-two-column">
//           <div className="about-section-image">
//             <figure>
//               <img
//                 src="images/hand.png"
//                 alt="about-section"
//                 className="img-style"
//               />
//             </figure>
//           </div>

//           <div className="about-section-data">
//             <div className="about-card">
//               <p>
//                 Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 
//                 within the electronic industry. In 2019, we ventured into the LED 
//                 lighting sector.
//               </p>
//             </div>

//             <div className="achievement-cards">
//               <div className="achievement-card">
//                 <span className="number">2016</span>
//                 <span className="label">Founded</span>
//               </div>
//               <div className="achievement-card">
//                 <span className="number">100+</span>
//                 <span className="label">Products</span>
//               </div>
//               <div className="achievement-card">
//                 <span className="number">50+</span>
//                 <span className="label">Partners</span>
//               </div>
//             </div>

//             <p className="description">
//               Through a strategic approach centered on innovation, we have been 
//               consistently developing a range of LED lighting products, including LED 
//               panel lights for indoor and outdoor commercial use. We have also fostered 
//               partnerships with renowned enterprises in India for LED manufacturing. 
//               As a result, our products have gained widespread acceptance within the 
//               Indian market.
//             </p>

//             <div className="cta-button">
//               <NavLink to="/contact">
//                 <Button>Get In Touch</Button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 12rem 0;
//   background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);

//   .about-header {
//     text-align: center;
//     margin-bottom: 6rem;
    
//     .subtitle {
//       color: #8b0000;
//       font-size: 1.8rem;
//       font-weight: 500;
//       letter-spacing: 0.2rem;
//     }

//     h1 {
//       font-size: 4rem;
//       color: #8b0000;
//       margin-top: 1rem;
//       font-weight: bold;
//     }
//   }

//   .about-section-data {
//     display: flex;
//     flex-direction: column;
//     gap: 3rem;

//     .about-card {
//       background: rgba(255, 255, 255, 0.9);
//       padding: 3rem;
//       border-radius: 1rem;
//       box-shadow: 0 8px 24px rgba(139, 0, 0, 0.1);
      
//       p {
//         margin: 0;
//         font-size: 1.8rem;
//         line-height: 1.6;
//       }
//     }
//   }

//   .achievement-cards {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 2rem;

//     .achievement-card {
//       background: #8b0000;
//       padding: 2rem;
//       border-radius: 1rem;
//       text-align: center;
//       color: white;

//       .number {
//         display: block;
//         font-size: 3rem;
//         font-weight: bold;
//         margin-bottom: 0.5rem;
//       }

//       .label {
//         font-size: 1.4rem;
//         text-transform: uppercase;
//         letter-spacing: 0.1rem;
//       }
//     }
//   }

//   .description {
//     font-size: 1.6rem;
//     line-height: 1.8;
//     color: #333;
//     text-align: justify;
//     text-justify: inter-word;
//   }

//   .about-section-image {
//     position: relative;
    
//     figure {
//       position: relative;
      
//       &::after {
//         content: "";
//         width: 60%;
//         height: 80%;
//         background-color: #8b0000;
//         position: absolute;
//         left: 50%;
//         top: -5rem;
//         z-index: -1;
//         border-radius: 1rem;
//       }
//     }

//     .img-style {
//       width: 100%;
//       height: auto;
//       border-radius: 1rem;
//       box-shadow: 0 8px 24px rgba(139, 0, 0, 0.15);
//     }
//   }

//   .cta-button {
//     text-align: center;
//     margin-top: 2rem;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 5rem;
//     }

//     .achievement-cards {
//       grid-template-columns: 1fr;
//       gap: 1rem;
//     }

//     figure::after {
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       background-color: #8b0000;
//     }

//     .about-header {
//       margin-bottom: 4rem;
      
//       h1 {
//         font-size: 3rem;
//       }
//     }
//   }
// `;

// export default AboutSection;



















// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";

// const ActorSection = ({ myData }) => {
//   const { name } = myData;

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-data">
//             <p className="intro-data">Welcome to </p>
//             <h1> {name} </h1>
//             <p>
//             Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 within the electronic industry. In 2019, we ventured into the LED lighting sector. Through a strategic approach centered on innovation, we have been consistently developing a range of LED lighting products, including LED panel lights for indoor and outdoor commercial use. We have also fostered partnerships with renowned enterprises in India for LED manufacturing. As a result, our products have gained widespread acceptance within the Indian market.
//             </p>
//             <div className="poo">
//               <NavLink to="/contact">
//                 <Button>Contact Us</Button>
//               </NavLink>
//             </div>
//           </div>
//           {/* our homepage image  */}
//           <div className="hero-section-image">
//             <figure>
//               <img
//                 src="images/hand.png"
//                 alt="actor-section"
//                 className="img-style"
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 12rem 0;

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//       letter-spacing: 0.4px;
//       text-transform: capitalize;
//       text-align: justify;
//       text-justify: inter-word;
//     }

//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//       color: #8b0000;
//     //   font-size: 27px;
//     }

//     .intro-data {
//       margin-bottom: 0;
//     }
//   }

//   .hero-section-image {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
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
// `;

// export default ActorSection;