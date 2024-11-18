import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';// or import { QRCode } from 'react-qr-code';

const QRCodeDownload = () => {
  // URL of the file to be downloaded
  const fileUrl = `${window.location.origin}/FirstElectronicsSolutions_Catelogue.pdf`; // Replace with your actual file URL

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan this QR Code to Download the File</h2>
      <QRCodeCanvas  value={fileUrl} size={256} />
      <p>Scan with your phone to download the file directly.</p>
    </div>
  );
};

export default QRCodeDownload;
