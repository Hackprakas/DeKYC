
"use client"
import React from 'react';
import { name, providecipher } from '../../../actions/actions2';
import LoadingBtn from '../components/loadingbtn';
import { revalidatePath, revalidateTag } from 'next/cache';
import DecryptBtn from "../components/decryptbtn"
import { useState } from 'react';



export const value={
  val:null
}


export const detail = {
  name: null,
  dob: null,
  Careof: null,
  Address: null,
  gender: null,
  photo: null,
}


const Page: React.FC = () => {
  const [url,seturl]=useState("");
  const [cypher,setcypher]=useState('')
  
  async function passer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const details = await providecipher(url);

    // console.log(details);
    if(details){

      value.val=details;
      
    }
    if(value.val!=null){
      setcypher(value.val)
    }
    // console.log(value.val);
    
  }
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Decrypt</h1>
      <div>

      </div>
      <form className={value.val ? "hidden" : "max-w-sm mx-auto"} onSubmit={passer} >
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your URL</label>
        <input type="text" name="url" aria-describedby="helper-text-explanation" onChange={(e)=>seturl(e.target.value)}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="url" />

        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please enter your URL contained in the qr code</p>
        <button type="submit"  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-opacity-20">submit</button>
      </form>
        
        
      {value.val && (
     <DecryptBtn cypher={value.val}/>
      )}

    </div>
  );
};

export default Page;
