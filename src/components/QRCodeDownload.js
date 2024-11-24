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



import React from 'react';
import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDownload = () => {
  const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`;

  return (
    <Wrapper>
      <div className="wrapped">
        <div className="qr-container">
          <h2>Scan this QR Code to Download the Product Catalogue Brochure</h2>
          <div className="qr-code-wrapper">
            <QRCodeCanvas value={fileUrl} size={256} />
          </div>
          <div className="download-info">
            <p>Scan with your phone to download the file directly.</p>
            <p className="download-link">
              OR <a href={fileUrl} download>Click here</a> to download.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f5f7fa;
  
  .wrapped {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 2rem;
  }

  .qr-container {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    max-width: 500px;
    width: 100%;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      color: #2d3748;
      font-size: 1.7rem;
      font-weight: 600;
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .qr-code-wrapper {
      background: white;
      padding: 1.5rem;
      border-radius: 15px;
      display: inline-block;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      margin-bottom: 1.5rem;

      canvas {
        display: block;
      }
    }

    .download-info {
      p {
        color: #4a5568;
        font-size: 1.5rem;
        margin: 0.8rem 0;
        line-height: 1.6;
      }

      .download-link {
        font-weight: 500;

        a {
          color: #4299e1;
          text-decoration: none;
          position: relative;
          font-weight: 600;
          padding-bottom: 2px;
          transition: color 0.2s ease;

          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #4299e1;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease;
          }

          &:hover {
            color: #2b6cb0;

            &:after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .qr-container {
      padding: 1.5rem;
      margin: 1rem;

      h2 {
        font-size: 1.25rem;
      }

      .qr-code-wrapper {
        padding: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .wrapped {
      padding: 1rem;
    }

    .qr-container {
      padding: 1rem;

      h2 {
        font-size: 1.1rem;
      }

      .qr-code-wrapper {
        padding: 0.75rem;
      }
    }
  }
`;

export default QRCodeDownload;
