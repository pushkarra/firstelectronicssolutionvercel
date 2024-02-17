import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today...</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/Contact"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>First Electronics Solutions</h3>
              <p>Khasra no. 132/1110 Street no 18, Near Tiranga Building, Rithala, Delhi, 110085</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="https://formspree.io/f/xjvqlyqb" method="POST">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />

                
                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <a href="tel:" className="modern">+91-9891253737</a>
              <br />
              <br />
              <a href="tel:" className="modern">+91-8384015452</a>
              {/* <h3>+91 12345678978</h3> */}
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} First Electronics. All Rights Reserved
              </p>
              <div>
                <p><Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link></p>
              
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

background-color: #FFE2C9;
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 6rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  .modern{
    color: ${({ theme }) => theme.colors.white};    
    font-size: 1.7rem;
  }

  .grid{
    display: grid;
    gap: 10rem;
    // justify-content: center;

  }

  footer {
    padding: 8rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 3rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .grid {
        display: grid;
        gap: 4rem;
      }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;


export default Footer;