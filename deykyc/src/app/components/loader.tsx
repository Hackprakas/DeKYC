
import React from 'react';

const Loader = () => {
    return (
      <div className="w-screem min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 fixed inset-0 element flex items-center justify-center z-50">
        <div className="text-white text-center">
          <div className="mb-4">
            <svg
              className="animate-spin h-10 w-10 mx-auto text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="#ffffff"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004.734 15H2c1.1 0 2.182.22 3.172.621l1.614 1.67zM12 20c-1.33 0-2.612-.26-3.808-.734l-1.615-1.67A7.962 7.962 0 0012 15v5zm6-2.709A8.003 8.003 0 0019.266 15H22a9.962 9.962 0 01-1.172 4.529l-1.614-1.67zM14.808 3.172A8.003 8.003 0 0012 4V0c1.33 0 2.612.26 3.808.734l1.615 1.67zM2 12h4a8.06 8.06 0 01-2-.265V7.595A9.938 9.938 0 002 12zm6-.265A8.06 8.06 0 018 12H4c0 2.191.864 4.231 2.432 5.768l1.615-1.67zM8 12a8.06 8.06 0 012 .265V16a9.938 9.938 0 002-5.595l-2.432-2.47zm7.568-2.768l1.615-1.67A8.06 8.06 0 0116 12h4c0-2.191-.864-4.231-2.432-5.768z"
              ></path>
            </svg>
          </div>
          <p className="text-lg text-black">We are preparing your NFT, please be patient...</p>
        </div>
      </div>
    );
  };

export default Loader;