  "use client";

  import React, { useState, useEffect } from 'react';
  import Loader from '../components/loader';

  const Page = () => {
    const [isLoading, setLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const mintNFT = async () => {
      // Simulate minting process (replace with your actual logic)
      setLoading(true);

      // Simulate an API call or any asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 5000));

      // After the operation is completed, you can set the state accordingly
      setLoading(false);
      setShowMessage(true);
    };

    return (
      <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col items-center">
        {!showMessage && (
          <button
            type="button"
            className="text-gray-900 mt-44 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
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
          <div className="mt-24 p-4 border border-gray-300 rounded-md">
            <p className="text-lg text-green-600">Congratulations! You have successfully generated your NFT.</p>
            <div className="mt-2">
              <p className="text-gray-600">To address:</p>
              {/* Display the address here (replace 'YourAddress' with the actual fetched address) */}
              <input type="text" className="border border-gray-300 rounded-md p-2 mt-1 mb-2" value="YourAddress" readOnly />

              <p className="text-gray-600">Token Id:</p>
              {/* Display the token id here (replace 'YourTokenId' with the actual token id) */}
              <input type="text" className="border border-gray-300 rounded-md p-2 mt-1 mb-2" value="YourTokenId" readOnly />
            </div>
            {/* Placeholder for generative AI images and CSS animations */}
            <div className="mt-4">
              {/* Replace the following div with your generative AI images and animations */}
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-500 animate-spin rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Page;
