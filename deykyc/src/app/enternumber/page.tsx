"use client";

import React, { useState } from 'react';
import kyc from '../components/kyc.png';
import Image from 'next/image';
import Loader from '../components/loader';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { FaCopy } from 'react-icons/fa';
import { Card } from '../../components/ui/card';
import NFTQR from '../images/NFTQR.png';
import { getotp, gettokenurl } from '../../../actions/actions';
import { Web3Button } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import Navbart from "../components/navbar";

export const minting = {
  uri: "",
  signature: " ",
  id: 1
}

const key={
  publickey:""
}



const Page = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [aadharNumber, setAadharNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isMintButtonVisible, setMintButtonVisible] = useState(false); // Initially set to false
  const [isMinting, setIsMinting] = useState(false); // Newly added state for minting process
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const address = useAddress();

  async function handleGetPublicKey() {
    const publickeys = await window.ethereum.request({
      "method": "eth_getEncryptionPublicKey",
      "params": [
        address
      ]
    });
    key.publickey = publickeys
    console.log(key.publickey)
    setCurrentStep(3);

  }


  //simulate the verification process

  async function handleVerify() {
    // Simulate API call for verifying OTP
    // Assuming the API call is synchronous for simplicity
    setIsVerifying(true);

    const data = await gettokenurl(otp, key.publickey);
    if (data) {
      minting.uri = data[0]
      minting.signature = data[1]
    }

    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsVerifying(false);
      setMintButtonVisible(true);
      setCurrentStep(5);
    }, 2000); // Simulating 3 seconds of loading
  };



  async function handleSendOTP() {
    // Simulate API call for sending OTP
    // Assuming the API call is synchronous for simplicity
    await getotp(aadharNumber);

    setCurrentStep(4);
  };

  function mintNFT(){
    // Simulate minting process (replace with your actual logic)
    setIsMinting(true);


 
  };
  const generateRandomNumber = () => {
    // Generate a random number between 35 and 999999
    return Math.floor(Math.random() * (999999 - 35 + 1)) + 35;
  };

  function complete() {
    setIsMinting(false);
    setMintButtonVisible(false);
    setShowMessage(true);
  }

  return (
    <>
      <Navbart />
      {(isVerifying || isLoading || isMinting) && <Loader />}
      <div className='w-screen min-h-screen flex md:flex-row justify-center items-center flex-col bg-gradient-to-r from-rose-100 to-teal-100'>
        <div className='m-24'>
          <Image className='rounded-md' src={kyc} width={1200} height={1200} alt="Picture of the author" />
        </div>

        <div className="container px-5 py-24 flex justify-center items-center">

          {currentStep === 2 && !isLoading && !isMintButtonVisible && (<>


            <Button onClick={handleGetPublicKey}>
              Get Public Key
            </Button>
          </>
          )}

          {currentStep === 3 && !isLoading && !isMintButtonVisible && (
            <div className="w-auto bg-gray-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md">
              <div className=''>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Details</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Enter your Aadhar Number</p>
                <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }}>
                  <div className="relative mb-4">
                    <label htmlFor="aadharNumber" className="leading-7 text-sm text-gray-600">Aadhar Number</label>
                    <input
                      type="password"
                      id="aadharNumber"
                      name="aadharNumber"
                      value={aadharNumber}
                      onChange={(e) => setAadharNumber(e.target.value)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <Button className="text-white bg-black hover:focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send OTP</Button>
                </form>
                <p className="text-xs text-gray-500 mt-3">We prioritize your privacy. Rest assured, your data is not stored or retained by us.</p>
              </div>
            </div>
          )}
          {currentStep === 4 && !isLoading && !isMintButtonVisible && (
            <div className="w-auto bg-gray-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md">
              <div className=''>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Details</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Enter OTP</p>
                <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }}>
                  <div className="relative mb-4">
                    <label htmlFor="otp" className="leading-7 text-sm text-gray-600">OTP</label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <Button className="text-white bg-black hover:focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Verify</Button>
                </form>
                <p className="text-xs text-gray-500 mt-3">We prioritize your privacy. Rest assured, your data is not stored or retained by us.</p>
              </div>
            </div>
          )}

          {isMintButtonVisible && !isLoading && !isMinting && (
            <>
              <div className="container-fluid ">
                <div className="svg-wrapper-top svg-left-top">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-top svg-right-top">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom svg-left-bottom">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom svg-right-bottom">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
              </div>
              <Card className="flex flex-col items-center gap-4 -ml-4 px-20 py-8 mr-12 rounded-md bg-slate-200 border-none animate-fade-in  transition-transform text-black shadow-lg">
                <p className='text-lg text-center  text-green-600 font-bold mb-4'>Congratulations! Aadhar verification has been done successfully. You are can now mint your NFT.</p>
                <div className='w-44 h-44'>
                  <Image className='rounded-md' src={NFTQR} width={1200} height={1200} alt="Picture of the author" />
                </div>


                <Web3Button
                  contractAddress="0x4EE1940a4203fb64a0D74F3fc993bc828C26AdAC"
                  action={(contract) => {
                    contract.call("mint", [generateRandomNumber(), minting.uri, address, minting.signature]);
                  }}
                  onSubmit={() => setTimeout(() => {
                    setIsMinting(true);
                  }, 3000)}

                  onSuccess={() => setIsMinting(false)}
                
                  style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '10px', fontSize: '15px' }}
                >
                  Mint Your NFT
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
                </Web3Button>
              </Card>

            </>


          )}

          {showMessage && (
            <>
              <div className="container-fluid ">
                <div className="svg-wrapper-top svg-left-top">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-top svg-right-top">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom svg-left-bottom">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom svg-right-bottom">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
              </div>
              <Card className="p-12 mr-12 bg-slate-200 border-none animate-fade-in text-black shadow-lg">
                <p className="text-lg text-green-600 font-bold mb-4">Congratulations! You have successfully generated your NFT.</p>
                <div className="mt-2">
                  <p className="text-gray-600">Contract address:</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 mt-1 mb-2"
                      value="YourAddress"
                      readOnly
                    />
                    {/* Copy button with onClick event */}
                    <button
                      className="ml-2 text-blue-500 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText("0x4EE1940a4203fb64a0D74F3fc993bc828C26AdAC"); // Replace with the actual address
                        setIsCopied(true);

                        // Reset the "Copied!" message after 2 seconds
                        setTimeout(() => {
                          setIsCopied(false);
                        }, 2000);
                      }}
                    >
                      <FaCopy className='text-black' />
                    </button>
                  </div>
                  <p className="text-gray-600">Token Id:</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 mt-1 mb-2"
                      value="YourTokenId"
                      readOnly
                    />
                    {/* Copy button for Token Id */}
                    <button
                      className="ml-2 text-blue-500 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText("1"); // Replace with the actual Token Id
                        setIsCopied(true);

                        // Reset the "Copied!" message after 2 seconds
                        setTimeout(() => {
                          setIsCopied(false);
                        }, 2000);
                      }}
                    >
                      <FaCopy className='text-black' />
                    </button>
                  </div>
                </div>
                {/* Display "Copied!" message conditionally */}
                {isCopied && <p className="text-green-500">Copied!</p>}
                <p className='text-xs text-gray-500 mt-4 -mb-8'>You can view this NFT by clicking on "Import NFT" from Metamask by pasting the contract address and tokenid.</p>
              </Card>
            </>

          )}

        </div>
      </div>
    </>
  );
};

export default Page;