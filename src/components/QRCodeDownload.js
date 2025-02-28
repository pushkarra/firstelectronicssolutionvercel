import React from 'react';
import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDownload = () => {
  const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`;

  return (
    <Wrapper>
      <div className="wrapped">
        <div className="qr-container">
          <div className="header-section">
            <h2>Download Our Product Catalogue</h2>
            <p className="subtitle">Scan to get our complete product brochure on your device</p>
          </div>
          <div className="qr-code-wrapper">
            <div className="qr-frame">
              <QRCodeCanvas 
                value={fileUrl} 
                size={256}
                fgColor="#8b0000"
                level="H"
              />
            </div>
            <div className="download-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
          </div>
          <div className="download-info">
            <div className="scan-instruction">
              <p>📱 Scan QR code with your phone camera</p>
              <p className="divider">or</p>
              <div className="download-button">
                <a href={fileUrl} download>
                  <span>Download PDF</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
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
      position: relative;
      display: inline-block;
      margin-bottom: 2.5rem;

      .qr-frame {
        background: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 8px 25px rgba(139, 0, 0, 0.08);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 30px rgba(139, 0, 0, 0.12);
        }
      }

      .download-icon {
        position: absolute;
        bottom: -15px;
        right: -15px;
        background: white;
        padding: 12px;
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(139, 0, 0, 0.1);
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
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
          margin: 1.5rem 0;
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

        .download-button {
          margin-top: 1.5rem;

          a {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            background: #8b0000;
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.6rem;
            padding: 1.2rem 2.4rem;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(139, 0, 0, 0.2);

            svg {
              transition: transform 0.3s ease;
            }

            &:hover {
              background: #700000;
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(139, 0, 0, 0.25);

              svg {
                transform: translateY(2px);
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

      .qr-code-wrapper .qr-frame {
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

      .qr-code-wrapper .qr-frame {
        padding: 1rem;
      }

      .download-info .scan-instruction {
        .download-button a {
          padding: 1rem 2rem;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default QRCodeDownload;























// import React from 'react';
// import styled from "styled-components";
// import { QRCodeCanvas } from 'qrcode.react';// or import { QRCode } from 'react-qr-code';

// const QRCodeDownload = () => {
//   // URL of the file to be downloaded
//   const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`; // Replace with your actual file URL

//   const containerStyle = {
//     display: 'inline-block',
//     padding: '20px',
//     borderRadius: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'center',
//     margin: '50px auto',
//     border: '1px solid #ddd',
//   };

//   const headingStyle = {
//     marginBottom: '15px',
//     fontSize: '20px',
//     color: '#333',
//   };

//   const paragraphStyle = {
//     marginTop: '10px',
//     fontSize: '14px',
//     color: '#555',
//   };

//   return (
//     <Wrapper>
//     <div className="wrapped">
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Scan this QR Code to Download the Product Catalogue Brochure</h2>
//       <QRCodeCanvas  value={fileUrl} size={256} />
//       <p style={paragraphStyle}>Scan with your phone to download the file directly.</p>
//       <p style={paragraphStyle}>OR <a href={fileUrl} download style={{ color: '#007bff', textDecoration: 'none' }}>Click here</a> to download.</p>
//     </div>
//     </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`



// .wrapped {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 50vh; 
// }

// `;

// export default QRCodeDownload;



// import React from 'react';
// import styled from "styled-components";
// import { QRCodeCanvas } from 'qrcode.react';

// const QRCodeDownload = () => {
//   const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`;

//   return (
//     <Wrapper>
//       <div className="wrapped">
//         <div className="qr-container">
//           <h2>Scan this QR Code to Download the Product Catalogue Brochure</h2>
//           <div className="qr-code-wrapper">
//             <QRCodeCanvas value={fileUrl} size={256} />
//           </div>
//           <div className="download-info">
//             <p>Scan with your phone to download the file directly.</p>
//             <p className="download-link">
//               OR <a href={fileUrl} download>Click here</a> to download.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

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

// export default QRCodeDownload;
