// import React, { useState } from 'react';
// import styled from 'styled-components';

// const CarouselContainer = styled.div`
//   width: 90%;
//   margin: 2rem auto;
//   overflow: hidden;
//   position: relative;
// `;

// const CarouselWrapper = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out;
//   transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
// `;

// const ProductCard = styled.div`
//   min-width: 20%;
//   min-height:50%;
//   padding: 1rem;
//   background: #fff;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   border-radius: 15px;
//   text-align: center;

//   img {
//     width: 60%;
//     height: 80%;
//     border-radius: 10px;
//   }

//   h3 {
//     margin: 1rem 0 0.5rem;
//     font-size: 1.5rem;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//   }
// `;

// const NavButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: #8b0000;
//   color: white;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #ff4500;
//   }

//   &.prev {
//     left: 10px;
//   }

//   &.next {
//     right: 10px;
//   }
// `;

// const products = [
//   {
//     image: 'pics/122.png',
//     title: 'Product 1',
//     description: 'This is the first product in our lineup.',
//   },
//   {
//     image: 'pics/122.png',
//     title: 'Product 2',
//     description: 'Check out the features of our second product.',
//   },
//   {
//     image: 'pics/122.png',
//     title: 'Product 3',
//     description: 'This is the third product, known for its durability.',
//   },
//   {
//     image: 'pics/122.png',
//     title: 'Product 4',
//     description: 'Our fourth product comes with modern design.',
//   },
// ];

// const ProductCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <CarouselContainer>
//       <CarouselWrapper currentIndex={currentIndex}>
//         {products.map((product, index) => (
//           <ProductCard key={index}>
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//           </ProductCard>
//         ))}
//       </CarouselWrapper>
//       <NavButton className="prev" onClick={handlePrev}>Prev</NavButton>
//       <NavButton className="next" onClick={handleNext}>Next</NavButton>
//     </CarouselContainer>
//   );
// };

// export default ProductCarousel;


// import React, { useState, useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { NavLink } from 'react-router-dom';

// const carouselData = [
//   {
//     id: 1,
//     title: 'LUXORA',
//     price: '$4,800',
//     image: 'pics/122.png',
//   },
//   {
//     id: 2,
//     title: 'GRANDEUR',
//     price: '$3,900',
//     image: 'pics/123.png',
//   },
//   {
//     id: 3,
//     title: 'PRESTIGIO',
//     price: '$4,500',
//     image: 'pics/125.png',
//   },
//   {
//     id: 4,
//     title: 'N',
//     price: '$3,500',
//     image: 'pics/122.png',
//   },
//   {
//     id: 5,
//     title: '$2,200',
//     price: '',
//     image: 'pics/126.png',
//   },
// ];

// const Wrapper = styled.section`
//   padding: 8rem 0;
//   background: linear-gradient(135deg, #f0f0f0, #e6e6e6, #d8d8d8);
//   position: relative;
//   overflow: hidden;
// `;

// const CarouselContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
// `;

// const SlideWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   position: relative;
// `;

// const SlideContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 60%;
//   opacity: ${props => props.active ? 1 : 0.5};
//   transform: ${props => props.active ? 'scale(1)' : 'scale(0.8)'};
//   transition: all 0.5s ease;
//   z-index: ${props => props.active ? 10 : 1};
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   max-width: 500px;
//   height: 500px;
//   object-fit: cover;
//   border-radius: 15px;
//   box-shadow: 0 15px 35px rgba(0,0,0,0.1);
// `;

// const ProductTitle = styled.h2`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 2.5rem;
//   background: linear-gradient(45deg, #4a4a4a, #696969);
//   background-size: 200% auto;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   margin: 1.5rem 0;
//   font-weight: 900;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const ProductPrice = styled.span`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.8rem;
//   color: #696969;
//   font-weight: 700;
// `;

// const NavigationDots = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: ${props => props.active ? '#696969' : '#c0c0c0'};
//   margin: 0 10px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;

