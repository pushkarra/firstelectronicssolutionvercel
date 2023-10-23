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


import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";



const FilterSection = () => {
  const {
    filters: { text, category },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");

  const handleCategoryClick = (curElem) => {
    // Prevent the default behavior of the button click
    updateFilterValue({ target: { name: "category", value: curElem } });

    // Scroll to the category section with a smooth effect
    const targetElement = document.getElementById(curElem);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Convert both search text and product text to lowercase for a case-insensitive search
  const searchCaseInsensitive = (textToSearch, productText) => {
    return productText.toLowerCase().includes(textToSearch.toLowerCase());
  };

  const filteredProducts = all_products.filter((product) => {
    // Use the searchCaseInsensitive function here
    return searchCaseInsensitive(text, product.name); // Assuming product names are used for searching
  });

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category Filter:</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={() => handleCategoryClick(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};




const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h3 {
    padding: 2rem 0;
    font-weight: bold;
    font-family:  "Lucida Console", "Courier New", monospace;;
    font-size: 2rem;
    // text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 90%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        border: 1px solid #BA993F;
        border-radius: 4px;
        transition: background-color 0.2s ease, color 0.2s ease;
        width: 250px; /* Fixed width for the buttons */
        height: 40px;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
          // background-color: #fff;
          border: 4px solid #8b0000;
          padding: 6px;
          transform: scale(1.05);
          background-color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          // font-weight: bold;
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
        border: 1px solid #8b0000;
      }
    }

   
  }

  @media (max-width: 768px) {

    .filter-search {
      // input {
      //   padding: 0.6rem 1rem;
      //   width: 100%;
      //   align-items: center;
      // }
      display: none;
    }

    .filter-category {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px; 
      }
  
    .filter-category button {
      width: 100%; /* Full width for buttons on smaller screens */
      margin-right: 0; /* Remove margin between buttons */
      margin-bottom: 10px; /* Add space between buttons in the same row */
    }
  }

  
`;

export default FilterSection;