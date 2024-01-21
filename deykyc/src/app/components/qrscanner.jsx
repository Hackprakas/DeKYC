"use client";

import React, { useRef, useState } from "react";

import jsQR from "jsqr";

function page() {
  const canvasRef = useRef(null);

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const scanFile = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          setData(code.data);
        } else {
          setData("No QR code found");
        }
      };
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={scanFile}>Scan QR code</button>
        <canvas ref={canvasRef} style={{ display: "none" }} />
        {data && <p>QR code data: {data}</p>}
      </div>
    </>
  );
}

export default page;