// const ProductButton = styled(NavLink)`
//   display: inline-block;
//   padding: 1rem 2.5rem;
//   background: linear-gradient(145deg, #4a4a4a, #696969);
//   color: white;
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 1rem;
//   letter-spacing: 3px;
//   border-radius: 50px;
//   box-shadow: 0 15px 25px rgba(74,74,74,0.2);
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       120deg, 
//       transparent, 
//       rgba(255,255,255,0.3), 
//       transparent
//     );
//     transition: all 0.4s ease;
//   }

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 20px 35px rgba(74,74,74,0.3);

//     &::before {
//       left: 100%;
//     }
//   }
// `;

// const ProductCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => 
//         (prevSlide + 1) % carouselData.length
//       );
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <Wrapper>
//       <CarouselContainer ref={carouselRef}>
//         <SlideWrapper>
//           {carouselData.map((slide, index) => {
//             const prevIndex = (index - 1 + carouselData.length) % carouselData.length;
//             const nextIndex = (index + 1) % carouselData.length;
            
//             return (
//               <SlideContainer 
//                 key={slide.id} 
//                 active={index === currentSlide}
//                 style={{
//                   position: index === currentSlide ? 'relative' : 'absolute',
//                   left: index === prevIndex ? '-30%' : index === nextIndex ? '30%' : '0',
//                 }}
//               >
//                 <ProductImage src={slide.image} alt={slide.title} />
//                 <ProductTitle>{slide.title}</ProductTitle>
//                 {slide.price && <ProductPrice>{slide.price}</ProductPrice>}
//                 <ProductButton to="/products">
//                   Add to Cart
//                 </ProductButton>
//               </SlideContainer>
//             );
//           })}
//         </SlideWrapper>
//       </CarouselContainer>
//       <NavigationDots>
//         {carouselData.map((_, index) => (
//           <Dot 
//             key={index}
//             active={index === currentSlide}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </NavigationDots>
//     </Wrapper>
//   );
// };

// export default ProductCarousel;




// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// const carouselData = [
//   {
//     id: 1,
//     title: 'LUXORA',
//     price: '$4,800',
//     image: 'pics/122.png',
//   },
//   {
//     id: 2,
//     title: 'GRANDEUR',
//     price: '$3,900',
//     image: 'pics/123.png',
//   },
//   {
//     id: 3,
//     title: 'PRESTIGIO',
//     price: '$4,500',
//     image: 'pics/125.jpg',
//   },
//   {
//     id: 4,
//     title: 'NOVA',
//     price: '$3,500',
//     image: 'pics/115.jpg',
//   },
//   {
//     id: 5,
//     title: 'ECONOMICO',
//     price: '$2,200',
//     image: 'pics/126.png',
//   },
// ];

// const Wrapper = styled.section`
//   padding: 4rem 0;
//   background: linear-gradient(to right, #f0f0f0, #e6e6e6);
//   position: relative;
//   overflow: hidden;
//   width: 100%;
//   max-width: 100vw;
//   margin: 0 auto;
//   height: 600px;
// `;

// const CarouselContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   perspective: 1000px;
// `;

// const SlideContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 20%;
//   height: 90%;
//   opacity: ${props => (props.active ? 1 : 0.5)};
//   transform: ${props =>
//     props.active
//       ? 'scale(1.1)'
//       : props.next || props.prev
//       ? 'scale(0.9)'
//       : 'scale(0.0)'};
//   transition: all 0.3s ease-in-out;
//   pointer-events: ${props => (props.active ? 'auto' : 'none')};
//   position: absolute;
//   left: ${props =>
//     props.active
//       ? '40%'
//       : props.prev
//       ? '10%'
//       : props.next
//       ? '70%'
//       : '-100%'};
//   z-index: ${props => (props.active ? 3 : props.next || props.prev ? 2 : 1)};
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 15px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
// `;

// const ProductTitle = styled.h2`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.8rem;
//   background: linear-gradient(45deg, #4a4a4a, #696969);
//   background-size: 200% auto;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   margin: 1rem 0;
//   font-weight: 900;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const ProductPrice = styled.span`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.3rem;
//   color: #696969;
//   font-weight: 700;
// `;

// const NavigationDots = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: ${props => (props.active ? '#8b0000' : '#c0c0c0')};
//   margin: 0 10px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;

