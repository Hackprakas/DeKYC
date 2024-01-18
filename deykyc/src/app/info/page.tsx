"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [isChecked, setChecked] = useState(false);

  // Sample terms and conditions array
  const termsAndConditions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Iusto quisquam culpa nam magnam fugit dolor, numquam excepturi accusamus quam.",
    "Et tempora quia nisi repudiandae numquam dignissimos magnam rem natus qui.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Iusto quisquam culpa nam magnam fugit dolor, numquam excepturi accusamus quam.",
    "Et tempora quia nisi repudiandae numquam dignissimos magnam rem natus qui.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  return (
    <>
      <div className='px-10 '>
      <div className='flex justify-center'>
          <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 max-w-md" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="text-3xl ">Important!</span><br />Things to note before creating your DeKYC.
            </div>
          </div>
        </div>

        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
          </div>
        </div>

        <div className="text-gray-900 mb-4">
          <ul className="list-disc list-inside">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="text-lg p-4 font-medium text-center">
                {term}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center justify-end pb-8'>
        <input
            type="checkbox"
            id="termsCheckbox"
            className="form-checkbox h-5 w-5 text-red-700"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
          />
          <Link href="/enternumber">
            <button
              className={`focus:outline-none flex text-white ml-4 ${
                isChecked ? 'bg-red-700 hover:bg-red-800' : 'bg-gray-400'
              } focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
              disabled={!isChecked}
            >
              I Understand and Continue
              {isChecked && (
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
              )}
            </button>
          </Link>
          <button
            type="button"
            className={`text-gray-900 bg-white ml-4 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2`}
            disabled={!isChecked}
          >
            Connect with MetaMask
            {isChecked && (
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
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
