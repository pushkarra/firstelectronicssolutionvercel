import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    {
      src: "pics/196.jpg",
      title: "Rimless Surface Panel",
      link: "/singleproduct/newd"
    },
    {
      src: "pics/211.jpg",
      title: "Smart 196 LED",
      link: "/singleproduct/newk"
    },
    {
      src: "pics/5_d.jpg",
      title: "9 LED Downlight",
      link: "/singleproduct/newf"
    },
    {
      src: "pics/206.jpg",
      title: "Led Panel Light NP-2",
      link: "/singleproduct/newb"
    },
    {
      src: "pics/198.jpg",
      title: "Motion Sensor",
      link: "/singleproduct/newq"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const handleProductClick = (link) => {
    window.location.href = link;
  };

  return (
    <StyledCarousel>
      <div className="carousel-header">
        <span className="pre-title">Latest Products</span>
        <h2 className="carousel-title">NEWLY ARRIVED</h2>
        <div className="title-decoration"></div>
      </div>
      
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item" onClick={() => handleProductClick(image.link)}>
              <div className="product-card">
                <div className="image-container">
                  <img src={image.src} alt={image.title} />
                  <div className="hover-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{image.title}</h3>
                  <div className="product-badge">NEW</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);
  
  .carousel-header {
    text-align: center;
    margin-bottom: 1rem;
    
    .pre-title {
      display: block;
      font-size: 1.4rem;
      color: #8b0000;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 1rem;
    }

    .carousel-title {
      font-size: 3.6rem;
      font-weight: 800;
      color: #660000;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }

    .title-decoration {
      width: 6rem;
      height: 0.4rem;
      background: linear-gradient(90deg, #8b0000, #660000);
      margin: 0 auto;
      border-radius: 2rem;
    }
  }

  .carousel-container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .carousel-item {
    padding: 1rem;
  }

  .product-card {
    position: relative;
    background: white;
    border-radius: 1.6rem;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
    aspect-ratio: 4/4;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(139, 0, 0, 0.12);

      .hover-overlay {
        opacity: 1;
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 85%;
    overflow: hidden;
    background: #f8f9fa;
    // filter: brightness(.88);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 2rem;
      filter: brightness(.90);
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(139, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .view-details {
      color: white;
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem 2rem;
      border: 2px solid white;
      border-radius: 3rem;
      transform: translateY(10px);
      transition: all 0.3s ease;

      &:hover {
        background: white;
        color: #8b0000;
      }
    }
  }

  .product-info {
    padding: 1.5rem;
    position: relative;
  }

  .product-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #4a0000;
    text-align: center;
    margin: 0;
    padding-right: 4rem;
    line-height: 1.4;
  }

  .product-badge {
    position: absolute;
    top: -1rem;
    right: 1.5rem;
    background: linear-gradient(90deg, #8b0000, #660000);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);
  }

  /* Slick Carousel Custom Styles */
  .slick-dots {
    bottom: -4rem;

    li button:before {
      font-size: 1rem;
      color: #8b0000;
      opacity: 0.3;
      transition: all 0.3s ease;
    }

    li.slick-active button:before {
      color: #660000;
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    width: 4.8rem;
    height: 4.8rem;
    background: white;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(139, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 1;

    &:before {
      color: #8b0000;
      font-size: 2rem;
      transition: all 0.3s ease;
    }

    &:hover {
      background: #8b0000;
      box-shadow: 0 8px 24px rgba(139, 0, 0, 0.2);

      &:before {
        color: white;
      }
    }
  }

  .slick-prev {
    left: -6rem;
  }

  .slick-next {
    right: -6rem;
  }

  @media (max-width: 1200px) {
    .slick-prev {
      left: -4rem;
    }
    .slick-next {
      right: -4rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    .carousel-header {
      .carousel-title {
        font-size: 2.8rem;
      }
    }

    .slick-prev,
    .slick-next {
      width: 4rem;
      height: 4rem;
    }

    .slick-prev {
      left: -2rem;
    }
    .slick-next {
      right: -2rem;
    }
  }
`;

export default Carousel;











// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Carousel.css";

// const Carousel = () => {
//   const images = [
//     {
//       src: "pics/196.jpg",
//       title: "Rimless Surface Panel",
//       link: "/products"
//     },
//     {
//       src: "pics/195.jpg",
//       title: "Smart 120+120 LED",
//       link: "/products"
//     },
//     {
//       src: "pics/197.jpg",
//       title: "Led Panel Light",
//       link: "/products"
//     },
//     {
//       src: "pics/194.jpg",
//       title: "130 LED Sensor",
//       link: "/products"
//     },
//     {
//       src: "pics/193.jpeg",
//       title: "Motion Sensor",
//       link: "/products"
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const handleProductClick = (link) => {
//     window.location.href = link;
//   };

//   return (
//     <div className="carousel-wrapper">
//       <h2 className="carousel-title">HOT DEALS</h2>
//       <div className="carousel-container">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} className="carousel-item" onClick={() => handleProductClick(image.link)}>
//               <div className="product-card">
//                 <img src={image.src} alt={`Slide ${index + 1}`} />
//                 <h3 className="product-title">{image.title}</h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "./Carousel.css"; 

// const Carousel = () => {
//   const images = [
//     "pics/122.png", // Replace with your image paths
//     "pics/123.png",
//     "pics/125.jpg",
//     "pics/199.jpeg",
//     "pics/126.png",
//   ];

//   const settings = {
//     dots: true, // Display navigation dots
//     infinite: true, // Infinite looping
//     speed: 500, // Transition speed
//     slidesToShow: 4, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll
//     swipeToSlide: true, // Enable Swipe-to-Slide
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2, // Adjust for medium screens
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1, // Adjust for small screens
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="carousel-item">
//             <img src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