// const ProductButton = styled(NavLink)`
//   display: inline-block;
//   padding: 0.8rem 2rem;
//   background: #8b0000;
//   color: white;
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 0.9rem;
//   letter-spacing: 2px;
//   border-radius: 50px;
//   box-shadow: 0 12px 20px rgba(139, 0, 0, 0.2);
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//     transition: all 0.4s ease;
//   }

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 16px 25px rgba(139, 0, 0, 0.3);

//     &::before {
//       left: 100%;
//     }
//   }
// `;

// const ProductCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide(prevSlide => (prevSlide + 1) % carouselData.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDotClick = index => {
//     setCurrentSlide(index);
//   };

//   return (
//     <Wrapper>
//       <CarouselContainer>
//         {carouselData.map((slide, index) => {
//           const isActive = index === currentSlide;
//           const isPrev = index === (currentSlide - 1 + carouselData.length) % carouselData.length;
//           const isNext = index === (currentSlide + 1) % carouselData.length;

//           return (
//             <SlideContainer
//               key={slide.id}
//               active={isActive}
//               prev={isPrev}
//               next={isNext}
//             >
//               <ProductImage src={slide.image} alt={slide.title} />
//               <ProductTitle>{slide.title}</ProductTitle>
//               {slide.price && <ProductPrice>{slide.price}</ProductPrice>}
//               <ProductButton to="/products">Add to Cart</ProductButton>
//             </SlideContainer>
//           );
//         })}
//       </CarouselContainer>
//       <NavigationDots>
//         {carouselData.map((_, index) => (
//           <Dot
//             key={index}
//             active={index === currentSlide}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </NavigationDots>
//     </Wrapper>
//   );
// };

// export default ProductCarousel;



// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// const carouselData = [
//   {
//     id: 1,
//     title: 'LUXORA',
//     price: '$4,800',
//     image: 'pics/122.png',
//   },
//   {
//     id: 2,
//     title: 'GRANDEUR',
//     price: '$3,900',
//     image: 'pics/123.png',
//   },
//   {
//     id: 3,
//     title: 'PRESTIGIO',
//     price: '$4,500',
//     image: 'pics/125.jpg',
//   },
//   {
//     id: 4,
//     title: 'NOVA',
//     price: '$3,500',
//     image: 'pics/115.jpg',
//   },
//   {
//     id: 5,
//     title: 'ECONOMICO',
//     price: '$2,200',
//     image: 'pics/126.png',
//   },
// ];

// const Wrapper = styled.section`
//   padding: 4rem 0 6rem;
//   background: linear-gradient(to right, #f0f0f0, #e6e6e6);
//   position: relative;
//   overflow: hidden;
//   width: 100vw;
//   max-width: 100vw;
//   height: 700px;

//     @media (max-width: 1080px) and (min-width: 768px) {
//     height: 520px; /* Reduced height for this range */
//   }

//   @media (max-width: 768px) {
//     height: 400px; 
//     padding: 2rem 0 4rem;
//   }
// `;

// const CarouselContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   perspective: 1000px;
// `;

// const SlideContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   width: 25%;
//   height: auto;
//   opacity: ${props => (props.active ? 1 : 0.5)};
//   transform: ${props =>
//     props.active
//       ? 'translateX(-10%) scale(1.1)'
//       : props.next || props.prev
//       ? 'translateX(-10%) scale(0.9)'
//       : 'translateX(-50%) scale(0.0)'};
//   transition: all 0.3s ease-in-out;
//   pointer-events: ${props => (props.active ? 'auto' : 'none')};
//   position: absolute;
//   left: ${props =>
//     props.active
//       ? '40%'
//       : props.prev
//       ? '10%'
//       : props.next
//       ? '70%'
//       : '-100%'};
//   z-index: ${props => (props.active ? 3 : props.next || props.prev ? 2 : 1)};


  
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 15px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
//   @media (max-width: 1280px) {
//     max-width: 320px;
//   }
//    @media (max-width: 768px) {
//     max-width: 250px;
//   }
// `;


// const Heading = styled.h1`
//   font-family: 'Poppins', sans-serif;
//   font-size: 2.5rem;
//   text-align: center;
//   color: #333;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   background: linear-gradient(to right, #8b0000, #e6e6e6);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const ProductTitle = styled.h2`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.8rem;
//   background: linear-gradient(45deg, #4a4a4a, #696969);
//   background-size: 200% auto;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   margin: 1rem 0;
//   font-weight: 900;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const ProductPrice = styled.span`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.3rem;
//   color: #696969;
//   font-weight: 700;
// `;

