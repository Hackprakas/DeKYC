
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Link href="/info">
          <button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-indigo-700 rounded-full text-xl">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Page;
 
