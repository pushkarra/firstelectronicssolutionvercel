import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader >
      <div className="radi">
      <NavLink to="/">
        <img src={`${process.env.PUBLIC_URL}/images/logo9.png`} alt="my logo img" />
      </NavLink>
      </div>
      <Nav />
    </MainHeader>
  );
};

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   // background-color: #FFE2C9;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
  

//   .radi{
//     border-radius: 10px ;
//     border: 5px solid #8b0000;
//   }
  
//   .logo {
//     height: 5rem;
//   }

//   @media screen and (max-width: 786px){
//     .radi{
//       border-radius: 5px ;
//       border: 2px solid #8b0000;
//     }
//   }


// `;

const MainHeader = styled.header`
  padding: 0 7.8rem;
  height: 7rem;
  background: rgba(255, 255, 255, 0.95); 
  backdrop-filter: blur(8px); 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  .radi {
    border-radius: 15px;
    border: 2px solid #d9534f; /* Modern red tone */
    transition: transform 0.3s ease, border-color 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
      border-color: #c9302c; /* Slightly darker red for hover */
    }
  }

  img {
    height: 4rem;
    object-fit: contain; /* Keeps logo proportional */
  }

  @media screen and (max-width: 786px) {
    padding: 1rem 2rem;
    height: 6rem;

    .radi {
      border-radius: 10px;
      border: 1px solid #d9534f;
    }

    img {
      height: 4rem;
    }
  }
`;

export default Header;