// const NavigationDots = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1rem;
//   bottom: 1rem;
// `;

// const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: ${props => (props.active ? '#8b0000' : '#c0c0c0')};
//   margin: 0 10px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;

// const ProductButton = styled(NavLink)`
//   display: inline-block;
//   padding: 0.8rem 2rem;
//   background: #8b0000;
//   color: white;
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 0.9rem;
//   letter-spacing: 2px;
//   border-radius: 50px;
//   box-shadow: 0 12px 20px rgba(139, 0, 0, 0.2);
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//     transition: all 0.4s ease;
//   }

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 16px 25px rgba(139, 0, 0, 0.3);

//     &::before {
//       left: 100%;
//     }
//   }
// `;

// const ProductCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide(prevSlide => (prevSlide + 1) % carouselData.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDotClick = index => {
//     setCurrentSlide(index);
//   };

//   return (
//     <Wrapper>
//       <Heading>Recommended Products</Heading>
//       <CarouselContainer>
//         {carouselData.map((slide, index) => {
//           const isActive = index === currentSlide;
//           const isPrev = index === (currentSlide - 1 + carouselData.length) % carouselData.length;
//           const isNext = index === (currentSlide + 1) % carouselData.length;

//           return (
//             <SlideContainer
//               key={slide.id}
//               active={isActive}
//               prev={isPrev}
//               next={isNext}
//             >
//               <ProductImage src={slide.image} alt={slide.title} />
//               <ProductTitle>{slide.title}</ProductTitle>
//               {slide.price && <ProductPrice>{slide.price}</ProductPrice>}
//               <ProductButton to="/products">Add to Cart</ProductButton>
//             </SlideContainer>
//           );
//         })}
//       </CarouselContainer>
//       <NavigationDots>
//         {carouselData.map((_, index) => (
//           <Dot
//             key={index}
//             active={index === currentSlide}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </NavigationDots>
//     </Wrapper>
//   );
// };

// export default ProductCarousel;



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const carouselData = [
  {
    id: 1,
    title: 'COB',
    price: '7 W',
    image: 'pics/201.jpeg',
  },
  {
    id: 2,
    title: 'COB CYLINDER',
    price: '12 W',
    image: 'pics/202.jpeg',
  },
  {
    id: 3,
    title: 'COB LIGHT',
    price: '12W',
    image: 'pics/203.jpeg',
  },
  {
    id: 4,
    title: 'LIGHT COB',
    price: '7 W',
    image: 'pics/204.jpeg',
  },
  {
    id: 5,
    title: 'PANEL DRIVER',
    price: '4 INCH',
    image: 'pics/8_c.jpg',
  },
];

const Wrapper = styled.section`
  padding: 4rem 0 6rem;
  background: linear-gradient(to right, #f0f0f0, #e6e6e6);
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  height: 700px;

  @media (max-width: 1320px) and (min-width: 1080px) {
    height: 590px;
  }
   

  @media (max-width: 1080px) and (min-width: 768px) {
    height: 520px;
  }

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    height: 420px;
    padding: 2rem 0 3rem;
  }
    @media (max-width: 524px) {
    height: auto;
    }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  perspective: 1000px;

  @media (max-width: 768px) and (min-width: 525px) {
    perspective: none;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 25%;
  height: auto;
  transition: all 0.3s ease-in-out;

  @media (min-width: 769px) {
    opacity: ${props => (props.active ? 1 : 0.5)};
    transform: ${props =>
      props.active
        ? 'translateX(-10%) scale(1.1)'
        : props.next || props.prev
        ? 'translateX(-10%) scale(0.9)'
        : 'translateX(-50%) scale(0.0)'};
    pointer-events: ${props => (props.active ? 'auto' : 'none')};
    left: ${props =>
      props.active
        ? '40%'
        : props.prev
        ? '10%'
        : props.next
        ? '70%'
        : '-100%'};
    z-index: ${props => (props.active ? 3 : props.next || props.prev ? 2 : 1)};
  }

  @media (max-width: 768px) and (min-width: 525px) {
    position: relative;
    width: 50%;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    flex: 0 0 50%;
  }

  @media (max-width: 524px) {
    position: relative;
    margin-top: 2rem;
    width: 100%;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    flex: 0 0 100%;
  }
`;


