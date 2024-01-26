"use client";

import React, { useState, useEffect } from 'react';
import { Web3Button } from '@thirdweb-dev/react';
import Loader from '../components/loader';
import { minting } from '../enternumber/page';

const Page = () => {
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
        <Web3Button
        contractAddress="0x63f8203608A7164B9f136341035CD676c5D730E3"
        action={(contract) => {
          contract.call("mint", [1, minting.uri, "", minting.signature])
        }}
      >
        mint
      </Web3Button>
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

export default Page;
