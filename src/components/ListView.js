import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const ListView = ({ products }) => {
  const productsPerPage = 6;
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page"), 10) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Sync the currentPage with the URL on initial load and URL changes
  useEffect(() => {
    const pageFromURL = parseInt(queryParams.get("page"), 10) || 1;
    if (pageFromURL !== currentPage) {
      setCurrentPage(pageFromURL);
    }
  }, [location.search, queryParams]);

  // Update the URL when currentPage changes
  const updateURL = (page) => {
    const newParams = new URLSearchParams(location.search);
    newParams.set("page", page.toString());
    navigate({ search: newParams.toString() }, { replace: true });
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      updateURL(page);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
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
        {currentProducts.map((curElem) => {
          const { id, name, image, category, typeo } = curElem;
          return (
            <div key={id} className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p className="category">Category: {category}</p>
                <p className="type">Type: {typeo}</p>
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>

      {products.length > 0 && (
        <div className="pagination">
          <button
            className="arrow-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <span className="arrow-icon">←</span>
          </button>

          <div className="page-numbers">
            {getPageNumbers().map((number, index) =>
              number === "..." ? (
                <span key={`ellipsis-${index}`} className="ellipsis">
                  ...
                </span>
              ) : (
                <button
                  key={number}
                  className={`page-btn ${
                    currentPage === number ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(number)}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            className="arrow-btn"
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
  padding: 0 0 2rem;
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
    padding-top: 3rem;
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
    padding: 0 2rem;

    @media (max-width: 1200px) {
      max-width: 90rem;
    }
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column {
    grid-template-columns: 0.8fr 1.2fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    border-radius: 1rem;
    background: white;
    padding: 2rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      // background-color: rgba(139, 0, 0, 0.3);
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
      object-fit: contain;
      

      @media (max-width: 768px) {
        height: 25rem;
      }

      @media (max-width: 500px) {
        height: 20rem;
      }
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    gap: 1.2rem;
    padding: 0 2rem;

    .page-numbers {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .arrow-btn {
      background-color: white;
      color: #8b0000;
      border: 2px solid #8b0000;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover:not(:disabled) {
        background-color: #8b0000;
        color: white;
        transform: translateY(-2px);
      }

      &:disabled {
        background-color: #f5f5f5;
        border-color: #ddd;
        color: #999;
        cursor: not-allowed;
      }

      .arrow-icon {
        font-size: 1.8rem;
        line-height: 1;
      }

      @media (max-width: 480px) {
        width: 3.6rem;
        height: 3.6rem;
      }
    }

    .page-btn {
      background-color: white;
      color: #8b0000;
      border: 2px solid #8b0000;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover:not(.active) {
        background-color: #fff1f1;
        transform: translateY(-2px);
      }

      &.active {
        background-color: #8b0000;
        color: white;
        transform: scale(1.1);
      }

      @media (max-width: 480px) {
        width: 3.6rem;
        height: 3.6rem;
        font-size: 1.4rem;
      }
    }

    .ellipsis {
      color: #8b0000;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 0 0.5rem;
    }

    @media (max-width: 768px) {
      margin-top: 3rem;
      gap: 1rem;
    }

    @media (max-width: 480px) {
      gap: 0.8rem;
    }
  }

  .card {
    border: 0.1rem solid rgba(139, 0, 0, 0.2);
    border-radius: 1rem;
    background: white;
    box-shadow: 0 5px 15px rgba(139, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(139, 0, 0, 0.15);
    }

    .card-data {
      padding: 2rem;

      @media (max-width: 768px) {
        padding: 1.5rem;
        text-align: center;
      }
    }

    h3 {
      margin: 2rem 0;
      font-weight: 600;
      font-size: 2.4rem;
      text-transform: capitalize;
      color: #8b0000;
      font-family: "Poppins", sans-serif;

      @media (max-width: 768px) {
        font-size: 2rem;
        margin: 1.5rem 0;
      }
    }

    .category, .type {
      color: #8b0000;
      font-size: 1.6rem;
      margin: 1rem 0;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    .btn {
      margin: 2rem 0;
      background-color: transparent;
      border: 0.2rem solid #8b0000;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #8b0000;
      font-weight: 500;
      padding: 1.2rem 2.4rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: #8b0000;
        color: white;
      }

      a {
        color: inherit;
        font-size: 1.4rem;
        text-decoration: none;
      }

      @media (max-width: 768px) {
        margin: 1.5rem auto;
        padding: 1rem 2rem;
        max-width: 20rem;
      }
    }

    .btn-main .btn:hover {
      color: white;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

export default ListView;








// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";

// const ListView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       <div className="container grid">
//         {products.map((curElem) => {
//           const { id, name, image, category, typeo } = curElem;
//           return (
//             <div className="card grid grid-two-column">
//               <figure>
//                 <img src={image} alt={name} />
//               </figure>

//               <div className="card-data">
//                 <h3>{name}</h3>
//                 <p>
//                   Category : {category} 
//                 </p>
//                 <p>Type: {typeo}</p>

//                 <NavLink to={`/singleproduct/${id}`} className="btn-main">
//                   <Button className="btn">Read More</Button>
//                 </NavLink>
//               </div>
//             </div>
//           );
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

//   .card {
//     border: 0.1rem solid rgb(170 170 170 / 40%);

//     .card-data {
//       padding: 0 2rem;
//     }

//     h3 {
//       margin: 2rem 0;
//       font-weight: 300;
//       font-size: 2.4rem;
//       text-transform: capitalize;
//     }

//     .btn {
//       margin: 2rem 0;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid #8b0000;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: #8b0000;

//       &:hover {
//         background-color: #8b0000;
//       }

//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: #8b0000;
//         font-size: 1.4rem;
//       }
//     }

//     .btn-main .btn:hover {
//       color: #fff;
//     }
//   }
// `;

// export default ListView;