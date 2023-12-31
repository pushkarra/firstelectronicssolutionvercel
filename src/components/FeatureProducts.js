import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./Product";
import { keyframes } from "styled-components";


const colorfulSquareColors = ["#2B03E0", "#FF1900", "#198E01", "#FFC61C"];

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;


const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    // return <div > ......Loading </div>;
    return (
      <LoadingContainer>
        <LoadingText>Loading...</LoadingText>
        <BouncingSquaresContainer>
          {colorfulSquareColors.map((color, index) => (
            <BouncingSquare key={index} color={color} />
          ))}
        </BouncingSquaresContainer>
      </LoadingContainer>
    );
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const LoadingContainer = styled.div`
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 100px;
`;

const LoadingText = styled.div`
  font-size: 24px;
  margin-bottom: 19px;
  color: #333;
`;

const BouncingSquaresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BouncingSquare = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: ${(props) => props.color};
  animation: ${bounceAnimation} 1s infinite;
`;

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  // background-color: #FFFFF0;


  .container {
    max-width: 130rem;
  }

    .intro-data{
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.heading};
    font-size: 1.6rem;
  }

  .common-heading {
    color: ${({ theme }) => theme.colors.btn};
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    padding: 1rem;
    text-transform: capitalize;
          
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProduct;