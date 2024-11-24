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


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    {
      src: "pics/196.jpg",
      title: "Rimless Surface Panel",
      link: "/products"
    },
    {
      src: "pics/195.jpg",
      title: "Smart 120+120 LED",
      link: "/products"
    },
    {
      src: "pics/197.jpg",
      title: "Led Panel Light",
      link: "/products"
    },
    {
      src: "pics/194.jpg",
      title: "130 LED Sensor",
      link: "/products"
    },
    {
      src: "pics/193.jpeg",
      title: "Motion Sensor",
      link: "/products"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleProductClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">HOT DEALS</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item" onClick={() => handleProductClick(image.link)}>
              <div className="product-card">
                <img src={image.src} alt={`Slide ${index + 1}`} />
                <h3 className="product-title">{image.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;