import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";
import "./loader.css";
import Footer from "./components/Footer";

const API = "https://finalapi.vercel.app/api/products";

// Loading Spinner Component remains the same
const LoadingSpinner = () => (
  <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
    <circle
      className="pl__ring pl__ring--a"
      cx="120"
      cy="120"
      r="105"
      fill="none"
      stroke="#8b0000"
      strokeWidth="20"
      strokeDasharray="0 660"
      strokeDashoffset="-330"
      strokeLinecap="round"
    ></circle>
    <circle
      className="pl__ring pl__ring--b"
      cx="120"
      cy="120"
      r="35"
      fill="none"
      stroke="#8b0000"
      strokeWidth="20"
      strokeDasharray="0 220"
      strokeDashoffset="-110"
      strokeLinecap="round"
    ></circle>
    <circle
      className="pl__ring pl__ring--c"
      cx="85"
      cy="120"
      r="70"
      fill="none"
      stroke="#8b0000"
      strokeWidth="20"
      strokeDasharray="0 440"
      strokeLinecap="round"
    ></circle>
    <circle
      className="pl__ring pl__ring--d"
      cx="155"
      cy="120"
      r="70"
      fill="none"
      stroke="#8b0000"
      strokeWidth="20"
      strokeDasharray="0 440"
      strokeLinecap="round"
    ></circle>
  </svg>
);

const SingleProduct = () => {
  // Component logic remains the same
  const { ide } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [isSingleLoading, setIsSingleLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}?ide=${ide}`);
        if (response.ok) {
          const data = await response.json();
          setSingleProduct(data[0] || null);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
        setSingleProduct(null);
      } finally {
        setIsSingleLoading(false);
      }
    };

    fetchData();
  }, [ide]);

  // Render warranty information with enhanced styling
  const renderWarranty = () => (
    <WarrantyWrapper>
      <WarrantyCard>
        <div className="icon-container">
          <TbTruckDelivery className="warranty-icon" />
          <p>Courier Charges: ₹50/Kg</p>
        </div>
      </WarrantyCard>
      <WarrantyCard>
        <div className="icon-container">
          <TbReplace className="warranty-icon" />
          <p>15 Days Replacement</p>
        </div>
      </WarrantyCard>
      <WarrantyCard>
        <div className="icon-container">
          <TbUsersGroup className="warranty-icon" />
          <p>Satisfied Customers</p>
        </div>
      </WarrantyCard>
      <WarrantyCard>
        <div className="icon-container">
          <MdSecurity className="warranty-icon" />
          <p>2 Year Coverage</p>
        </div>
      </WarrantyCard>
    </WarrantyWrapper>
  );

  // Other render functions remain the same
  const renderFeatures = (features) => {
    if (!features || features.length === 0) return null;
    
    const validFeatures = features.filter(
      (feature) => feature && feature.toString().trim() !== ""
    );
    
    if (validFeatures.length === 0) return null;
    
    return (
      <FeaturesWrapper>
        <h3>Features</h3>
        <ul>
          {validFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </FeaturesWrapper>
    );
  };

  const renderFields = (product) => {
    const fieldMapping = {
      name: "Name",
      category: "Category",
      subcategory: "Subcategory",
      power: "Power",
      lumen: "Lumen",
      size: "Size",
      typeo: "Type",
      dimension: "Dimension",
      voltage1: "AC Voltage",
      voltage2: "Output Voltage",
      current: "Output Current",
      pf: "Power Factor",
      surge: "Surge",
      lengthy: "Length",
      cutsize: "Cut-Size",
    };
  
    return (
      <FieldsWrapper>
        {Object.keys(fieldMapping).reduce((acc, key) => {
          const value = product[key];
          if (value && value.toString().trim() !== "") {
            acc.push(
              <div className="field-item" key={key}>
                <span className="field-label">{fieldMapping[key]}:</span>
                <span className="field-value">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </div>
            );
          }
          return acc;
        }, [])}
      </FieldsWrapper>
    );
  };

  const renderColorSection = (colors) => {
    if (!colors || colors.length === 0) return null;
    
    return (
      <ColorWrapper>
        <h3>Colors</h3>
        <div className="color-circles">
          {colors.map((color, index) => (
            <ColorCircle key={index} color={color} />
          ))}
        </div>
      </ColorWrapper>
    );
  };

  if (isSingleLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (!singleProduct) {
    return <ErrorMessage>Data not available</ErrorMessage>;
  }

  return (
    <>
    <Wrapper>
      <Container className="container">
        <ProductCard className="grid grid-two-column">
          <ImageSection className="product-image-container">
            <div className="image-wrapper">
              <img src={singleProduct?.imageie} alt={singleProduct?.name} loading="lazy" />
              <div className="hover-overlay"></div>
            </div>
          </ImageSection>
          <InfoSection className="product-info">
            <div className="header">
              <span className="category">{singleProduct?.category}</span>
              <h1>{singleProduct?.name}</h1>
            </div>
            {renderFields(singleProduct)}
            {renderColorSection(singleProduct?.colors)}
            {renderWarranty()}
            {singleProduct?.features && renderFeatures(singleProduct?.features)}
          </InfoSection>
        </ProductCard>
      </Container>
    </Wrapper>
    <Footer />
    </>
  );
};

// Styled Components
const Wrapper = styled.section`
  background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);
  min-height: 100vh;
  padding: 4rem 0;

  .container {
    padding: 0 2rem;
  }
