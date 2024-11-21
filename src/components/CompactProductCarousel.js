import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const carouselData = [
  {
    id: 1,
    title: 'TRI-COLOR DRIVER',
    price: '$4,800',
    image: 'pics/122.png',
  },
  {
    id: 2,
    title: '4 INCH PANEL',
    price: '$3,900',
    image: 'pics/123.png',
  },
  {
    id: 3,
    title: 'LED DOWNLIGHT',
    price: '$4,500',
    image: 'pics/125.jpg',
  },
  {
    id: 4,
    title: 'SMART DRIVER',
    price: '$3,500',
    image: 'pics/199.jpeg',
  },
  {
    id: 5,
    title: '50W BULB',
    price: '$2,200',
    image: 'pics/126.png',
  },
];

const Wrapper = styled.section`
  padding: 2rem 0 3rem;
  background: linear-gradient(to right, #f0f0f0, #e6e6e6);
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  height: 400px;

  @media (max-width: 1080px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 320px;
    padding: 1rem 0 2rem;
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
  perspective: 800px;

  @media (max-width: 768px) {
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
        ? 'translateX(-10%) scale(1.05)'
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
    margin-top: 1rem;
    width: 100%;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    flex: 0 0 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1280px) {
    max-width: 250px;
    height: 220px;
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
    height: 180px;
  }
    @media (max-width: 524px) {
    max-width: 150px;
    height: 150px;
  }
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(to right, #8b0000, #696969);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  background: linear-gradient(45deg, #4a4a4a, #696969);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0.75rem 0;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProductPrice = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #696969;
  font-weight: 700;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.active ? '#8b0000' : '#c0c0c0')};
  margin: 0 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ProductButton = styled(NavLink)`
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: #8b0000;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(139, 0, 0, 0.2);
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
    box-shadow: 0 12px 20px rgba(139, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

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

const CompactProductCarousel = () => {
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
      return Math.ceil(carouselData.length / 2) - 1;
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
    }, 2000);

    return () => clearInterval(timer);
  }, [windowWidth]);

  const handleDotClick = index => {
    setCurrentSlide(index);
  };

  const renderCarousel = () => {
    if (windowWidth > 768) {
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
      return Math.ceil(carouselData.length / 2);
    }
    return carouselData.length;
  };

  const isActiveDot = (index) => {
    if (windowWidth <= 524) {
      return index === currentSlide;
    } else if (windowWidth <= 768) {
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
      {/* <NavigationDots>
        {Array.from({ length: getDotCount() }).map((_, index) => (
          <Dot
            key={index}
            active={isActiveDot(index)}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots> */}
    </Wrapper>
  );
};

export default CompactProductCarousel;



// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const carouselData = [
//   {
//     id: 1,
//     title: 'LUXORA',
//     image: 'pics/122.png',
//     link: '/products/luxora'
//   },
//   {
//     id: 2,
//     title: 'GRANDEUR',
//     image: 'pics/123.png',
//     link: '/products/grandeur'
//   },
//   {
//     id: 3,
//     title: 'PRESTIGIO',
//     image: 'pics/125.jpg',
//     link: '/products/prestigio'
//   },
//   {
//     id: 4,
//     title: 'NOVA',
//     image: 'pics/115.jpg',
//     link: '/products/nova'
//   },
//   {
//     id: 5,
//     title: 'ECONOMICO',
//     image: 'pics/126.png',
//     link: '/products/economico'
//   }
// ];

// const Wrapper = styled.section`
//   position: relative;
//   max-width: 100%;
//   padding: 3rem 0;
//   background: linear-gradient(to right, #f4f4f4, #e8e8e8);
// `;

// const Heading = styled.h2`
//   font-family: 'Poppins', sans-serif;
//   font-size: 2.5rem;
//   text-align: center;
//   color: #333;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   background: linear-gradient(to right, #8b0000, #696969);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   margin-bottom: 2rem;
// `;

// const CarouselContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1.5rem;
//   max-width: 1400px;
//   margin: 0 auto;
//   position: relative;
// `;

// const NavigationButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0,0,0,0.5);
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 10;
//   transition: background 0.3s ease;

//   &:hover {
//     background: rgba(0,0,0,0.7);
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
// `;

// const ProductsWrapper = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   transition: transform 0.3s ease;
//   width: 100%;
//   overflow: hidden;
// `;

// const ProductCard = styled.a`
//   flex: 0 0 calc((100% - 6rem) / 5);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-decoration: none;
//   transition: transform 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   border-radius: 15px;
//   box-shadow: 0 10px 20px rgba(0,0,0,0.1);

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (max-width: 1200px) {
//     flex: 0 0 calc((100% - 4.5rem) / 4);
//   }

//   @media (max-width: 768px) {
//     flex: 0 0 calc((100% - 3rem) / 3);
//   }

//   @media (max-width: 525px) {
//     flex: 0 0 calc((100% - 1.5rem) / 2);
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   aspect-ratio: 3/4;
//   object-fit: cover;
//   border-radius: 15px 15px 0 0;
//   transition: transform 0.3s ease;

//   ${ProductCard}:hover & {
//     transform: scale(1.1);
//   }
// `;

// const ProductOverlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//   color: white;
//   padding: 1rem;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   border-radius: 0 0 15px 15px;
// `;

// const ProductTitle = styled.span`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.1rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const TrendingProductsCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isNextDisabled, setIsNextDisabled] = useState(false);
//   const [isPrevDisabled, setIsPrevDisabled] = useState(true);

//   const getVisibleProducts = () => {
//     const width = window.innerWidth;
//     if (width < 525) return 2;
//     if (width < 1200) return 4;
//     return 5;
//   };

//   const handleNext = () => {
//     const visibleProducts = getVisibleProducts();
//     const maxIndex = Math.ceil(carouselData.length / visibleProducts) - 1;
//     setCurrentIndex(prev => {
//       const nextIndex = prev + 1;
//       setIsPrevDisabled(false);
//       setIsNextDisabled(nextIndex >= maxIndex);
//       return nextIndex;
//     });
//   };

//   const handlePrev = () => {
//     setCurrentIndex(prev => {
//       const nextIndex = prev - 1;
//       setIsPrevDisabled(nextIndex <= 0);
//       setIsNextDisabled(false);
//       return nextIndex;
//     });
//   };

//   const visibleProducts = getVisibleProducts();
//   const translateX = -currentIndex * (100 / visibleProducts);

//   return (
//     <Wrapper>
//       <Heading>Trending Products</Heading>
//       <CarouselContainer>
//         <NavigationButton direction="left" onClick={handlePrev} disabled={isPrevDisabled}>
//           <ChevronLeft />
//         </NavigationButton>
        
//         <ProductsWrapper 
//           style={{
//             transform: `translateX(${translateX}%)`,
//           }}
//         >
//           {carouselData.map((product) => (
//             <ProductCard 
//               key={product.id} 
//               href={product.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <ProductImage src={product.image} alt={product.title} />
//               <ProductOverlay>
//                 <ProductTitle>{product.title}</ProductTitle>
//               </ProductOverlay>
//             </ProductCard>
//           ))}
//         </ProductsWrapper>

//         <NavigationButton direction="right" onClick={handleNext} disabled={isNextDisabled}>
//           <ChevronRight />
//         </NavigationButton>
//       </CarouselContainer>
//     </Wrapper>
//   );
// };

// export default TrendingProductsCarousel;