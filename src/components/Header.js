import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader >
      <div className="radi">
      <NavLink to="/">
        <img src="./images/logo9.png" alt="my logo img" />
      </NavLink>
      </div>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  // background-color: #FFE2C9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  

  .radi{
    border-radius: 10px ;
    border: 5px solid #8b0000;
  }
  
  .logo {
    height: 5rem;
  }

  @media screen and (max-width: 786px){
    .radi{
      border-radius: 5px ;
      border: 2px solid #8b0000;
    }
  }


`;
export default Header;