// "use client"
import React from 'react'
import kyc from '../components/Is-Your-Bank-KYC-overdue_-1.png'
import { gettokenurl} from '../../../actions/actions'
import Image from 'next/image'
import { providecipher } from '../../../actions/actions2'
const page = () => {
  

  return (<>
  <div className='flex md:flex-row justify-center items-center flex-col'> 

    <div >
    <Image
      src={kyc}
      width={1200}
      height={1200}
      alt="Picture of the author"
    />
    </div>


    <div className="container px-5 py-24  flex justify-center items-center">
    <div className=" w-auto bg-gray-100 rounded-lg p-8 flex flex-col   mt-10 md:mt-0 relative  shadow-md">
      <div className=''>

      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Details</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Enter your Aadhar Number</p>
        <form action={gettokenurl} >
      <div className="relative mb-4">

        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Aadhar Number</label>
        <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send OTP</button>
        </form>
      
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">OTP</label>
        <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Details</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </div>

      </div>
  </>
    
  )
}

export default page