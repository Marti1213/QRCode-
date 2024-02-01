import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="qr-code-generator">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <label>Enter text or link:</label>
        <input type="text" value={text} onChange={handleInputChange} />
      </div>
      <div className="qr-code-container">
        {text && <QRCode value={text} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;