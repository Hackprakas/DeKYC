"use client"
import React from 'react'
import { detail } from '../decrypt/page';
import { revalidatePath } from 'next/cache';
import { useState } from 'react';


type prog={
  cypher:string
}

function decryptbtn(cypher:prog) {
  const[value,setvalue]=useState(false);
  
    const [addr,setaddr]=useState("");
    async function handleclick(){
        const address= await window.ethereum.request({
             "method": "eth_requestAccounts",
             "params": []
           });
           setaddr(address)
           alert(addr)
           console.log(addr)
           
        //  detail.name=data.name;
        //  detail.Address=data.Address;
        //  detail.Careof=data.Careof;
        //  detail.gender=data.gender;
        //  detail.dob=data.dob;
        //  detail.photo=data.photo;
     
        //  revalidatePath("/decrypt");
     //data:image/jpeg;base64,
         
     }

     async function handle(){
        

            const details=await window.ethereum.request({
                "method": "eth_decrypt",
            "params": [
              cypher.cypher,
              "0x00be6367428d44244a56861a0a70597c4dfcb0fc"
            ]
        });
        const data=JSON.parse(details);
        // console.log(data);
        detail.name=data.name;
          detail.Address=data.Address;
         detail.Careof=data.Careof;
          detail.gender=data.gender;
          detail.dob=data.dob;
          detail.photo=data.photo;
          setvalue(true);
     
        
  
     }
     
  return (<>
    <button onClick={handleclick} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">connect</button>
    {addr &&(<button onClick={handle} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Decrypt</button>)}
  
  {value && (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={`data:image/jpeg;base64,${detail.photo}`} alt="User photo"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{detail.name}</div>
        <p className="mt-2 text-gray-500">Gender: {detail.gender} </p>
        <p className="mt-2 text-gray-500">Date of birth: {detail.dob}</p>
        <p className="mt-2 text-gray-500">Address: {detail.Address}</p>
        <p className="mt-2 text-gray-500">Care of: {detail.Careof}</p>
      </div>
    </div>
  </div>
  
  )}
  
  </>
  )
}

export default decryptbtn