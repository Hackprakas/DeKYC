"use client"
import React from 'react'
import { detail } from './constant';
import { revalidatePath } from 'next/cache';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import {Button} from "../../components/ui/button";
import Image from 'next/image';
import NFTQR from '../images/NFTQR.png';


type prog = {
  cypher: string
}

function Decryptbtn(cypher: prog) {
  const [value, setvalue] = useState(false);
  const address=useAddress();

  async function handle() {

    try{

      const details = await window.ethereum.request({
        "method": "eth_decrypt",
        "params": [
          cypher.cypher,
          address
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
    catch(e){
      alert("Connect with same wallet to decrypt the data");
    }
  }

  return (<>

    {!address && (<ConnectWallet/>)}
    {address && !detail.name && (<Card className="p-12 mr-12 flex flex-col items-center gap-8 bg-slate-200 border-none animate-fade-in text-black shadow-lg">
    <div className='w-44 h-44'>
                  <Image className='rounded-md' src={NFTQR} width={1200} height={1200} alt="Picture of the author" />
        </div>
     <Button onClick={handle} className="text-white bg-black shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 ">Decrypt
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
    </Button>
    </Card>)}
    

    {value && (

     <>
     <h1 className='text-2xl text-center  text-green-600 font-bold mb-4'>
      Congradulations! Your details are decrypted.
     </h1>
     
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
     </>
    )}

  </>
  )
}

export default Decryptbtn;