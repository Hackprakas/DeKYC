"use client";
import React from "react";
import { providecipher } from "../../../actions/actions2";
import DecryptBtn from "../components/decryptbtn";
import { useState, useRef } from "react";
import jsQR from "jsqr";
import Navbart from "../components/navbar";
import { Button } from "@nextui-org/react";


const dragDropContainerStyle = {
  width: '100%',
  minHeight: '200px',
  border: '2px dashed #ddd',
  borderRadius: '8px',
  borderColor: 'var(--main-color)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease',
  backgroundColor: 'transparent',
  marginBottom: '20px',  // Added margin-bottom
  padding: '20px',
};



const dragDropContentStyle = {
  textAlign: 'center',
};

export const value = {
  val: null,
};

export const detail = {
  name: null,
  dob: null,
  Careof: null,
  Address: null,
  gender: null,
  photo: null,
};

function Page() {
  const [cypher, setcypher] = useState("");
  const canvasRef = useRef(null);

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [fileChosen, setFileChosen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setFileChosen(true); // Set the state to true when a file is chosen
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleScanClick = () => {
    scanFile(file);
  };



  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      console.log("Dropped file:", droppedFile);
      setFile(droppedFile);
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
          passers(code.data);
        } else {
          alert("No QR found");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  async function passers(url) {
    const details = await providecipher(url);

    // console.log(details);
    if (details) {
      value.val = details;
    }
    if (value.val != null) {
      setcypher(value.val);
    }
    // console.log(value.val);
  }

  return (
    <>
      <Navbart />
      <div className="flex flex-col items-center justify-center gap-24 w-screen min-h-screen bg-gradient-to-r from-rose-50 to-teal-100">
      
     {!value.val ? (
   
  <h1 className="text-4xl font-bold mb-24">Decrypt</h1>
     
     ):(<></>)}

  <div className={value.val && "hidden"}>
    <h2 className="text-2xl text-center font-medium text-gray-900 dark:text-white py-8">
      Scan QR from file
    </h2>
    <div
      style={dragDropContainerStyle}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => {
        const inputElement = document.getElementById('fileInput');
        if (inputElement) {
          inputElement.click();
        }
      }}
    >
      <input
        type="file"
        id="fileInput"
        accept=".pdf, .jpeg, .jpg, .png, .html"
        onChange={handleFileChange}
        multiple
        className="hidden"
      />
      <div style={dragDropContentStyle}>
        {fileChosen ? (
          <p>File chosen: {file.name}</p>
        ) : (
          <p>Drag and drop files here or click to select files</p>
        )}
      </div>
    </div>
    <div className="my-4">
      <Button
        onClick={handleScanClick}
      >
        Scan QR code
      </Button>
    </div>
    <canvas ref={canvasRef} style={{ display: "none" }} />
  </div>

  {value.val && <DecryptBtn cypher={value.val} />}
</div>

    </>
  );
};

export default Page;
