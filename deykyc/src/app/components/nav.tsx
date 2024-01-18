"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Modal component
const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 m-2 rounded-lg max-w-md w-full">
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
        <p className="text-gray-800 text-lg ">
          Lorem ipsum dolor sit amet consectetu adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
        </p>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-end">
  
        {/* DeKYC on the left */}
        <Link href="/" className="title-font font-medium text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-xl">DeKYC</span>
        </Link>
  
        <div className="md:ml-auto md:flex md:items-end">
  
          {/* How it works on the right */}
          <nav className="text-base">
            <button onClick={openModal} className="mr-5 mb-2 hover:text-gray-900 cursor-pointer">
              How it works
            </button>
          </nav>
  
          {/* Decrypt button below How it works */}
          <Link
            href="/decrypt"
            type="button"
            className={`text-gray-900 bg-white ml-4 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2`}
          >
            Decrypt
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
          </Link>
        </div>
      </div>
  
      {/* Render modal if open */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
  
};

export default Nav;


