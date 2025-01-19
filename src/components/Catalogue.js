import React from 'react';
import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react';

const Catalogue = () => {
  const websiteUrl = "https://www.firstelectronics.in/";

  return (
    <Wrapper>
      <div className="wrapped">
        <div className="qr-container">
          <div className="header-section">
            <h2>Scan & Explore Our Products</h2>
            <p className="subtitle">Access our complete product catalogue instantly</p>
          </div>
          <div className="qr-code-wrapper">
            <QRCodeCanvas 
              value={websiteUrl} 
              size={256}
              fgColor="#8b0000"
              level="H"
            />
          </div>
          <div className="download-info">
            <div className="scan-instruction">
              <p>📱 Scan with your phone camera</p>
              <p className="divider">or</p>
              <p className="download-link">
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <span className="arrow">→</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);
  
  .wrapped {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 4rem 2rem;
  }

  .qr-container {
    background: white;
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.08);
    max-width: 500px;
    width: 100%;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(139, 0, 0, 0.12);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, #8b0000, #ff4444);
    }

    .header-section {
      margin-bottom: 2.5rem;

      h2 {
        color: #8b0000;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      .subtitle {
        color: #666;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    .qr-code-wrapper {
      background: #fff;
      padding: 2rem;
      border-radius: 20px;
      display: inline-block;
      box-shadow: 0 8px 25px rgba(139, 0, 0, 0.08);
      margin-bottom: 2rem;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.02);
        box-shadow: 0 12px 30px rgba(139, 0, 0, 0.12);
      }

      canvas {
        display: block;
      }
    }

    .download-info {
      .scan-instruction {
        p {
          color: #555;
          font-size: 1.5rem;
          margin: 0.8rem 0;
          line-height: 1.6;
        }

        .divider {
          color: #999;
          font-size: 1.4rem;
          margin: 1rem 0;
          position: relative;
          
          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 50px;
            height: 1px;
            background: #ddd;
          }

          &::before {
            right: 60%;
          }

          &::after {
            left: 60%;
          }
        }

        .download-link {
          margin-top: 1.5rem;

          a {
            color: #8b0000;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.6rem;
            padding: 1rem 2rem;
            border: 2px solid #8b0000;
            border-radius: 50px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 1rem;

            .arrow {
              transition: transform 0.3s ease;
            }

            &:hover {
              background: #8b0000;
              color: white;

              .arrow {
                transform: translateX(5px);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .qr-container {
      padding: 2rem;
      margin: 1.5rem;

      .header-section h2 {
        font-size: 1.8rem;
      }

      .qr-code-wrapper {
        padding: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    .wrapped {
      padding: 2rem 1rem;
    }

    .qr-container {
      padding: 1.5rem;

      .header-section h2 {
        font-size: 1.6rem;
      }

      .qr-code-wrapper {
        padding: 1rem;
      }

      .download-info .scan-instruction {
        .download-link a {
          padding: 0.8rem 1.6rem;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default Catalogue;








// import React from 'react';
// import styled from "styled-components";
// import { QRCodeCanvas } from 'qrcode.react';

// const Catalogue = () => {
//   const websiteUrl = "https://www.firstelectronics.in/"; // Replace with your actual website URL

//   return (
//     <Wrapper>
//       <div className="wrapped">
//         <div className="qr-container">
//           <h2>Scan this QR Code to Visit Our Website and Explore Variety of Products</h2>
//           <div className="qr-code-wrapper">
//             <QRCodeCanvas value={websiteUrl} size={256} />
//           </div>
//           <div className="download-info">
//             <p>Scan with your phone to visit the website directly.</p>
//             <p className="download-link">
//               OR <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Click here</a> to visit.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// // Styled-components for styling
// const Wrapper = styled.section`
//   background-color: #f5f7fa;
  
//   .wrapped {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 60vh;
//     padding: 2rem;
//   }

//   .qr-container {
//     background: white;
//     padding: 2.5rem;
//     border-radius: 20px;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//     max-width: 500px;
//     width: 100%;
//     text-align: center;
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//     }

//     h2 {
//       color: #2d3748;
//       font-size: 1.7rem;
//       font-weight: 600;
//       margin-bottom: 2rem;
//       line-height: 1.4;
//     }

//     .qr-code-wrapper {
//       background: white;
//       padding: 1.5rem;
//       border-radius: 15px;
//       display: inline-block;
//       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//       margin-bottom: 1.5rem;

//       canvas {
//         display: block;
//       }
//     }

//     .download-info {
//       p {
//         color: #4a5568;
//         font-size: 1.5rem;
//         margin: 0.8rem 0;
//         line-height: 1.6;
//       }

//       .download-link {
//         font-weight: 500;

//         a {
//           color: #4299e1;
//           text-decoration: none;
//           position: relative;
//           font-weight: 600;
//           padding-bottom: 2px;
//           transition: color 0.2s ease;

//           &:after {
//             content: '';
//             position: absolute;
//             width: 100%;
//             height: 2px;
//             bottom: 0;
//             left: 0;
//             background-color: #4299e1;
//             transform: scaleX(0);
//             transform-origin: bottom right;
//             transition: transform 0.3s ease;
//           }

//           &:hover {
//             color: #2b6cb0;

//             &:after {
//               transform: scaleX(1);
//               transform-origin: bottom left;
//             }
//           }
//         }
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .qr-container {
//       padding: 1.5rem;
//       margin: 1rem;

//       h2 {
//         font-size: 1.25rem;
//       }

//       .qr-code-wrapper {
//         padding: 1rem;
//       }
//     }
//   }

//   @media (max-width: 480px) {
//     .wrapped {
//       padding: 1rem;
//     }

//     .qr-container {
//       padding: 1rem;

//       h2 {
//         font-size: 1.1rem;
//       }

//       .qr-code-wrapper {
//         padding: 0.75rem;
//       }
//     }
//   }
// `;

// export default Catalogue;