`;



const FeaturesWrapper = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(139, 0, 0, 0.1);

  h3 {
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-size: 1.8rem; // Increased font size
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: #8b0000;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding: 0.8rem 0 0.8rem 2rem;
      color: #333;
      font-size: 1.3rem; // Increased font size

      &::before {
        content: '•';
        color: #8b0000;
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        line-height: 1;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr; // Increased image section ratio
  gap: 4rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(139, 0, 0, 0.08);
  overflow: hidden;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled.div`
  padding: 2rem;
  background: linear-gradient(45deg, #fcfcfc, #f8f8f8);
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 400px; // Increased height
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
      filter: brightness(.93);
    }

    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(139, 0, 0, 0.3), transparent);
      opacity: 0;
      transition: all 0.4s ease;
    }

    &:hover {
      img {
        transform: scale(1.03); // Slightly increased scale effect
      }
      .hover-overlay {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
    .image-wrapper {
      height: 250px; 
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
     }
    }

   @media (max-width: 480px) {
    .image-wrapper {
      height: 200px; 
      img {
        width: 70%;
        height: 70%;
        object-fit: contain;
      }
     }
    }
  }
`;

const WarrantyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 2.5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2x2 grid for small screens
    gap: 1rem;
  }
`;

const WarrantyCard = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.1), transparent);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #8b0000;
    box-shadow: 0 10px 20px rgba(139, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }

    .icon-container .warranty-icon {
      transform: rotateY(360deg);
    }
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    .warranty-icon {
      color: #8b0000;
      font-size: 2.4rem; // Increased icon size
      transition: transform 0.6s ease;
    }

    p {
      color: #333;
      margin: 0;
      font-size: 1.3rem; // Increased font size
      line-height: 1.3;
      font-weight: 500;
    }
  }
