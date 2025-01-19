import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  // Get selected category from URL or default to "all"
  const selectedCategory = queryParams.get("category") || "all";

  const {
    filters: { text },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");

  // Sync category filter with URL changes
  useEffect(() => {
    updateFilterValue({ target: { name: "category", value: selectedCategory } });
  }, [selectedCategory, updateFilterValue]);

  const handleCategoryClick = (curElem) => {
    const newCategory = curElem === selectedCategory ? "all" : curElem;

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", "1");

    if (newCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", newCategory);
    }

    navigate({ search: searchParams.toString() });

    setIsFilterOpen(false);
  };

  const handleSearchChange = (e) => {
    updateFilterValue(e);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", "1");
    searchParams.set("search", e.target.value);
    navigate({ search: searchParams.toString() });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <Wrapper>
      <button className="mobile-filter-btn" onClick={toggleFilter}>
        {isFilterOpen ? "Close Filters" : "Open Filters"}
      </button>

      <div className={`filter-section ${isFilterOpen ? "show" : ""}`}>
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              placeholder="Search products..."
              value={text}
              onChange={handleSearchChange}
            />
          </form>
        </div>

        <div className="filter-category">
          <h3>Categories</h3>
          <div className="category-buttons">
            {categoryData.map((curElem, index) => (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === selectedCategory ? "active" : ""}
                onClick={() => handleCategoryClick(curElem)}
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};




const Wrapper = styled.section`
  .mobile-filter-btn {
    display: none;
  }

  .filter-section {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    // margin:1rem;
    box-shadow: 0 4px 10px rgba(139, 0, 0, 0.1);
    height: fit-content;
  }

  .filter-search {
    margin-bottom: 2.5rem;

    form {
      input {
        width: 100%;
        padding: 1rem 1.5rem;
        border: 2px solid rgba(139, 0, 0, 0.2);
        border-radius: 0.5rem;
        font-size: 1.6rem;
        color: #8b0000;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: #8b0000;
          box-shadow: 0 0 0 2px rgba(139, 0, 0, 0.1);
        }

        &::placeholder {
          color: rgba(139, 0, 0, 0.5);
        }
      }
    }
  }

  .filter-category {
    h3 {
      color: #8b0000;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      font-family: "Poppins", sans-serif;
      padding: 0;
    }

    .category-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        background: white;
        border: 2px solid rgba(139, 0, 0, 0.2);
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
        text-align: left;
        font-size: 1.5rem;
        color: #8b0000;
        transition: all 0.3s ease;
        cursor: pointer;
        width: 100%;
        text-transform: capitalize;

        &:hover {
          border-color: #8b0000;
          background: rgba(139, 0, 0, 0.05);
          transform: translateX(5px);
        }

        &.active {
          background: #8b0000;
          color: white;
          border-color: #8b0000;
          font-weight: 500;

          &:hover {
            transform: none;
            background: #8b0000;
          }
        }
      }
    }
  }

  /* Desktop Styles */
  @media (min-width: 769px) {
    position: sticky;
    top: 2rem;
    width: 100%;
    max-width: 30rem;

    .filter-section {
      margin-right: 2rem;
    }
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .mobile-filter-btn {
      display: block;
      width: auto;
      padding: 0.6rem 1.2rem;
      margin: 0;
      background: #8b0000;
      color: white;
      border: none;
      border-radius: 2rem;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(139, 0, 0, 0.15);
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1001;

      &:hover {
        background: #a50000;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .filter-section {
      display: none;
      margin: 0;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      z-index: 1000;
      border-radius: 2rem 2rem 0 0;
      padding: 2rem;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
      max-height: 80vh;
      overflow-y: auto;
      transform: translateY(100%);
      transition: transform 0.3s ease-in-out;

      &.show {
        display: block;
        transform: translateY(0);
      }
    }

    .filter-category {
      .category-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;

        button {
          text-align: center;
          padding: 0.8rem 1rem;
          font-size: 1.4rem;

          &:hover {
            transform: translateY(-2px);
          }
        }
      }
    }

    h3 {
      text-align: center;
    }
  }
`;

export default FilterSection;



















// import styled from "styled-components";
// import { useFilterContext } from "../context/filter_context";


// const FilterSection = () => {
//   const {
//     filters: { text, category},
//     updateFilterValue,
//     all_products,
//   } = useFilterContext();

//   // get the unique values of each property
//   const getUniqueData = (data, attr) => {
//     let newVal = data.map((curElem) => {
//       return curElem[attr];
//     });

//     return (newVal = ["all", ...new Set(newVal)]);
//   };

  
//   const categoryData = getUniqueData(all_products, "category");
//   // const colorsData = getUniqueData(all_products, "colors");
  

//   return (
//     <Wrapper>
//       <div className="filter-search">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             name="text"
//             placeholder="Search"
//             value={text}
//             onChange={updateFilterValue}
//           />
//         </form>
//       </div>

//       <div className="filter-category">
//         <h3>Category Filter:</h3>
//         <div>
//           {categoryData.map((curElem, index) => {
//             return (
//               <button
//                 key={index}
//                 type="button"
//                 name="category"
//                 value={curElem}
//                 className={curElem === category ? "active" : ""}
//                 onClick={updateFilterValue}>
//                 {curElem}
//               </button>
//             );
//           })}
//         </div>
//       </div>

      
//     </Wrapper>
//   );
// };


// import React from "react";
// import styled from "styled-components";
// import { useFilterContext } from "../context/filter_context";



// const FilterSection = () => {
//   const {
//     filters: { text, category },
//     updateFilterValue,
//     all_products,
//   } = useFilterContext();

//   const getUniqueData = (data, attr) => {
//     let newVal = data.map((curElem) => {
//       return curElem[attr];
//     });

//     return (newVal = ["all", ...new Set(newVal)]);
//   };

//   const categoryData = getUniqueData(all_products, "category");

//   const handleCategoryClick = (curElem) => {
//     // Prevent the default behavior of the button click
//     updateFilterValue({ target: { name: "category", value: curElem } });

//     // Scroll to the category section with a smooth effect
//     const targetElement = document.getElementById(curElem);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Convert both search text and product text to lowercase for a case-insensitive search
//   const searchCaseInsensitive = (textToSearch, productText) => {
//     return productText.toLowerCase().includes(textToSearch.toLowerCase());
//   };

//   const filteredProducts = all_products.filter((product) => {
//     // Use the searchCaseInsensitive function here
//     return searchCaseInsensitive(text, product.name); // Assuming product names are used for searching
//   });

//   return (
//     <Wrapper>
//       <div className="filter-search">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             name="text"
//             placeholder="Search"
//             value={text}
//             onChange={updateFilterValue}
//           />
//         </form>
//       </div>

//       <div className="filter-category">
//         <h3>Category Filter:</h3>
//         <div>
//           {categoryData.map((curElem, index) => {
//             return (
//               <button
//                 key={index}
//                 type="button"
//                 name="category"
//                 value={curElem}
//                 className={curElem === category ? "active" : ""}
//                 onClick={() => handleCategoryClick(curElem)}
//               >
//                 {curElem}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };




// const Wrapper = styled.section`
//   padding: 5rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;

//   h3 {
//     padding: 2rem 0;
//     font-weight: bold;
//     font-family:  "Lucida Console", "Courier New", monospace;;
//     font-size: 2rem;
//     // text-transform: uppercase;
//     letter-spacing: 0.6px;
//   }

//   .filter-search {
//     input {
//       padding: 0.6rem 1rem;
//       width: 90%;
//     }
//   }

//   .filter-category {
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 1.4rem;

//       button {
//         border: none;
//         background-color: ${({ theme }) => theme.colors.white};
//         text-transform: capitalize;
//         cursor: pointer;
//         border: 1px solid #BA993F;
//         border-radius: 4px;
//         transition: background-color 0.2s ease, color 0.2s ease;
//         width: 250px; /* Fixed width for the buttons */
//         height: 40px;

//         &:hover {
//           color: ${({ theme }) => theme.colors.btn};
//           // background-color: #fff;
//           border: 4px solid #8b0000;
//           padding: 6px;
//           transform: scale(1.05);
//           background-color: #ffffff;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           // font-weight: bold;
//         }
//       }

//       .active {
//         border-bottom: 1px solid #000;
//         color: ${({ theme }) => theme.colors.btn};
//         border: 1px solid #8b0000;
//       }
//     }

   
//   }

//   @media (max-width: 768px) {

//     .filter-search {
//       // input {
//       //   padding: 0.6rem 1rem;
//       //   width: 100%;
//       //   align-items: center;
//       // }
//       display: none;
//     }

//     .filter-category {
//       div {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         margin-bottom: 10px; 
//       }
  
//     .filter-category button {
//       width: 100%; /* Full width for buttons on smaller screens */
//       margin-right: 0; /* Remove margin between buttons */
//       margin-bottom: 10px; /* Add space between buttons in the same row */
//     }
//   }

  
// `;

// export default FilterSection;