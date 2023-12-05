import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
// import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";


// const API = "https://productdataapi-production.up.railway.app/api/products";
const API = "https://finalapi.vercel.app/api/products";

const SingleProduct = () => {
  const { ide } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [isSingleLoading, setIsSingleLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}?ide=${ide}`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            // Access the first (and only) element in the array
            setSingleProduct(data[0]);
          } else {
            throw new Error("Data is empty or not in the expected format.");
          }
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

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  if (!singleProduct) {
    return <div className="error_message">Data not available</div>;
  }

  const {
    name,
    category,
    subcategory,
    imageie,
    power,
    lumen,
    size,
    colors,
    features,
    dimension,
    lengthy,
    color,
    typeo,
    voltage1,
    voltage2,
    current,
    pf,
    surge,
    source
  } = singleProduct;

  const displayFields = (ide) => {
    // Check the value of ide and conditionally render fields
    if (ide >= "firstelectronicsa" && ide <= "firstelectronicsg") {

      const bulletList = features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ));

      const colorCircles = colors.map((color, index) => (
        <ColorCircle key={index} color={color}>
          {color}
        </ColorCircle>
      ));

      return (
        <div>
          <h2>{name}</h2> <br></br> <br></br><br></br>
          <p><b>Category: </b> {category} </p><br></br>
          <p><b>Subcategory: </b> {subcategory} </p><br></br>
          {/* <img src={image} alt={name} /> */}
          <p><b>Power: </b> {power.join(", ")}</p><br></br>
          <p><b> Lumen: </b> {lumen.join(", ")}</p><br></br>
          <p><b>Size: </b> {size.join(", ")}</p><br></br>
          <p><b>Shape: </b> {typeo}</p>
          
          <ColorSection>
              <InfoLabel>Colors:</InfoLabel>
              <ColorCircles>{colorCircles}</ColorCircles>
          </ColorSection> <br /> <br /><br />

          <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Courier Charges: ₹50/Kg</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbUsersGroup className="warranty-icon" />
                <p>Satisfied Customers </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div><br /><br />

            <div className="productisdata">
              <ul><b>Features: </b> <br /><br /> {bulletList}</ul>
            </div>

          
        </div>
      );
    } else if (ide >= "pacifica" && ide <= "pacificb") {
      return(
        <div>

          <h2>{name}</h2> <br></br> <br></br><br></br>
          <p><b>Category: </b> {category} </p><br></br>
          <p><b>Subcategory: </b> {subcategory} </p><br></br>
          <p><b>Power: </b> {source.join(", ")}</p><br></br>
          <p><b> Length: </b> {lengthy.join(", ")}</p><br></br>
          <p><b>Color: </b> {color} </p><br></br>
          <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
          <div className="product-data">
           <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Courier Charges: ₹50/Kg   </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement   </p>
              </div>

              <div className="product-warranty-data">
                <TbUsersGroup className="warranty-icon" />
                <p>Satisfied Customers   </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
           </div>

          </div>
      </div>

      );

    }

    else if (ide >= "accessa" && ide <= "accessf") {
      return(
        <div>
          <h2>{name}</h2> <br></br> <br></br><br></br>
          <p><b>Category: </b> {category} </p><br></br>
          <p><b>Subcategory: </b> {subcategory} </p><br></br>
          <p><b>Dimension: </b> {dimension} </p><br></br>
          <p><b>Color </b> {color} </p><br></br>

          <div className="product-data">
          <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Courier Charges: ₹50/Kg   </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement   </p>
              </div>

              <div className="product-warranty-data">
                <TbUsersGroup className="warranty-icon" />
                <p>Satisfied Customers   </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            </div>
          
        
          
        </div>

      );

    }

    else if (ide >= "lunatica" && ide <= "lunaticw") {
      return(
        <div>

          <h2>{name}</h2> <br></br> <br></br><br></br>
          <p><b>Category: </b> {category} </p><br></br>
          <p><b>Subcategory: </b> {subcategory} </p><br></br>
          <p><b>AC Voltage: </b> {voltage1} </p><br></br>
          <p><b>Output Voltage: </b> {voltage2} </p><br></br>
          <p><b>Output Current: </b> {current} </p><br></br>
          <p><b>PF: </b> {pf} </p><br></br>
          <p><b>Surge: </b> {surge} </p><br></br>
          <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
          <div className="product-data">
          <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Courier Charges: ₹50/Kg   </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement   </p>
              </div>

              <div className="product-warranty-data">
                <TbUsersGroup className="warranty-icon" />
                <p>Satisfied Customers   </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            </div>
          
        </div>

      );

    }
    
    
    
    
    else {
      return (
        <div>
          <h2>{name}</h2> <br></br> <br></br><br></br>
          <p><b>Category: </b> {category} </p><br></br>
          <p><b>Subcategory: </b> {subcategory} </p><br></br>
          <p><b>Dimension: </b> {dimension} </p><br></br>
          <p><b>Color: </b> {color} </p><br></br>
          <p><b>Type: </b> {typeo} </p><br></br><br></br><br></br><br></br>
          
          <div className="product-data">
          <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Courier Charges: ₹50/Kg   </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement   </p>
              </div>

              <div className="product-warranty-data">
                <TbUsersGroup className="warranty-icon" />
                <p>Satisfied Customers   </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            </div>
        </div>
      );
    }
  };

  return (
    <Wrapper>
      {/* <PageNavigation title={name} /> */}
      <Container className="container">
        <div className="grid grid-two-column mivi">
           <div className="product_images">
              <img src={imageie} alt={name} />
            </div>

            <div className="product-data">
                {displayFields(ide)}
            </div>
          
        </div>
      </Container>
    </Wrapper>
  );
};






// Import other dependencies and components as before

const ColorCircle = styled.div`
  width: 24px; /* Adjust the size as needed */
  height: 24px; /* Adjust the size as needed */
  border-radius: 50%;
  margin: 0.6rem;
  background-color: ${(props) => props.color};
  border: 2px solid black; /* Add a black border */
  color: transparent; 
  cursor: pointer; /* Add a pointer cursor */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions */

  &:hover {
    transform: scale(1.2); /* Apply scale transformation on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow on hover */
  }
`;


const ColorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ColorCircles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoLabel = styled.span`
  
  font-weight: bold; 
  margin-right: 1rem;
  font-size: 1.5rem;
`;

// Rest of the code remains the same




const Wrapper = styled.section`

background-color:  #F8CDA8;

  .container {
    padding: 7rem 0rem;
    background-color:  #F8CDA8 ;
    
    
  }

  ul {
    font-family: "American Typewrite", sans-serif; /* Replace with your chosen font family */
    font-size: 1.6rem; /* Adjust the font size as needed */
  }
  
 

  .grid {
    display: grid;
    gap: 10rem;
    padding: 4em;
  }

  .mivi{
    background-color:   #FFFFF0;
    border-radius: 20px ;
        border: 4px solid #8b0000;

  }

  // .product_images {
  //   display: flex;
  //   align-items: center;
  // }

  .product_images {
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #FAF0DC;
    background-color: #E1E2E2;
    border-radius: 2px solid #E0E0B8;
  }
  
  .product_images img {
    max-width: 100%; 
    height: 70%; 
  }

  .productisdata{
    font-size: 1.4rem;
    // padding-top: 0.4rem;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;
        

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          color: #b22222;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
          padding-right: 1rem;
          padding-left: 1rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .product_images{
      max-width: 90%; 
      height: 110%; 
    }
    
    .img{
      max-width: 100%;
      height:100%
    }

    .product-data product-data-warranty productisdata hr{
      width:70%;
    }

  }

  @media screen and (max-width: 335px){
    .product_images{
      max-width: 75%; 
      height: 80%; 
    }
  }
 
`;

export default SingleProduct;




