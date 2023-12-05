// import React, { useState } from 'react';
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import styled from "styled-components";

// const SliderImage = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <Wrapper>
//     <section className='slider'>
//       <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//       <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? 'slide active' : 'slide'}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} alt='product' className='image' />
//             )}
//           </div>
//         );
//       })}
//     </section>
//     </Wrapper>
//   );
// };

import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from "styled-components";

const SliderImage = ({ slides, autoPlay }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds (adjust this value as needed)

      return () => {
        clearInterval(interval);
      };
    }
  }, [current, autoPlay]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='product' className='image' />
              )}
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};



const Wrapper = styled.section`



.slider {
    position: relative;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #f0ffff  ;
    background-color: #f0ffff  ;
    border-radius: 20px;
    border: 3px solid #8b0000;
  }
  
  .image {
    width: 470px;
    height: 380px;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    font-size: 3rem;
    color: #8b0000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 15px;
    font-size: 3rem;
    color: #8b0000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }


 

  @media screen and (max-width : 450px){

    .slider {
        position: relative;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .image {
        width: 220px;
        height: 230px;
        border-radius: 10px;
      }
  
  
  }

  

  @media screen and (max-width : 650px){

    .slider {
        position: relative;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .image {
        width: 270px;
        height: 260px;
        border-radius: 10px;
      }


  }



  // @media screen and (max-width : 1050px){

  //   .slider {
  //       position: relative;
  //       height: 70vh;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //     }
      
  //     .image {
  //       width: 37rem;
  //       height: 35rem;
  //       border-radius: 10px;
  //     }


  // }


;`

export default SliderImage;