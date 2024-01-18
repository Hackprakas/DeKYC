"use client";
import React, { useState } from 'react';
import kyc from '../components/Is-Your-Bank-KYC-overdue_-1.png';
import { gettokenurl } from '../../../actions/actions';
import Image from 'next/image';
import Loader from '../components/loader';
import { useRouter } from 'next/navigation';


const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [aadharNumber, setAadharNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();

  const handleVerify = () => {
    setIsVerifying(true);
  
    // Simulate API call for verifying OTP
    // Assuming the API call is asynchronous using setTimeout
    setTimeout(() => {
      // Redirect to the "/mintnft" route after verification
      router.push('/mintnft');
  
      // Reset state
      setCurrentStep(1);
      setAadharNumber('');
      setOtp('');
      setIsVerifying(false);
    }, 5000);
  };
  
  const handleGetPublicKey = () => {
    setCurrentStep(2);
  };

  const handleSendOTP = () => {
    // Simulate API call for sending OTP
    // Assuming the API call is synchronous for simplicity
    setCurrentStep(3);
  };



  return (
    <>
          {isVerifying && <Loader />} 
      <div className='flex md:flex-row justify-center items-center flex-col'>
        <div className='m-24'>
          <Image className='rounded-md' src={kyc} width={1200} height={1200} alt="Picture of the author" />
        </div>

        <div className="container px-5 py-24 flex justify-center items-center">
          {currentStep === 1 && (
            <>
              <button
                type="button"
                onClick={handleGetPublicKey}
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                Get your Public Key
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}

          {currentStep === 2 && (
            <div className="w-auto bg-gray-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md">
              <div className=''>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Details</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Enter your Aadhar Number</p>
                <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }}>
                  <div className="relative mb-4">
                    <label htmlFor="aadharNumber" className="leading-7 text-sm text-gray-600">Aadhar Number</label>
                    <input
                      type="text"
                      id="aadharNumber"
                      name="aadharNumber"
                      value={aadharNumber}
                      onChange={(e) => setAadharNumber(e.target.value)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send OTP</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
              </div>
            </div>
          )}

          {currentStep === 3 && (
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
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Verify</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;