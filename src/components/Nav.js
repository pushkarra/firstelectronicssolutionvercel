import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 2.5rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          padding: 4px;
          display: inline-block;
          text-decoration: none;
          font-size: 2.2rem;
          border: 3px solid transparent;
          border-radius: 10px;
          font-family: system-ui;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.black};
          transition: background-color 0.3s linear, color 0.3s linear;
        }

        &:hover,
        &:active {
          background-color: #8b0000;
          color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        // &.active {
        //   background-color: #8b0000;
        //   color: #ffffff;
        // }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: none;
        padding: 1rem;
        border-radius: 8px;
        background: transparent;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(139, 0, 0, 0.1);
        }

        .mobile-nav-icon {
          font-size: 3.5rem;
          color: #8b0000;
          transition: all 0.3s ease;
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 3.5rem;
        position: fixed;
        top: 2rem;
        right: 2rem;
        color: #8b0000;
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
        color: #8b0000;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.4s ease-in-out;
        gap: 3rem;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;

        .navbar-link {
          &:link,
          &:visited {
            font-size: 2.8rem;
            width: auto;
            text-align: center;
            padding: 1.2rem 2.4rem;
            background: rgba(255, 255, 255, 0.8);
            border: 2px solid rgba(139, 0, 0, 0.1);
            color: #333;
            border-radius: 12px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          &:hover {
            background: rgba(139, 0, 0, 0.05);
            border-color: rgba(139, 0, 0, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 0, 0, 0.1);
          }

          &.active {
            background: #8b0000;
            color: white;
            border-color: #8b0000;
            box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);

            &:hover {
              transform: none;
              background: #a50000;
            }
          }
        }
      }

      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogue"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;









// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [menuIcon, setMenuIcon] = useState();

//   const Nav = styled.nav`

  

    
//     .navbar-lists {
//       display: flex;
//       gap: 2.5rem;
//       align-items: center;


//       .navbar-link {
//         &:link,
//         &:visited {
//           padding: 4px;
//           display: inline-block;
//           text-decoration: none;
//           font-size: 2.2rem;
//           border: 3px solid transparent;
//           border-radius: 10px;
//           font-family: system-ui;
//           font-weight: 500;
          
//           color: ${({ theme }) => theme.colors.black};
//           transition:  background-color 0.3s linear, color 0.3s linear;
//         }

//         &:hover,
//         &:active {
//           background-color: #8b0000;
//           color: #ffffff;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
          
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

    

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;

//       }

      

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//           width: calc(50% - 20px);
//         }

        
//       }
//       .cart-trolley--link {
//         position: relative;

//         .cart-trolley {
//           position: relative;
//           font-size: 5.2rem;
//         }

//         .cart-total--item {
//           width: 4.2rem;
//           height: 4.2rem;
//           font-size: 2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists pija">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/catalogue"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Catalogue
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Contact
//             </NavLink>
//           </li>
        
//         </ul>
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

// export default Nav;