`;

const InfoSection = styled.div`
  padding: 3rem;

  .header {
    margin-bottom: 2.5rem;

    .category {
      display: inline-block;
      background: #8b0000;
      color: white;
      padding: 0.6rem 1.8rem;
      border-radius: 50px;
      font-size: 1.4rem; // Increased font size
      margin-bottom: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h1 {
      font-size: 3.4rem; // Increased font size
      color: #1a1a1a;
      font-weight: 600;
      line-height: 1.2;
      margin: 0;
    }
  }
`;

const FieldsWrapper = styled.div`
  display: grid;
  gap: 1.2rem;
  margin: 2.5rem 0;

  .field-item {
    display: flex;
    align-items: center;
    padding: 1.2rem 1.8rem;
    background: white;
    border-radius: 12px;
    border: 1px solid rgba(139, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      border-color: #8b0000;
      transform: translateX(5px);
    }

    .field-label {
      font-weight: 600;
      color: #8b0000;
      min-width: 180px; // Increased width for larger font
      font-size: 1.5rem; // Increased font size
    }

    .field-value {
      color: #333;
      font-size: 1.5rem; // Increased font size
    }
  }
`;

const ColorWrapper = styled.div`
  margin: 2.5rem 0;
  
  h3 {
    color: #1a1a1a;
    margin-bottom: 1.8rem;
    font-size: 2rem; // Increased font size
  }

  .color-circles {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
`;

const ColorCircle = styled.div`
  width: 40px; // Increased size
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #e0e0e0; // Default border
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    border: 2px solid #8b0000;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.15);
    border-color: transparent;
    
    &::after {
      opacity: 1;
    }
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #8b0000;
  padding: 2rem;
  font-size: 1.5rem;
  background: #fff5f5;
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 500px;
`;

export default SingleProduct;
















// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Container } from "./styles/Container";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";
// import "./loader.css";

// const API = "https://finalapi.vercel.app/api/products";

// // Loading Spinner Component
// const LoadingSpinner = () => (
//   <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
//     <circle
//       className="pl__ring pl__ring--a"
//       cx="120"
//       cy="120"
//       r="105"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 660"
//       strokeDashoffset="-330"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--b"
//       cx="120"
//       cy="120"
//       r="35"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 220"
//       strokeDashoffset="-110"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--c"
//       cx="85"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--d"
//       cx="155"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//   </svg>
// );

// const SingleProduct = () => {
//   const { ide } = useParams();
//   const [singleProduct, setSingleProduct] = useState(null);
//   const [isSingleLoading, setIsSingleLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}?ide=${ide}`);
//         if (response.ok) {
//           const data = await response.json();
//           setSingleProduct(data[0] || null);
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error(error);
//         setSingleProduct(null);
//       } finally {
//         setIsSingleLoading(false);
//       }
//     };

//     fetchData();
//   }, [ide]);

//   // Render warranty information
//   const renderWarranty = () => (
//     <div className="product-data-warranty">
//       <div className="product-warranty-data">
//         <TbTruckDelivery className="warranty-icon" />
//         <p>Courier Charges: ₹50/Kg</p>
//       </div>
//       <div className="product-warranty-data">
//         <TbReplace className="warranty-icon" />
//         <p>15 Days Replacement</p>
//       </div>
//       <div className="product-warranty-data">
//         <TbUsersGroup className="warranty-icon" />
//         <p>Satisfied Customers</p>
//       </div>
//       <div className="product-warranty-data">
//         <MdSecurity className="warranty-icon" />
//         <p>2 Year Warranty</p>
//       </div>
//     </div>
//   );

//   // Render features as a list
//   const renderFeatures = (features) => {
//     if (!features || features.length === 0) {
//       return null; // No features to render
//     }
  
//     const validFeatures = features.filter(
//       (feature) => feature && feature.toString().trim() !== ""
//     );
  
//     if (validFeatures.length === 0) {
//       return null; // All features are empty, so skip rendering
//     }
  
//     return (
//       <div>
//         <b>Features:</b>
//         <ul>
//           {validFeatures.map((feature, index) => (
//             <li key={index}>{feature}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   // Render fields from product data
//   const renderFields = (product) => {
//     const fieldMapping = {
//       name: "Name",
//       category: "Category",
//       subcategory: "Subcategory",
//       power: "Power",
//       lumen: "Lumen",
//       size: "Size",
//       typeo: "Type",
//       dimension: "Dimension",
//       voltage1: "AC Voltage",
//       voltage2: "Output Voltage",
//       current: "Output Current",
//       pf: "Power Factor",
//       surge: "Surge",
//       lengthy: "Length",
//     };
  
//     return Object.keys(fieldMapping).reduce((acc, key) => {
//       const value = product[key];
//       if (value && value.toString().trim() !== "") {
//         acc.push(
//           <p key={key}>
//             <b>{fieldMapping[key]}:</b>{" "}
//             {Array.isArray(value) ? value.join(", ") : value}
//           </p>
//         );
//       }
//       return acc;
//     }, []);
//   };

//   // Render colors as circles
//   const renderColorSection = (colors) => {
//     if (colors && colors.length > 0) {
//       return (
//         <div>
//           <b>Colors:</b>
//           <ColorCircles>
//             {colors.map((color, index) => (
//               <ColorCircle key={index} color={color} />
//             ))}
//           </ColorCircles>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (isSingleLoading) {
//     return (
//       <LoadingContainer>
//         <LoadingSpinner />
//       </LoadingContainer>
//     );
//   }

//   if (!singleProduct) {
//     return <div className="error_message">Data not available</div>;
//   }

//   return (
//     <Wrapper>
//       <Container className="container">
//         <div className="grid grid-two-column mivi">
//           <div className="product_images">
//             <img src={singleProduct.imageie} alt={singleProduct.name} />
//           </div>
//           <div className="product-data">
//             <h2>{singleProduct.name}</h2>
//             {renderFields(singleProduct)}
//             {renderColorSection(singleProduct.colors)}
//             {renderWarranty()}
//             {singleProduct.features && renderFeatures(singleProduct.features)}
//           </div>
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };



