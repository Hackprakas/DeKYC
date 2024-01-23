"use client"
import React from 'react'
import { detail } from '../decrypt/page';
import { revalidatePath } from 'next/cache';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';
import { ConnectWallet } from "@thirdweb-dev/react";


type prog = {
  cypher: string
}

function decryptbtn(cypher: prog) {
  const [value, setvalue] = useState(false);

  const [addr, setaddr] = useState("");
  async function handleclick() {
    const address = await window.ethereum.request({
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

  async function handle() {


    const details = await window.ethereum.request({
      "method": "eth_decrypt",
      "params": [
        cypher.cypher,
        "0x00be6367428d44244a56861a0a70597c4dfcb0fc"
      ]
    });
    const data = JSON.parse(details);
    // console.log(data);
    detail.name = data.name;
    detail.Address = data.Address;
    detail.Careof = data.Careof;
    detail.gender = data.gender;
    detail.dob = data.dob;
    detail.photo = data.photo;
    setvalue(true);



  }

  return (<>
    <button onClick={handleclick} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">connect</button>
    {addr && (<button onClick={handle} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Decrypt</button>)}

    {value && (

      <Card className="bg-slate-200 mx-64 border-none  flex items-center justify-center text-black shadow-lg px-8" >
        <div className="flex-shrink-0 overflow-hidden">
          <img className="h-48 w-full object-cover md:w-48 rounded-full" src={`data:image/jpeg;base64,${detail.photo}`} alt="User photo" />
        </div>
        <div className="container-fluid ">
                <div className="svg-wrapper-top-decrypt svg-left-top-decrypt">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-top-decrypt svg-right-top-decrypt">
                  <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom-decrypt svg-left-bottom-decrypt">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
                <div className="svg-wrapper-bottom-decrypt svg-right-bottom-decrypt">
                  <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
                  </svg>
                </div>
              </div>

        <CardContent>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">{detail.name}</div>
            <p className="mt-2">
              <span className="text-black font-semibold">Gender:</span>
              <span className="ml-2 text-gray-500">{detail.gender}</span>
            </p>
            <p className="mt-2">
              <span className="text-black font-semibold">Date of birth:</span>
              <span className="ml-2 text-gray-500">{detail.dob}</span>
            </p>
            <p className="mt-2">
              <span className="text-black font-semibold">Address:</span>
              <span className="ml-2 text-gray-500">{detail.Address}</span>
            </p>
            <p className="mt-2">
              <span className="text-black font-semibold">Care of:</span>
              <span className="ml-2 text-gray-500">{detail.Careof}</span>
            </p>
          </div>

        </CardContent>
      </Card>

    )}

  </>
  )
}

export default decryptbtn