import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const ActorSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
            Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 within the electronic industry. In 2019, we ventured into the LED lighting sector. Through a strategic approach centered on innovation, we have been consistently developing a range of LED lighting products, including LED panel lights for indoor and outdoor commercial use. We have also fostered partnerships with renowned enterprises in India for LED manufacturing. As a result, our products have gained widespread acceptance within the Indian market.
            </p>
            <div className="poo">
              <NavLink to="/contact">
                <Button>Contact Us</Button>
              </NavLink>
            </div>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hand.png"
                alt="actor-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      letter-spacing: 0.4px;
      text-transform: capitalize;
      text-align: justify;
      text-justify: inter-word;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: #8b0000;
    //   font-size: 27px;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
`;

export default ActorSection;