// const ColorCircle = styled.div`
//   width: 24px; /* Adjust the size as needed */
//   height: 24px; /* Adjust the size as needed */
//   border-radius: 50%;
//   margin: 0.6rem;
//   background-color: ${(props) => props.color};
//   border: 2px solid black; /* Add a black border */
//   color: transparent; 
//   cursor: pointer; /* Add a pointer cursor */
//   transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions */

//   &:hover {
//     transform: scale(1.2); /* Apply scale transformation on hover */
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow on hover */
//   }
// `;


// const ColorCircles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;



// const LoadingContainer = styled.div`
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;


// const Wrapper = styled.section`

// background-color:  #F8CDA8;

//   .container {
//     padding: 7rem 0rem;
//     background-color:  #F8CDA8 ;    
//   }

//   ul {
//     font-family: "American Typewrite", sans-serif; /* Replace with your chosen font family */
//     font-size: 1.6rem; /* Adjust the font size as needed */
//   }
  
//   .grid {
//     display: grid;
//     gap: 10rem;
//     padding: 4em;
//   }

//   .mivi{
//     background-color:   #FFFFF0;
//     border-radius: 20px ;
//         border: 4px solid #8b0000;

//   }

//   .product_images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background-color: #FAF0DC;
//     background-color: #E1E2E2;
//     border-radius: 2px solid #E0E0B8;
//   }
  
//   .product_images img {
//     max-width: 100%; 
//     height: 70%; 
//   }

//   .productisdata{
//     font-size: 1.4rem;
//     // padding-top: 0.4rem;
//   }

//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 1rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;
        

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           color: #b22222;
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//           padding-right: 1rem;
//           padding-left: 1rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;

//     .product_images{
//       max-width: 90%; 
//       height: 110%; 
//     }
    
//     .img{
//       max-width: 100%;
//       height:100%
//     }

//     .product-data product-data-warranty productisdata hr{
//       width:70%;
//     }

//   }

//   @media screen and (max-width: 335px){
//     .product_images{
//       max-width: 75%; 
//       height: 80%; 
//     }
//   }
 
// `;

// export default SingleProduct;













































// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Container } from "./styles/Container";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";
// import "./loader.css";

// const API = "https://finalapi.vercel.app/api/products";

// const LoadingSpinner = () => (
//   <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
//     <circle
//       className="pl__ring pl__ring--a"
//       cx="120"
//       cy="120"
//       r="105"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 660"
//       strokeDashoffset="-330"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--b"
//       cx="120"
//       cy="120"
//       r="35"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 220"
//       strokeDashoffset="-110"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--c"
//       cx="85"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--d"
//       cx="155"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#8b0000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//   </svg>
// );

// const SingleProduct = () => {
//   const { ide } = useParams();
//   const [singleProduct, setSingleProduct] = useState(null);
//   const [isSingleLoading, setIsSingleLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}?ide=${ide}`);
//         if (response.ok) {
//           const data = await response.json();
//           setSingleProduct(data[0] || null);
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error(error);
//         setSingleProduct(null);
//       } finally {
//         setIsSingleLoading(false);
//       }
//     };

//     fetchData();
//   }, [ide]);

//   if (isSingleLoading) {
//     return (
//       <LoadingContainer>
//         <LoadingSpinner />
//       </LoadingContainer>
//     );
//   }

