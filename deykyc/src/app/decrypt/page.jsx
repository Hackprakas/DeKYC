// "use client";
// import React from 'react';
// import Navarbt from '@/components/navbar';
// import CustomQRCodeScanner from '@/components/qr';

// // Dummy function for handling file upload
// const handleFileUpload = () => {
//   // You can add your file upload logic here
//   alert('File upload functionality will be implemented here.');
// };

// // Page component
// const Page: React.FC = () => {
//   return (
//     <div className='w-screen min-h-screen bg-gradient-to-r from-rose-50 to-teal-100'>
//       {/* Include the Navbar component */}
//       <Navarbt />

//       <div className="container mx-auto p-10 flex flex-col items-center">
//         <h1 className="text-4xl font-bold mb-10">Decrypt</h1>

//         {/* Assuming you have a QR code scanning component or library */}
//         <div className="rounded-md bg-blue-200 w-80 h-80 mb-4">
//           {/* Include your QR code scanning component here */}
//           <CustomQRCodeScanner />
//         </div>

//         <h3 className="text-2xl font-bold mb-4">OR</h3>

//         {/* Button for importing from computer */}
//         <label
//           htmlFor="fileInput"
//           className="text-gray-900 bg-white hover:bg-gray-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
//         >
//           Import from Computer
//           <input
//             id="fileInput"
//             type="file"
//             className="sr-only"
//             onChange={handleFileUpload}
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useRef } from "react";
import Navarbt from "@/components/navbar";
import { providecipher } from "../../../actions/actions2";
import DecryptBtn from "../components/decryptbtn";
import jsQR from "jsqr";
import { Button } from '../../components/ui/button';

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

const Page = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const canvasRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      console.log("Dropped file:", droppedFile);
      setFile(droppedFile);
    }
  };

  const handleScanClick = () => {
    scanFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const scanFile = async (fileToScan) => {
    if (!fileToScan) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        console.error("Canvas not found");
        return;
      }

      const context = canvas.getContext("2d");
      const image = new Image();
      image.src = reader.result;

      image.onload = () => {
        console.log("Image loaded:", image.src);
        console.log("Canvas size:", canvas.width, canvas.height);

        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          setData(code.data);
          console.log("QR Code data:", code.data);
        } else {
          console.warn("No QR code found");
          alert("No QR found");
        }
      };
    };

    reader.readAsDataURL(fileToScan);
  };
  
  

  async function passers(url) {
    const details = await providecipher(url);

    if (details) {
      value.val = details;
    }
  }

  return (
    <>
      <Navarbt />
      <div className="flex flex-col items-center gap-24 w-screen min-h-screen bg-gradient-to-r from-rose-50 to-teal-100">
        <h1 className="text-4xl font-bold mb-8">Decrypt</h1>

        <div className={value.val && "hidden"}>
          <h2 className="text-2xl text-center font-medium text-gray-900 dark:text-white py-8">
            Scan Qr from file
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
              <p>Drag and drop files here or click to select files</p>
            </div>
          </div>
          <div className="my-4">
            <Button
              onClick={handleScanClick}
              className="text-white mt-16 bg-black shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:bg-opacity-20"
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

// "use client";
// import React from "react";
// import { name, providecipher } from "../../../actions/actions2";
// // import Qrreader from "../components/qrscanner"
// import DecryptBtn from "../components/decryptbtn";
// import { useState, useRef } from "react";
// import jsQR from "jsqr";

// export const value = {
//   val: null,
// };

// export const detail = {
//   name: null,
//   dob: null,
//   Careof: null,
//   Address: null,
//   gender: null,
//   photo: null,
// };

// const Page = () => {
//   const [url, seturl] = useState("");
//   const [cypher, setcypher] = useState("");
//   const canvasRef = useRef(null);

//   const [file, setFile] = useState(null);
//   const [data, setData] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setFile(file);
//     }
//   };

//   const scanFile = async () => {
//     if (!file) {
//       console.error("No file selected");
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.onload = () => {
//       const canvas = canvasRef.current;
  
//       if (!canvas) {
//         console.error("Canvas not found");
//         return;
//       }
  
//       const context = canvas.getContext("2d");
//       const image = new Image();
//       image.src = reader.result;
  
//       image.onload = () => {
//         console.log("Image loaded:", image.src);
//         canvas.width = image.width;
//         canvas.height = image.height;
//         context.drawImage(image, 0, 0, image.width, image.height);
//         const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//         const code = jsQR(imageData.data, imageData.width, imageData.height, {
//           inversionAttempts: "dontInvert",
//         });
  
//         if (code) {
//           setData(code.data);
//           console.log("QR Code data:", code.data);
//         } else {
//           console.warn("No QR code found");
//           alert("No QR found");
//         }
//       };
//     };
  
//     reader.readAsDataURL(file);
//   };
  

//   async function passers(url) {
//     const details = await providecipher(url);

//     // console.log(details);
//     if (details) {
//       value.val = details;
//     }
//     if (value.val != null) {
//       setcypher(value.val);
//     }
//     // console.log(value.val);
//   }

//   return (
//     <div className="container mx-auto p-8 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-8">Decrypt</h1>
//       <div></div>

//       <div className={value.val && "hidden"}>
//         <h2 className="text-2xl font-medium text-gray-900 dark:text-white  mb-8">
//           Scan Qr from file
//         </h2>
//         <input type="file" onChange={handleFileChange} />
//         <button
//           onClick={scanFile}
//           className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-opacity-20"
//         >
//           Scan QR code
//         </button>
//         <canvas ref={canvasRef} style={{ display: "none" }} />
//       </div>
//       {value.val && <DecryptBtn cypher={value.val} />}
//     </div>
//   );
// };

// export default Page;