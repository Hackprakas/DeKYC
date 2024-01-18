"use client";

import React, { useState, useEffect } from 'react';
import Loader from '../components/loader';

const page = () => {
  const [isLoading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const mintNFT = async () => {
    // Simulate minting process (replace with your actual logic)
    setLoading(true);
    // Simulate an API call or any asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 5000));
    setLoading(false);
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center">
      {!showMessage && (
        <button
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          onClick={mintNFT}
        >
          Mint your NFT
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      )}

      {isLoading && <Loader />}

      {showMessage && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md">
          <p className="text-lg text-green-600">Congratulations! You have successfully generated your NFT.</p>
          <div className="mt-2">
            <p className="text-gray-600">To address:</p>
            {/* Display the address here (replace 'YourAddress' with the actual fetched address) */}
            <input type="text" className="border border-gray-300 rounded-md p-2 mt-1 mb-2" value="YourAddress" readOnly />

            <p className="text-gray-600">Token Id:</p>
            {/* Display the token id here (replace 'YourTokenId' with the actual token id) */}
            <input type="text" className="border border-gray-300 rounded-md p-2 mt-1 mb-2" value="YourTokenId" readOnly />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
