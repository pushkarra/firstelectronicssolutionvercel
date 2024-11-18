import React from 'react';
import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react';// or import { QRCode } from 'react-qr-code';

const QRCodeDownload = () => {
  // URL of the file to be downloaded
  const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`; // Replace with your actual file URL

  const containerStyle = {
    display: 'inline-block',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    margin: '50px auto',
    border: '1px solid #ddd',
  };

  const headingStyle = {
    marginBottom: '15px',
    fontSize: '20px',
    color: '#333',
  };

  const paragraphStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#555',
  };

  return (
    <Wrapper>
    <div className="wrapped">
    <div style={containerStyle}>
      <h2 style={headingStyle}>Scan this QR Code to Download the Product Catalogue Brochure</h2>
      <QRCodeCanvas  value={fileUrl} size={256} />
      <p style={paragraphStyle}>Scan with your phone to download the file directly.</p>
      <p style={paragraphStyle}>OR <a href={fileUrl} download style={{ color: '#007bff', textDecoration: 'none' }}>Click here</a> to download.</p>
    </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`



.wrapped {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; 
}

`;

export default QRCodeDownload;
