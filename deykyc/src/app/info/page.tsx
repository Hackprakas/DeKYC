"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Navbart from "@/components/navbar";

// CustomModal component
const CustomModal = ({ closeModal, onConfirm, content }) => {
  return (
    <div className="fixed -inset-10 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 p-8 m-2 rounded-lg max-w-md w-full">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        {/* Add content of the modal here */}
        <p className="text-gray-800 text-lg">
          {content}
        </p>
        <button onClick={onConfirm} className="bg-black text-white p-2 mt-4 rounded-md">
          OK
        </button>
      </div>
    </div>
  );
};

const Cautions = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsModalOpen(true);
  }

  const handleConfirmConnectWallet = () => {
    setIsWalletConnected(true);
    setIsModalOpen(false);
  }

  const handleGetPublicKey = () => {
    window.location.href = '/enternumber';
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-50 to-teal-100">
      <Navbart />
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-4xl font-bold text-center mt-10">Cautions</h1>
        <div className="w-96 h-90">
          <Card className="p-10 h-full w-full bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 animate-fade-in hover:transform hover:scale-105 transition-transform shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5">Important to Note</h1>
            <p className="text-sm font-medium leading-none mb-5 gap-10">
              In order to ensure the security of your personal information, please take note of the following precautions before proceeding with the KYC process:
            </p>
            <ul className="list-disc list-inside text-sm font-medium leading-none space-y-2">
              <li>Do not share your private key or any sensitive information with anyone.</li>
              <li>Ensure you are using a secure and trusted connection when submitting your KYC details.</li>
              <li>Verify the authenticity of the KYC platform and use official channels for submission.</li>
              <li>Double-check the URL to make sure you are on the correct KYC portal.</li>
            </ul>
          </Card>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="terms"
            checked={isAgreed}
            onClick={() => setIsAgreed(!isAgreed)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none ml-2"
          >
            I have read and accept the terms and conditions
          </label>
        </div>
        <div className="flex flex-row justify-between p-5 space-x-10">
          <Button disabled={!isAgreed || isWalletConnected} onClick={handleConnectWallet}>
            {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
          <Button disabled={!isWalletConnected} onClick={handleGetPublicKey}>
            Get Public Key
          </Button>
        </div>
        {/* Custom Modal */}
        {isModalOpen && (
          <CustomModal
            closeModal={() => setIsModalOpen(false)}
            onConfirm={handleConfirmConnectWallet}
            content="Do you want to connect your wallet?"
          />
        )}
      </div>
    </div>
  );
};

export default Cautions;
