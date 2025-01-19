import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Need Expert Technical Support?</h3>
              <h3>Let's Find Your Solution</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/Contact"> Contact Us </NavLink>
              </Button>
            </div>
          </div>
        </section>

        <footer>
          <div className="container grid grid-three-column">
            <div className="footer-about">
              <h3>First Electronics Solutions</h3>
              <p>Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042</p>
            </div>
            
            <div className="footer-subscribe">
              <h3>Subscribe to Updates</h3>
              <form action="https://formspree.io/f/xjvqlyqb" method="POST">
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <a href="tel:+919891253737" className="modern">+91-9891253737</a>
              <br />
              <br />
              <a href="tel:+918384015452" className="modern">+91-8384015452</a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} First Electronics. All Rights Reserved
              </p>
              <div>
                <p><Link to="/privacy">Privacy Policy</Link></p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 6rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(220, 38, 38, 0.1);
    transform: translateY(50%);
    border: 1px solid rgba(220, 38, 38, 0.1);
    text-align: center;

    h3 {
      color: #1f2937;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .grid div:last-child {
      justify-self: center;
      align-self: center;
    }

    .hireme-btn {
      background: linear-gradient(45deg, #dc2626, #991b1b);
      border: none;
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
        background: linear-gradient(45deg, #ef4444, #b91c1c);
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 3.2rem;
  }

  .grid {
    display: grid;
    gap: 10rem;
    justify-content: center;
    align-items: start;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    padding: 0 0 1rem 14rem;
    grid-template-columns: repeat(3, 1fr);
  }

  footer {
    padding: 9rem 0 2rem 0;
    background: linear-gradient(45deg, #1f2937, #111827);

    h3 {
      color: #f3f4f6;
      margin-bottom: 2.4rem;
      font-size: 1.8rem;
    }

    p {
      color: #d1d5db;
      line-height: 1.8;
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        input[type="email"] {
          padding: 1.2rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1rem;

          &::placeholder {
            color: #9ca3af;
          }

          &:focus {
            outline: none;
            border-color: #dc2626;
            box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
          }
        }

        input[type="submit"] {
          padding: 1rem;
          background: linear-gradient(45deg, #dc2626, #991b1b);
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;

          &:hover {
            background: linear-gradient(45deg, #ef4444, #b91c1c);
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  .modern {
    color: #d1d5db;
    font-size: 1.6rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #dc2626;
    }
  }

  .footer-bottom--section {
    padding-top: 3rem;

    hr {
      margin-bottom: 2rem;
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
      color: #9ca3af;
      text-align: center;
    }

    a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #dc2626;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 90vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      padding: 2rem;

      h3 {
        font-size: 1.5rem;
      }

      .grid div:last-child {
        justify-self: end;
      }
    }

    footer {
      padding: 6rem 0 2rem 0;
    }

    .grid {
      gap: 3rem;
    }

    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
      text-align: start;
    }

    .footer-bottom--section {
      padding-top: 3rem;
    }

    .container {
      padding: 0 2rem;
    }
  }
`;

export default Footer;











// import React from "react";
// import styled from "styled-components";
// import { NavLink, Link } from "react-router-dom";
// import { Button } from "../styles/Button";

// const Footer = () => {
//   return (
//     <>
//       <Wrapper>
//         <section className="contact-short">
//           <div className="grid grid-two-column">
//             <div>
//               <h3>Ready to get started?</h3>
//               <h3>Talk to us today...</h3>
//             </div>

//             <div>
//               <Button className="btn hireme-btn">
//                 <NavLink to="/Contact"> Get Started </NavLink>
//               </Button>
//             </div>
//           </div>
//         </section>

//         <footer>
//           <div className="container grid grid-three-column">
//             <div className="footer-about">
//               <h3>First Electronics Solutions</h3>
//               <p>Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042</p>
//             </div>
            
//             <div className="footer-subscribe">
//               <h3>Subscribe to Updates</h3>
//               <form action="https://formspree.io/f/xjvqlyqb" method="POST">
//                 <input type="email" name="email" placeholder="Enter your email" />
//                 <input type="submit" value="Subscribe" />
//               </form>
//             </div>

//             <div className="footer-contact">
//               <h3>Contact Us</h3>
//               <a href="tel:+919891253737" className="modern">+91-9891253737</a>
//               <br />
//               <br />
//               <a href="tel:+918384015452" className="modern">+91-8384015452</a>
//             </div>
//           </div>

//           <div className="footer-bottom--section">
//             <hr />
//             <div className="container grid grid-two-column">
//               <p>
//                 @{new Date().getFullYear()} First Electronics. All Rights Reserved
//               </p>
//               <div>
//                 <p><Link to="/privacy">Privacy Policy</Link></p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 3rem 6rem;
//     background-color: white;
//     border-radius: 1rem;
//     box-shadow: 0 20px 40px rgba(220, 38, 38, 0.1);
//     transform: translateY(50%);
//     border: 1px solid rgba(220, 38, 38, 0.1);

//     h3 {
//       color: #1f2937;
//       font-size: 1.8rem;
//       font-weight: 600;
//     }

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }

//     .hireme-btn {
//       background: linear-gradient(45deg, #dc2626, #991b1b);
//       border: none;
//       color: white;
//       padding: 1rem 2.5rem;
//       border-radius: 0.5rem;
//       font-weight: 500;
//       transition: all 0.3s ease;
      
//       &:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
//         background: linear-gradient(45deg, #ef4444, #b91c1c);
//       }

//       a {
//         color: white;
//         text-decoration: none;
//       }
//     }
//   }

//   .grid {
//     display: grid;
//     gap: 6rem;
//   }

//   .grid-two-column {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   .grid-three-column {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   footer {
//     padding: 14rem 0 2rem 0;
//     background: linear-gradient(45deg, #1f2937, #111827);

//     h3 {
//       color: #f3f4f6;
//       margin-bottom: 2.4rem;
//       font-size: 1.8rem;
//     }

//     p {
//       color: #d1d5db;
//       line-height: 1.8;
//     }

//     .footer-subscribe {
//       form {
//         display: flex;
//         flex-direction: column;
//         gap: 1.6rem;

//         input[type="email"] {
//           padding: 1.2rem;
//           border-radius: 0.5rem;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           background: rgba(255, 255, 255, 0.05);
//           color: white;
//           font-size: 1rem;

//           &::placeholder {
//             color: #9ca3af;
//           }

//           &:focus {
//             outline: none;
//             border-color: #dc2626;
//             box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
//           }
//         }

//         input[type="submit"] {
//           padding: 1rem;
//           background: linear-gradient(45deg, #dc2626, #991b1b);
//           color: white;
//           border: none;
//           border-radius: 0.5rem;
//           cursor: pointer;
//           font-weight: 500;
//           transition: all 0.3s ease;

//           &:hover {
//             background: linear-gradient(45deg, #ef4444, #b91c1c);
//             transform: translateY(-2px);
//           }
//         }
//       }
//     }
//   }

//   .modern {
//     color: #d1d5db;
//     font-size: 1.6rem;
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #dc2626;
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 3rem;

//     hr {
//       margin-bottom: 2rem;
//       border: none;
//       border-top: 1px solid rgba(255, 255, 255, 0.1);
//     }

//     p {
//       color: #9ca3af;
//     }

//     a {
//       color: #9ca3af;
//       text-decoration: none;
//       transition: color 0.3s ease;

//       &:hover {
//         color: #dc2626;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;
//       padding: 2rem;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .grid {
//       gap: 4rem;
//     }

//     .grid-two-column,
//     .grid-three-column {
//       grid-template-columns: 1fr;
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;

// export default Footer;

















// import React from "react";
// import styled from "styled-components";
// import { NavLink, Link } from "react-router-dom";
// import { Button } from "../styles/Button";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <Wrapper>
//         <section className="contact-short">
//           <div className="grid grid-two-column">
//             <div>
//               <h3>Ready to get started?</h3>
//               <h3>Talk to us today...</h3>
//             </div>

//             <div>
//               <Button className="btn hireme-btn">
//                 <NavLink to="/Contact"> Get Started </NavLink>
//               </Button>
//             </div>
//           </div>
//         </section>
//         {/* footer section */}

//         <footer>
//           <div className="container grid grid-four-column">
//             <div className="footer-about">
//               <h3>First Electronics Solutions</h3>
//               <p>Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042</p>
//             </div>
//             <div className="footer-subscribe">
//               <h3>Subscribe to get important updates</h3>
//               <form action="https://formspree.io/f/xjvqlyqb" method="POST">
//               <input type="email" name="email" placeholder="YOUR E-MAIL" />

                
//                 <input type="submit" value="subscribe" />
//               </form>
//             </div>
//             <div className="footer-social">
//               <h3>Follow Us</h3>
//               <div className="footer-social--icons">
//                 <div>
//                   <FaDiscord className="icons" />
//                 </div>
//                 <div>
//                   <FaInstagram className="icons" />
//                 </div>
//                 <div>
//                   <FaYoutube className="icons" />
//                 </div>
//               </div>
//             </div>
//             <div className="footer-contact">
//               <h3>Call Us</h3>
//               <a href="tel:" className="modern">+91-9891253737</a>
//               <br />
//               <br />
//               <a href="tel:" className="modern">+91-8384015452</a>
//               {/* <h3>+91 12345678978</h3> */}
//             </div>
//           </div>

//           <div className="footer-bottom--section">
//             <hr />
//             <div className="container grid grid-two-column ">
//               <p>
//                 @{new Date().getFullYear()} First Electronics. All Rights Reserved
//               </p>
//               <div>
//                 <p><Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link></p>
              
//               </div>
//             </div>
//           </div>
//         </footer>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`

// background-color: #FFE2C9;
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 3rem 6rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   .modern{
//     color: ${({ theme }) => theme.colors.white};    
//     font-size: 1.7rem;
//   }

//   .grid{
//     display: grid;
//     gap: 10rem;
//     // justify-content: center;

//   }

//   footer {
//     padding: 8rem 0 2rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 3rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .grid {
//         display: grid;
//         gap: 4rem;
//       }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;


// export default Footer;