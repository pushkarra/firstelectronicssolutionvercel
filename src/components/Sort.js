import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView } =
    useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="view-container">
        <div className="sorting-list--grid">
          <button
            className={grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
            aria-label="Grid View"
          >
            <BsFillGridFill className="icon" />
          </button>

          <button
            className={!grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setListView}
            aria-label="List View"
          >
            <BsList className="icon" />
          </button>
        </div>
      </div>

      <div className="product-count">
        <span className="count-number">{filter_products.length}</span>
        <span className="count-text">Products Available</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem 3rem;
  margin: 3rem auto;
  max-width: 120rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.08);
  transition: all 0.3s ease;

  // @media (max-width: 768px) {
  //   padding: 1.5rem 2rem;
  //   margin: 2rem 1.5rem;
  //   flex-direction: column;
  //   gap: 1.5rem;
  // }

  .view-container {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: -2rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 3rem;
      background: linear-gradient(to bottom, transparent, rgba(139, 0, 0, 0.2), transparent);

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .sorting-list--grid {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    background: #f8f8f8;
    border-radius: 1rem;
    transition: all 0.3s ease;

    .sort-btn {
      padding: 1rem;
      border: none;
      border-radius: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: transparent;
      transition: all 0.3s ease;

      &:hover:not(.active) {
        background: rgba(139, 0, 0, 0.08);
      }

      .icon {
        font-size: 1.8rem;
        color: #8b0000;
        transition: all 0.3s ease;
      }
    }

    .active {
      background: linear-gradient(135deg, #8b0000, #a50000);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);

      .icon {
        color: white;
      }
    }
  }

  .product-count {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #fff1f1, #ffe4e4);
    border-radius: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 0, 0, 0.1);
    }

    .count-number {
      font-size: 2.4rem;
      font-weight: 700;
      color: #8b0000;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #8b0000, #a50000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .count-text {
      font-size: 1.6rem;
      color: #8b0000;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1.5rem;
      
      .count-number {
        font-size: 2rem;
      }
      
      .count-text {
        font-size: 1.4rem;
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 12px 32px rgba(139, 0, 0, 0.12);
      transform: translateY(-2px);
    }
  }
`;

export default Sort;











// import React from "react";
// import styled from "styled-components";
// import { BsFillGridFill, BsList } from "react-icons/bs";
// import { useFilterContext } from "../context/filter_context";

// const Sort = () => {
//   const { filter_products, grid_view, setGridView, setListView } =
//     useFilterContext();
//   return (
//     <Wrapper className="sort-section">
     
//       <div className="sorting-list--grid">
//         <button
//           className={grid_view ? "active sort-btn" : "sort-btn"}
//           onClick={setGridView}>
//           <BsFillGridFill className="icon" />
//         </button>

//         <button
//           className={!grid_view ? "active sort-btn" : " sort-btn"}
//           onClick={setListView}>
//           <BsList className="icon" />
//         </button>
//       </div>
//       {/* 2nd column  */}
//       <div className="product-data">
//         <p>{`${filter_products.length} Products Available`}</p>
//       </div>

      
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 5rem;

//   .product-data{
//     border-radius: 10px ;
//     border: 3px solid black;
//     padding: 5px;
//   }

//   .sorting-list--grid {
//     display: flex;
//     gap: 2rem;

//     .sort-btn {
//       padding: 0.8rem 1rem;
//       border: none;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       cursor: pointer;
//     }

//     .icon {
//       font-size: 1.6rem;
//     }
//     .active {
//       background-color: ${({ theme }) => theme.colors.black};
//       color: #fff;
//     }
//   }

//   .sort-selection .sort-selection--style {
//     padding: 0.5rem;
//     cursor: pointer;

//     .sort-select--option {
//       padding: 0.5rem 0;
//       cursor: pointer;
//       height: 2rem;
//       padding: 10px;
//     }
//   }

//   p{
//     // font-weight: bold;
//     font-family: 'American Typewriter',serif;
//     font-size: 2rem;
//     color: #8b0000;
//   }
// `;

// export default Sort;