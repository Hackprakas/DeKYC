"use client";
import React from "react";
import { name, providecipher } from "../../../actions/actions2";
// import Qrreader from "../components/qrscanner"
import DecryptBtn from "../components/decryptbtn";
import { useState, useRef } from "react";
import jsQR from "jsqr";

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

const Page = () => {
  const [url, seturl] = useState("");
  const [cypher, setcypher] = useState("");
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
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Decrypt</h1>
      <div></div>

      <div className={value.val && "hidden"}>
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white  mb-8">
          Scan Qr from file
        </h2>
        <input type="file" onChange={handleFileChange} />
        <button
          onClick={scanFile}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-opacity-20"
        >
          Scan QR code
        </button>
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      {value.val && <DecryptBtn cypher={value.val} />}
    </div>
  );
};

export default Page;
