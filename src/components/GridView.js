import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pdpproduct from "./pdpproduct";
import { useLocation, useNavigate } from "react-router-dom";

const GridView = ({ products }) => {
  const productsPerPage = 12;
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page"), 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Reset to page 1 if current page is beyond total pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
      const newParams = new URLSearchParams(location.search);
      newParams.set("page", "1");
      navigate({ search: newParams.toString() }, { replace: true });
    }
  }, [totalPages, currentPage, navigate, location.search]);

  // Update URL when page changes
  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    newParams.set("page", currentPage.toString());
    navigate({ search: newParams.toString() }, { replace: true });
  }, [currentPage, navigate, location.search]);

  // Reset to page 1 when filter changes (products length changes)
  useEffect(() => {
    setCurrentPage(1);
    const newParams = new URLSearchParams(location.search);
    newParams.set("page", "1");
    navigate({ search: newParams.toString() }, { replace: true });
  }, [products.length, navigate]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToTop();
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    if (currentPage > 3) {
      pages.push("...");
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Wrapper className="section">
      <div className="products-heading">
        <h2 className="commoner-heading">Our Products</h2>
        <p className="suber-heading">
          Discover our carefully curated collection of premium products designed
          to elevate your lifestyle.
        </p>
      </div>
      <div className="container grid">
        {currentProducts.map((curElem) => (
          <Pdpproduct key={curElem.id} {...curElem} />
        ))}
      </div>

      {/* Only show pagination if there are products */}
      {products.length > 0 && (
        <div className="pagination">
          <button
            className="nav-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <span className="arrow-icon">←</span>
          </button>
          
          <div className="page-numbers">
            {getPageNumbers().map((number, index) => (
              number === "..." ? (
                <span key={`ellipsis-${index}`} className="ellipsis">...</span>
              ) : (
                <button
                  key={number}
                  className={`page-number ${currentPage === number ? "active" : ""}`}
                  onClick={() => handlePageClick(number)}
                >
                  {number}
                </button>
              )
            ))}
          </div>

          <button
            className="nav-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <span className="arrow-icon">→</span>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);

  .products-heading {
    text-align: center;
    margin-bottom: 4rem;
  }

  .commoner-heading {
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(to right, #8b0000, #a50000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0rem 0;
    // padding-top: 3rem;
    letter-spacing: -1px;
  }

  .suber-heading {
    text-align: center;
    color: #8b0000;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    gap: 4rem;

    /* Updated Responsive Grid Columns */
    @media (min-width: 1201px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
      gap: 4rem;
    }

    @media (max-width: 1200px) and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
      gap: 3rem;
      max-width: 90rem;
    }

    @media (max-width: 767px) and (min-width: 501px) {
      grid-template-columns: repeat(2, 1fr);/* 1 column for small screens */
      gap: 3rem;
      // max-width: 50rem;
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for very small screens */
      gap: 2rem;
      padding: 0 1rem;
    }

    @media (max-width: 368px) {
      grid-template-columns: 1fr; /* 1 column for tiny screens */
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem 1.5rem 0 0;
    background: white;
    padding: 2rem;
    transition: all 0.3s ease;
    filter: brightness(0.95);

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);

      @media (max-width: 500px) {
        height: 15rem; /* Smaller images for mobile grid */
      }
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .card {
    background: white;
    border-radius: 2rem;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(139, 0, 0, 0.1);
    }

    .card-data {
      padding: 2rem;

      @media (max-width: 500px) {
        padding: 1.5rem; /* Smaller padding for mobile */
      }
    }

    .category-tag {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: rgba(139, 0, 0, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      font-weight: 500;
      z-index: 2;

      @media (max-width: 500px) {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
      }
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.4;
      font-family: "Poppins", sans-serif;
      background: linear-gradient(135deg, #8b0000, #a50000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }

    .subcategory {
      color: #8b0000;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      // text-transform: uppercase;
      letter-spacing: 0.1rem;
      opacity: 0.8;

      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }

    .category {
      color: #8b0000;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.05rem;

      @media (max-width: 500px) {
        font-size: 1.1rem;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 4rem auto;
    padding: 0 2rem;
    max-width: 100%;
    overflow-x: auto;

    .page-numbers {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.5rem;
      height: 5.5rem;
      border: none;
      background: white;
      color: #8b0000;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(139, 0, 0, 0.1);

      &:hover:not(:disabled) {
        background: linear-gradient(135deg, #8b0000, #a50000);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 0, 0, 0.2);
      }

      &:disabled {
        background: #f5f5f5;
        color: #bbb;
        cursor: not-allowed;
        box-shadow: none;
      }
    }

    .page-number {
      min-width: 5.5rem;
      height: 5.5rem;
      padding: 0 0.5rem;
      border: none;
      background: white;
      color: #8b0000;
      font-size: 1.8rem;
      font-weight: 500;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(139, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover:not(.active) {
        background: linear-gradient(135deg, #8b0000, #a50000);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 0, 0, 0.2);
      }

      &.active {
        background: linear-gradient(135deg, #8b0000, #a50000);
        color: white;
        font-weight: 600;
        box-shadow: 0 8px 20px rgba(139, 0, 0, 0.2);
      }
    }

    .ellipsis {
      color: #8b0000;
      font-size: 1.6rem;
      padding: 0 0.5rem;
      user-select: none;
    }

    @media (max-width: 768px) {
      .nav-button,
      .page-number {
        width: 5rem;
        height: 5rem;
        font-size: 1.6rem;
      }

      .page-numbers {
        gap: 0.3rem;
      }
    }

    @media (max-width: 480px) {
      gap: 0.5rem;
      
      .nav-button,
      .page-number {
        width: 4.5rem;
        height: 4.5rem;
        font-size: 1.4rem;
      }

      .page-numbers {
        gap: 0.2rem;
      }
    }
  }
`;

export default GridView;









// import React from "react";
// import styled from "styled-components";
// import Pdpproduct from "./pdpproduct";

// const GridView = ({ products }) => {

//   return (
//     <Wrapper className="section">
//       <div className="products-heading">
//         <h2 className="commoner-heading">Our Products</h2>
//         <p className="suber-heading">
//           Discover our carefully curated collection of premium products designed
//           to elevate your lifestyle.
//         </p>
//       </div>
//       <div className="container grid">
//         {products.map((curElem) => (
//           <Pdpproduct key={curElem.id} {...curElem} />
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);

//   .products-heading {
//     text-align: center;
//     margin-bottom: 4rem;
//   }

//    .commoner-heading {
//             font-size: 3.5rem;
//             font-weight: 800;
//             text-align: center;
//             background: linear-gradient(to right, #9c27b0, #673ab7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             margin: 0rem 0;
//             padding-top: 3rem;
//             letter-spacing: -1px;
//         }

//         .suber-heading {
//             text-align: center;
//             color: #6a1b9a;
//             font-size: 1.2rem;
//             max-width: 600px;
//             margin: 0 auto 4rem;
//             line-height: 1.6;
//         }

//   .container {
//     max-width: 120rem;
//     margin: 0 auto;
//     display: grid;
//     gap: 4rem;

//     /* Responsive Grid Columns */
//     grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

//     @media (min-width: 1025px) {
//       grid-template-columns: repeat(3, 1fr); /* 3 columns for >1024px */
//     }

//     @media (max-width: 1024px) and (min-width: 576px) {
//       grid-template-columns: repeat(2, 1fr); /* 2 columns for 576px - 1024px */
//     }

//     @media (max-width: 575px) {
//       grid-template-columns: 1fr; /* 1 column for <576px */
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     border-radius: 1.5rem 1.5rem 0 0;
//     background: white;
//     padding: 2rem;
//     transition: all 0.3s ease;
//     filter: brightness(0.98);

//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//     }

//     &:hover img {
//       transform: scale(1.1);
//     }
//   }

//   .card {
//     background: white;
//     border-radius: 2rem;
//     overflow: hidden;
//     transition: all 0.3s ease;
//     position: relative;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
//     }

//     .card-data {
//       padding: 2rem;
//     }

//     .category-tag {
//       position: absolute;
//       top: 2rem;
//       right: 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       color: white;
//       padding: 0.5rem 1rem;
//       border-radius: 0;
//       font-size: 1.2rem;
//       font-weight: 500;
//       z-index: 2;
//     }

//     h3 {
//       font-size: 1.8rem;
//       font-weight: 600;
//       line-height: 1.4;
//       font-family: "Poppins", sans-serif;
//       background: linear-gradient(135deg, #4a148c, #6b46c1);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }

//     .subcategory {
//       color: #7c3aed;
//       font-size: 1.4rem;
//       font-weight: 500;
//       font-family: "Poppins", sans-serif;
//       text-transform: uppercase;
//       letter-spacing: 0.1rem;
//       opacity: 0.8;
//     }

//     .category {
//       color: #9333ea;
//       font-size: 1.3rem;
//       font-weight: 600;
//       letter-spacing: 0.05rem;
//     }
//   }

//    .pagination {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
//     margin: 4rem auto;
//     padding: 0 2rem;
//     max-width: 100%;
//     overflow-x: auto;

//     .page-numbers {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//     }

//     .nav-button {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 5.5rem;
//       height: 5.5rem;
//       border: none;
//       background: white;
//       color: #6a1b9a;
//       border-radius: 12px;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 12px rgba(106, 27, 154, 0.1);

//       &:hover:not(:disabled) {
//         background: linear-gradient(135deg, #9c27b0, #673ab7);
//         color: white;
//         transform: translateY(-2px);
//         box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
//       }

//       &:disabled {
//         background: #f5f5f5;
//         color: #bbb;
//         cursor: not-allowed;
//         box-shadow: none;
//       }
//     }

//     .page-number {
//       min-width: 5.5rem;
//       height: 5.5rem;
//       padding: 0 0.5rem;
//       border: none;
//       background: white;
//       color: #6a1b9a;
//       font-size: 1.8rem;
//       font-weight: 500;
//       border-radius: 12px;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 12px rgba(106, 27, 154, 0.1);
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       &:hover:not(.active) {
//         background: linear-gradient(135deg, #9c27b0, #673ab7);
//         color: white;
//         transform: translateY(-2px);
//         box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
//       }

//       &.active {
//         background: linear-gradient(135deg, #9c27b0, #673ab7);
//         color: white;
//         font-weight: 600;
//         box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
//       }
//     }

//     .ellipsis {
//       color: #6a1b9a;
//       font-size: 1.6rem;
//       padding: 0 0.5rem;
//       user-select: none;
//     }

//     @media (max-width: 768px) {
//       .nav-button,
//       .page-number {
//         width: 5rem;
//         height: 5rem;
//         font-size: 1.6rem;
//       }

//       .page-numbers {
//         gap: 0.3rem;
//       }
//     }

//     @media (max-width: 480px) {
//       gap: 0.5rem;
      
//       .nav-button,
//       .page-number {
//         width: 4.5rem;
//         height: 4.5rem;
//         font-size: 1.4rem;
//       }

//       .page-numbers {
//         gap: 0.2rem;
//       }
//     }
//   }
// `;

// export default GridView;














// // GridView.js
// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       <div className="section-header">
//         <h2>Our Products</h2>
//         <p>Discover our exclusive collection</p>
//       </div>
//       <div className="container grid grid-three-column">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);

//   .section-header {
//     text-align: center;
//     margin-bottom: 5rem;

//     h2 {
//       font-size: 3.2rem;
//       color: #8b0000;
//       margin-bottom: 1rem;
//       position: relative;
//       display: inline-block;

//       &:after {
//         content: "";
//         position: absolute;
//         bottom: -1rem;
//         left: 50%;
//         transform: translateX(-50%);
//         width: 50%;
//         height: 3px;
//         background: linear-gradient(90deg, transparent, #8b0000, transparent);
//       }
//     }

//     p {
//       color: #666;
//       font-size: 1.6rem;
//     }
//   }

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     gap: 3.2rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s ease;
//     border-radius: 1rem 1rem 0 0;

//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(139, 0, 0, 0.2);
//       transition: all 0.3s ease-in-out;
//       cursor: pointer;
//     }

//     &:hover::after {
//       width: 100%;
//     }

//     &:hover img {
//       transform: scale(1.1);
//     }

//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.3s ease-in-out;
//       object-fit: cover;
//     }

//     .caption {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       padding: 1rem;
//       background: rgba(139, 0, 0, 0.8);
//       color: white;
//       transform: translateY(100%);
//       transition: all 0.3s ease;
//       text-align: center;
//     }

//     &:hover .caption {
//       transform: translateY(0);
//     }
//   }

//   .card {
//     background-color: #ffffff;
//     border-radius: 1rem;
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
//     transition: all 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 8px 20px rgba(139, 0, 0, 0.1);
//     }

//     .card-data {
//       padding: 2rem;
//     }

//     .card-data-flex {
//       margin: 1rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .card-data--price {
//       color: #8b0000;
//       font-weight: 600;
//       font-size: 1.4rem;
//     }

//     h3 {
//       color: #333;
//       text-transform: capitalize;
//       font-size: 1.8rem;
//       transition: color 0.3s ease;
//     }

//     &:hover h3 {
//       color: #8b0000;
//     }

//     .btn {
//       margin: 2rem auto;
//       background-color: transparent;
//       border: 0.1rem solid #8b0000;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       transition: all 0.3s ease;
//       padding: 1rem 2rem;
//       border-radius: 0.5rem;

//       &:hover {
//         background-color: #8b0000;
//       }

//       &:hover a {
//         color: #fff;
//       }

//       a {
//         color: #8b0000;
//         font-size: 1.4rem;
//         text-decoration: none;
//         transition: color 0.3s ease;
//       }
//     }
//   }
// `;

// export default GridView;







// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       <div className="container grid grid-three-column">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     gap: 3.2rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
//   }

//   // .card {
//   //   background-color: ${({ theme }) => theme.colors.bg};
//   //   border-radius: 1rem;

//   //   .card-data {
//   //     padding: 0 1rem;
//   //   }

//   .card {
//     // background-color: #fff;
//     background-color:  #F6F8FA ;
//     border-radius: 1rem;

//     .card-data {
//       padding: 0 1rem;
      
//     }

//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }

//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       &:hover {
//         background-color: rgb(98 84 243);
//       }

//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: rgb(98 84 243);
//         font-size: 1.4rem;
//       }
//     }
//   }
// `;

// export default GridView;