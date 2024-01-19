"use client";
import React from 'react';
import Navarbt from '@/components/navbar';
import CustomQRCodeScanner from '@/components/qr';

// Dummy function for handling file upload
const handleFileUpload = () => {
  // You can add your file upload logic here
  alert('File upload functionality will be implemented here.');
};

// Page component
const Page: React.FC = () => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-rose-50 to-teal-100'>
      {/* Include the Navbar component */}
      <Navarbt />

      <div className="container mx-auto p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Decrypt</h1>

        {/* Assuming you have a QR code scanning component or library */}
        <div className="rounded-md bg-blue-200 w-80 h-80 mb-4">
          {/* Include your QR code scanning component here */}
          <CustomQRCodeScanner />
        </div>

        <h3 className="text-2xl font-bold mb-4">OR</h3>

        {/* Button for importing from computer */}
        <label
          htmlFor="fileInput"
          className="text-gray-900 bg-white hover:bg-gray-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          Import from Computer
          <input
            id="fileInput"
            type="file"
            className="sr-only"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default Page;