//   if (!singleProduct) {
//     return <div className="error_message">Data not available</div>;
//   }

//   const renderWarranty = () => (
//     <div className="product-data-warranty">
//       <div className="product-warranty-data">
//         <TbTruckDelivery className="warranty-icon" />
//         <p>Courier Charges: ₹50/Kg</p>
//       </div>
//       <div className="product-warranty-data">
//         <TbReplace className="warranty-icon" />
//         <p>15 Days Replacement</p>
//       </div>
//       <div className="product-warranty-data">
//         <TbUsersGroup className="warranty-icon" />
//         <p>Satisfied Customers</p>
//       </div>
//       <div className="product-warranty-data">
//         <MdSecurity className="warranty-icon" />
//         <p>2 Year Warranty</p>
//       </div>
//     </div>
//   );

//   const renderFeatures = (features) => (
//     <ul>
//       {features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//       ))}
//     </ul>
//   );

//   const renderFields = (product) => {
//     const fieldMapping = {
//       name: "Name",
//       category: "Category",
//       subcategory: "Subcategory",
//       power: "Power",
//       lumen: "Lumen",
//       size: "Size",
//       typeo: "Type",
//       dimension: "Dimension",
//       color: "Color",
//       voltage1: "AC Voltage",
//       voltage2: "Output Voltage",
//       current: "Output Current",
//       pf: "Power Factor",
//       surge: "Surge",
//       lengthy: "Length",
//     };

//     return Object.keys(fieldMapping).map((key) => {
//       if (product[key]) {
//         return (
//           <p key={key}>
//             <b>{fieldMapping[key]}:</b>{" "}
//             {Array.isArray(product[key]) ? product[key].join(", ") : product[key]}
//           </p>
//         );
//       }
//       return null;
//     });
//   };

//   return (
//     <Wrapper>
//       <Container className="container">
//         <div className="grid grid-two-column mivi">
//           <div className="product_images">
//             <img src={singleProduct.imageie} alt={singleProduct.name} />
//           </div>
//           <div className="product-data">
//             <h2>{singleProduct.name}</h2>
//             {renderFields(singleProduct)}
//             {renderWarranty()}
//             {singleProduct.features && (
//               <div>
//                 <b>Features:</b>
//                 {renderFeatures(singleProduct.features)}
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };



// const ColorCircle = styled.div`
//   width: 24px; /* Adjust the size as needed */
//   height: 24px; /* Adjust the size as needed */
//   border-radius: 50%;
//   margin: 0.6rem;
//   background-color: ${(props) => props.color};
//   border: 2px solid black; /* Add a black border */
//   color: transparent; 
//   cursor: pointer; /* Add a pointer cursor */
//   transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions */

//   &:hover {
//     transform: scale(1.2); /* Apply scale transformation on hover */
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow on hover */
//   }
// `;


// const ColorSection = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const ColorCircles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const InfoLabel = styled.span`
  
//   font-weight: bold; 
//   margin-right: 1rem;
//   font-size: 1.5rem;
// `;


// const LoadingContainer = styled.div`
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;






// const Wrapper = styled.section`

// background-color:  #F8CDA8;

//   .container {
//     padding: 7rem 0rem;
//     background-color:  #F8CDA8 ;
    
    
//   }

  




//   ul {
//     font-family: "American Typewrite", sans-serif; /* Replace with your chosen font family */
//     font-size: 1.6rem; /* Adjust the font size as needed */
//   }
  
 

//   .grid {
//     display: grid;
//     gap: 10rem;
//     padding: 4em;
//   }

//   .mivi{
//     background-color:   #FFFFF0;
//     border-radius: 20px ;
//         border: 4px solid #8b0000;

//   }

//   // .product_images {
//   //   display: flex;
//   //   align-items: center;
//   // }

//   .product_images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background-color: #FAF0DC;
//     background-color: #E1E2E2;
//     border-radius: 2px solid #E0E0B8;
//   }
  
//   .product_images img {
//     max-width: 100%; 
//     height: 70%; 
//   }

//   .productisdata{
//     font-size: 1.4rem;
//     // padding-top: 0.4rem;
//   }

