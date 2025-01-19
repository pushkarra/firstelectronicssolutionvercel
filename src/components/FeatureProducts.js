import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./Product-home";
import React from "react";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingSpinner>
      </LoadingContainer>
    );
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="section-header">
          <div className="heading-group">
            <h3 className="subheading">Featured Collection</h3>
          </div>
          <p className="description">
          Elevate Your Space with Signature Pieces That Define Modern Luxury
          </p>
        </div>
        <div className="products-grid">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
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

const LoadingSpinner = styled.div`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #8b0000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-size);
  width: var(--uib-size);

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }

  & > div::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(139, 0, 0, 0.3);
  }
`;

const Wrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);
  
  .container {
    max-width: 140rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 6rem;
    
    .heading-group {
      margin-bottom: 2rem;
    }
    
    .subheading {
      font-size: 2rem;
      font-weight: 600;
      color: #8b0000;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background: linear-gradient(120deg, #8b0000, #660000);
      }
    }

    .description {
      max-width: 70rem;
      margin: 0 auto;
      color: #4a0000;
      font-size: 1.6rem;
      line-height: 1.6;
      opacity: 0.9;
    }
  }

  .products-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr); /* Default 2 columns for mobile */
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
    }
    
    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
    }
  }

  figure {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
    background: white;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 85%;
      object-fit: contain;
      transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
      filter: brightness(.94);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, 
        rgba(139, 0, 0, 0),
        rgba(139, 0, 0, 0.1)
      );
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      &::after {
        opacity: 1;
      }

      img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  .card {
    background: white;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(139, 0, 0, 0.08);
    filter: brightness(0.98);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(139, 0, 0, 0.15);
    }

    .category-tag {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(139, 0, 0, 0.9);
      color: white;
      padding: 0.4rem 1.2rem;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 20px;
      z-index: 2;
      // text-transform: uppercase;
      letter-spacing: 0.5px;
      backdrop-filter: blur(5px);
      box-shadow: 0 2px 10px rgba(139, 0, 0, 0.2);
    }

    .card-data {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, white, #fff5f5);
    }

    .card-data-flex {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-direction: column;

      @media (min-width: 1000px) {
        flex-direction: row;
        align-items: center;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #8b0000;
        margin: 0;
        order: 1;
        
        @media (min-width: 1000px) {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .subcategory {
        font-size: 1.3rem;
        color: #4a0000;
        opacity: 0.8;
        order: 2;
        
        @media (min-width: 1000px) {
          order: 1;
          flex-shrink: 0;
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: #fff5f5;
      border-top: 1px solid rgba(139, 0, 0, 0.1);
    }

    .card-data--price {
      font-size: 1.6rem;
      font-weight: 700;
      color: #8b0000;
      display: flex;
      align-items: center;
      gap: 0.4rem;

      &::before {
        content: '₹';
        font-size: 1.2rem;
        opacity: 0.8;
      }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 1.6rem;
      background: linear-gradient(120deg, #8b0000, #660000);
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(139, 0, 0, 0.2);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
        background: linear-gradient(120deg, #660000, #8b0000);
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export default FeatureProduct;


















// import { useProductContext } from "../context/productcontex";
// import styled from "styled-components";
// import Product from "./Product-home";
// import React from "react";

// const FeatureProduct = () => {
//   const { isLoading, featureProducts } = useProductContext();

//   // useEffect(() => {
//   //   console.log("Feature Products: ", featureProducts);
//   // }, [featureProducts]);

//   if (isLoading) {
//     return (
//       <LoadingContainer>
//         <LoadingSpinner>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </LoadingSpinner>
//       </LoadingContainer>
//     );
//   }

//   return (
//     <Wrapper className="section">
//       <div className="container">
//         <div className="section-header">
//           <div className="heading-group">
//             <h3 className="subheading">Featured Collection</h3>
//           </div>
//           <p className="description">
//             Discover our handpicked selection of premium products that combine style,
//             quality, and innovation.
//           </p>
//         </div>
//         <div className="products-grid">
//           {featureProducts.map((curElem) => (
//             <Product key={curElem.id} {...curElem} />
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const LoadingContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;

// const LoadingSpinner = styled.div`
//   --uib-size: 2.8rem;
//   --uib-speed: 0.9s;
//   --uib-color: #9c27b0;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: var(--uib-size);
//   width: var(--uib-size);

//   & > div {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     height: 100%;
//     width: 100%;
//   }

//   & > div::before {
//     content: '';
//     height: 20%;
//     width: 20%;
//     border-radius: 50%;
//     background-color: var(--uib-color);
//     transform: scale(0);
//     opacity: 0.5;
//     animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
//     box-shadow: 0 0 20px rgba(156, 39, 176, 0.3);
//   }
// `;

// const Wrapper = styled.section`
//   padding: 8rem 0;
//   background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);
  
//   .container {
//     max-width: 120rem;
//     margin: 0 auto;
//     padding: 0 2rem;
//   }

//   .section-header {
//     text-align: center;
//     margin-bottom: 6rem;
    
//     .heading-group {
//       margin-bottom: 2rem;
//     }
    
//     .subheading {
//       font-size: 2rem;
//       font-weight: 600;
//       color: #9c27b0;
//       text-transform: uppercase;
//       letter-spacing: 0.2rem;
//       margin-bottom: 1rem;
//       position: relative;
//       display: inline-block;
      
//       &::after {
//         content: '';
//         position: absolute;
//         bottom: -0.5rem;
//         left: 50%;
//         transform: translateX(-50%);
//         width: 80%;
//         height: 2px;
//         background: linear-gradient(120deg, #9c27b0, #673ab7);
//       }
//     }

//     .description {
//       max-width: 70rem;
//       margin: 0 auto;
//       color: #6a1b9a;
//       font-size: 1.6rem;
//       line-height: 1.6;
//       opacity: 0.9;
//     }
//   }

//   .products-grid {
//     display: grid;
//     gap: 2.5rem; /* Reduced gap for smaller cards */
//     grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Adjusted size of cards */
    
//     @media (min-width: 1200px) {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }

//   figure {
//     width: 100%;
//     height: 0;
//     padding-bottom: 100%; /* Keeps the card square */
//     position: relative;
//     overflow: hidden;
//     background: white;

//     img {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       width: 80%;
//       height: 80%;
//       object-fit: contain;
//       transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//       filter: brightness(.96);
//     }

//          &::after {
//       content: "";
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(to bottom, 
//         rgba(156, 39, 176, 0),
//         rgba(156, 39, 176, 0.1)
//       );
//       opacity: 0;
//       transition: all 0.3s ease;
//     }

//     &:hover {
//       &::after {
//         opacity: 1;
//       }

//       img {
//         transform: translate(-50%, -50%) scale(1.1);
//       }
//     }
//   }

//   .card {
//     background: white;
//     border: 1px solid #ddd; /* Border to define card edges */
//     border-radius: 0; /* Removed rounded edges */
//     overflow: hidden;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     transition: all 0.3s ease;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//     filter: brightness(0.96); /* Applied brightness filter */

//     &:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 10px 20px rgba(156, 39, 176, 0.2);
//     }

//     .category-tag {
//       position: absolute;
//       top: 1rem;
//       left: 1rem; /* Moved to the left side */
//       background: rgba(147, 51, 234, 0.9);
//       color: white;
//       padding: 0.4rem 0.8rem;
//       font-size: 1.2rem;
//       font-weight: 500;
//       border-radius: 0; /* Removed rounded edges */
//       z-index: 2;
//     }

//     .card-data {
//       padding: 1.5rem; /* Reduced padding for smaller card */
//       flex-grow: 1;
//       display: flex;
//       flex-direction: column;
//     }

//     .card-data-flex {
//       margin-top: auto;
//       padding-top: 1.5rem;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-wrap: wrap;

//       @media (max-width: 576px) {
//         flex-direction: column; /* Stack subcategory below */
//         align-items: flex-start;

//         .subcategory {
//           margin-top: 1rem;
//           font-size: 1.4rem;
//           color: #6a1b9a;
//         }
//       }
//     }

//     h3 {
//       font-size: 1.6rem;
//       font-weight: 600;
//       color: #4a148c;
//       margin-bottom: 0.5rem;
//     }

//     .card-data--price {
//       font-size: 1.8rem;
//       font-weight: 700;
//       color: #9c27b0;
//     }

//     .btn {
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       padding: 1rem 2rem;
//       background: linear-gradient(120deg, #9c27b0, #673ab7);
//       color: white;
//       font-size: 1.4rem;
//       font-weight: 500;
//       border-radius: 0; /* Removed rounded edges */
//       border: none;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 15px rgba(156, 39, 176, 0.2);
//       text-decoration: none;

//       &:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 8px 25px rgba(156, 39, 176, 0.3);
//       }

//       a {
//         color: white;
//         text-decoration: none;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 6rem 0;

//     .section-header {
//       .heading {
//         font-size: 3.2rem;
//       }

//       .description {
//         font-size: 1.4rem;
//       }
//     }

//     .products-grid {
//       gap: 1.5rem; /* Reduced gap for smaller screens */
//     }
//   }
// `;


// export default FeatureProduct;