const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1280px) {
    max-width: 320px;
  }
  
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;


const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(to right, #8b0000, #696969);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProductTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #28231E, #696969);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 1rem 0;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

const ProductPrice = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  color: #696969;
  font-weight: 700;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  bottom: 1rem;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
  @media (max-width: 524px) {
    margin-top: 2rem;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => (props.active ? '#8b0000' : '#c0c0c0')};
  margin: 0 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ProductButton = styled(NavLink)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #8b0000;
  color: white;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: 0px;
  border-radius: 50px;
  box-shadow: 0 12px 20px rgba(139, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 25px rgba(139, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

// ... (previous imports and carouselData remain the same)

const SlidesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) and (min-width: 525px) {
    transform: translateX(-${props => props.currentSlide * (100 / Math.floor(props.totalSlides / 2))}%);
    width: ${props => props.totalSlides * 50}%;
    display: flex;
    flex-wrap: nowrap;
  }

  @media (max-width: 524px) {
    transform: translateX(-${props => props.currentSlide * 100}%);
    width: ${props => props.totalSlides * 100}%;
    display: flex;
    flex-wrap: nowrap;
  }
`;



const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMaxSlide = () => {
    if (windowWidth <= 524) {
      return carouselData.length - 1;
    } else if (windowWidth <= 768) {
      return Math.ceil(carouselData.length / 2) - 1; // Adjusted for last single item
    }
    return carouselData.length - 1;
  };

  useEffect(() => {
    const maxSlide = getMaxSlide();
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => {
        const nextSlide = prevSlide + 1;
        return nextSlide > maxSlide ? 0 : nextSlide;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [windowWidth]); // Include 'getMaxSlide' in the dependency array

  const handleDotClick = index => {
    setCurrentSlide(index);
  };

  const renderCarousel = () => {
    if (windowWidth > 768) {
      // Original carousel logic for larger screens
      return (
        <>
          {carouselData.map((slide, index) => {
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + carouselData.length) % carouselData.length;
            const isNext = index === (currentSlide + 1) % carouselData.length;

            return (
              <SlideContainer
                key={slide.id}
                active={isActive}
                prev={isPrev}
                next={isNext}
              >
                <ProductImage src={slide.image} alt={slide.title} />
                <ProductTitle>{slide.title}</ProductTitle>
                {/* {slide.price && <ProductPrice>{slide.price}</ProductPrice>} */}
                <ProductButton to="/products">Product Detail</ProductButton>
              </SlideContainer>
            );
          })}
        </>
      );
    }

    // New carousel logic for smaller screens
    return (
      <SlidesWrapper
        currentSlide={currentSlide}
        totalSlides={carouselData.length}
      >
        {carouselData.map((slide, index) => (
          <SlideContainer
            key={slide.id}
          >
            <ProductImage src={slide.image} alt={slide.title} />
            <ProductTitle>{slide.title}</ProductTitle>
            {/* {slide.price && <ProductPrice>{slide.price}</ProductPrice>} */}
            <ProductButton to="/products">Product Detail</ProductButton>
          </SlideContainer>
        ))}
      </SlidesWrapper>
    );
  };

  const getDotCount = () => {
    if (windowWidth <= 524) {
      return carouselData.length;
    } else if (windowWidth <= 768) {
      return Math.ceil(carouselData.length / 2); // Corrected to show proper number of dots
    }
    return carouselData.length;
  };

  const isActiveDot = (index) => {
    if (windowWidth <= 524) {
      return index === currentSlide;
    } else if (windowWidth <= 768) {
      // For tablet view, determine which pair is active
      const currentPair = Math.floor(currentSlide);
      return index === currentPair;
    }
    return index === currentSlide;
  };

  return (
    <Wrapper>
      <Heading>Trending Products</Heading>
      <CarouselContainer>
        {renderCarousel()}
      </CarouselContainer>
      <NavigationDots>
        {Array.from({ length: getDotCount() }).map((_, index) => (
          <Dot
            key={index}
            active={isActiveDot(index)}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
    </Wrapper>
  );
};

export default ProductCarousel;