//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 1rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;
        

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           color: #b22222;
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//           padding-right: 1rem;
//           padding-left: 1rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;

//     .product_images{
//       max-width: 90%; 
//       height: 110%; 
//     }
    
//     .img{
//       max-width: 100%;
//       height:100%
//     }

//     .product-data product-data-warranty productisdata hr{
//       width:70%;
//     }

//   }

//   @media screen and (max-width: 335px){
//     .product_images{
//       max-width: 75%; 
//       height: 80%; 
//     }
//   }
 
// `;

// export default SingleProduct;








































// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Container } from "./styles/Container";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";
// import './loader.css';

// const API = "https://finalapi.vercel.app/api/products";

// const LoadingSpinner = () => (
//   <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
//     <circle
//       className="pl__ring pl__ring--a"
//       cx="120"
//       cy="120"
//       r="105"
//       fill="none"
//       stroke="#000"
//       strokeWidth="20"
//       strokeDasharray="0 660"
//       strokeDashoffset="-330"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--b"
//       cx="120"
//       cy="120"
//       r="35"
//       fill="none"
//       stroke="#000"
//       strokeWidth="20"
//       strokeDasharray="0 220"
//       strokeDashoffset="-110"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--c"
//       cx="85"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//     <circle
//       className="pl__ring pl__ring--d"
//       cx="155"
//       cy="120"
//       r="70"
//       fill="none"
//       stroke="#000"
//       strokeWidth="20"
//       strokeDasharray="0 440"
//       strokeLinecap="round"
//     ></circle>
//   </svg>
// );

// const SingleProduct = () => {
//   const { ide } = useParams();
//   const [singleProduct, setSingleProduct] = useState(null);
//   const [isSingleLoading, setIsSingleLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}?ide=${ide}`);
//         if (response.ok) {
//           const data = await response.json();
//           if (Array.isArray(data) && data.length > 0) {
//             // Access the first (and only) element in the array
//             setSingleProduct(data[0]);
//           } else {
//             throw new Error("Data is empty or not in the expected format.");
//           }
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error(error);
//         setSingleProduct(null);
//       } finally {
//         setIsSingleLoading(false);
//       }
//     };

//     fetchData();
//   }, [ide]);

//   if (isSingleLoading) {
//     // return <div className="page_loading">Loading.....</div>;
   
//   return (
//     <LoadingContainer>
//        <LoadingSpinner />
//     </LoadingContainer>
//   );
//   }

//   if (!singleProduct) {
//     return <div className="error_message">Data not available</div>;
//   }

  

//   const {
//     name,
//     category,
//     subcategory,
//     imageie,
//     power,
//     lumen,
//     size,
//     colors,
//     features,
//     dimension,
//     lengthy,
//     color,
//     typeo,
//     voltage1,
//     voltage2,
//     current,
//     pf,
//     surge,
//     source
//   } = singleProduct;

//   const displayFields = (ide) => {
//     // Check the value of ide and conditionally render fields
//     if (ide >= "firstelectronicsa" && ide <= "firstelectronicsg") {

//       const bulletList = features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//       ));

//       const colorCircles = colors.map((color, index) => (
//         <ColorCircle key={index} color={color}>
//           {color}
//         </ColorCircle>
//       ));

//       return (
//         <div>
//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           {/* <img src={image} alt={name} /> */}
//           <p><b>Power: </b> {power.join(", ")}</p><br></br>
//           <p><b> Lumen: </b> {lumen.join(", ")}</p><br></br>
//           <p><b>Size: </b> {size.join(", ")}</p><br></br>
//           <p><b>Shape: </b> {typeo}</p>
          
//           <ColorSection>
//               <InfoLabel>Colors:</InfoLabel>
//               <ColorCircles>{colorCircles}</ColorCircles>
//           </ColorSection> <br /> <br /><br />

//           <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg</p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement</p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//             </div><br /><br />

//             <div className="productisdata">
//               <ul><b>Features: </b> <br /><br /> {bulletList}</ul>
//             </div>

          
//         </div>
//       );
//     } else if (ide >= "pacifica" && ide <= "pacificb") {
//       return(
//         <div>

//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           <p><b>Power: </b> {source.join(", ")}</p><br></br>
//           <p><b> Length: </b> {lengthy.join(", ")}</p><br></br>
//           <p><b>Color: </b> {color} </p><br></br>
//           <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
//           <div className="product-data">
//            <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//            </div>

//           </div>
//       </div>

//       );

//     }

//     else if (ide >= "accessa" && ide <= "accessf") {
//       return(
//         <div>
//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           <p><b>Dimension: </b> {dimension} </p><br></br>
//           <p><b>Color </b> {color} </p><br></br>

//           <div className="product-data">
//           <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//             </div>
//             </div>
          
        
          
//         </div>

//       );

//     }

//     else if (ide >= "lunatica" && ide <= "lunaticw") {
//       return(
//         <div>

//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           <p><b>AC Voltage: </b> {voltage1} </p><br></br>
//           <p><b>Output Voltage: </b> {voltage2} </p><br></br>
//           <p><b>Output Current: </b> {current} </p><br></br>
//           <p><b>PF: </b> {pf} </p><br></br>
//           <p><b>Surge: </b> {surge} </p><br></br>
//           <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
//           <div className="product-data">
//           <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//             </div>
//             </div>
          
//         </div>

//       );

//     }
    
    
    
    
//     else {
//       return (
//         <div>
//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           <p><b>Dimension: </b> {dimension} </p><br></br>
//           <p><b>Color: </b> {color} </p><br></br>
//           <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
//           <div className="product-data">
//           <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers   </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//             </div>
//             </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <Wrapper>
//       {/* <PageNavigation title={name} /> */}
//       <Container className="container">
//         <div className="grid grid-two-column mivi">
//            <div className="product_images">
//               <img src={imageie} alt={name} />
//             </div>

//             <div className="product-data">
//                 {displayFields(ide)}
//             </div>
          
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };




// const ColorCircle = styled.div`
//   width: 24px; /* Adjust the size as needed */
//   height: 24px; /* Adjust the size as needed */
//   border-radius: 50%;
//   margin: 0.6rem;
//   background-color: ${(props) => props.color};
//   border: 2px solid black; /* Add a black border */
//   color: transparent; 
//   cursor: pointer; /* Add a pointer cursor */
//   transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions */

//   &:hover {
//     transform: scale(1.2); /* Apply scale transformation on hover */
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow on hover */
//   }
// `;


// const ColorSection = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const ColorCircles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const InfoLabel = styled.span`
  
//   font-weight: bold; 
//   margin-right: 1rem;
//   font-size: 1.5rem;
// `;


// const LoadingContainer = styled.div`
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;






// const Wrapper = styled.section`

// background-color:  #F8CDA8;

//   .container {
//     padding: 7rem 0rem;
//     background-color:  #F8CDA8 ;
    
    
//   }

  




//   ul {
//     font-family: "American Typewrite", sans-serif; /* Replace with your chosen font family */
//     font-size: 1.6rem; /* Adjust the font size as needed */
//   }
  
 

//   .grid {
//     display: grid;
//     gap: 10rem;
//     padding: 4em;
//   }

//   .mivi{
//     background-color:   #FFFFF0;
//     border-radius: 20px ;
//         border: 4px solid #8b0000;

//   }

//   // .product_images {
//   //   display: flex;
//   //   align-items: center;
//   // }

//   .product_images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background-color: #FAF0DC;
//     background-color: #E1E2E2;
//     border-radius: 2px solid #E0E0B8;
//   }
  
//   .product_images img {
//     max-width: 100%; 
//     height: 70%; 
//   }

//   .productisdata{
//     font-size: 1.4rem;
//     // padding-top: 0.4rem;
//   }

//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 1rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;
        

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           color: #b22222;
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//           padding-right: 1rem;
//           padding-left: 1rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;

//     .product_images{
//       max-width: 90%; 
//       height: 110%; 
//     }
    
//     .img{
//       max-width: 100%;
//       height:100%
//     }

//     .product-data product-data-warranty productisdata hr{
//       width:70%;
//     }

//   }

//   @media screen and (max-width: 335px){
//     .product_images{
//       max-width: 75%; 
//       height: 80%; 
//     }
//   }
 
// `;

// export default SingleProduct;




