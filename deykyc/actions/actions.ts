"use server"

import QRCode from 'qrcode';
import {  ethers } from 'ethers';
import { datauritobuffer } from './actions2';
import { encrypts, uploadtoipfs } from './actions3';
import { encrypt } from 'eth-sig-util';

const details={
    referenceid:null
}

export async function getdata(otps:string){
  const url = 'https://api.sandbox.co.in/kyc/aadhaar/okyc/otp/verify';
  const headers = {
    'Authorization': '',
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': process.env.KYC_API_KEY as string,
    'x-api-version': '1.0',
  };

  const requestBody = {
    otp: otps,
    ref_id: details.referenceid,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


export async function getotp(aadhar:string){
  const url = 'https://api.sandbox.co.in/kyc/aadhaar/okyc/otp';
    const headers = {
      'Authorization': '',
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-api-key': process.env.KYC_API_KEY as string,
      'x-api-version': '1.0',
    };

    const requestBody = {
      aadhaar_number: aadhar,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
      details.referenceid=data.data.ref_id;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}





  
export async function gettokenurl(otp:string,key:string) {
    const wallet =new ethers.Wallet(process.env.PRIVATE_KEY as string);
    const data=await getdata(otp);
    if(data){

        const details = {
            name: data.data.name,
            dob: data.data.dob,
            Careof:data.data.care_of,
            Address:data.data.address,
            gender:data.data.gender,
            photo:data.data.photo_link,
        }
        const encrypted = await encrypts(details,key);
        const signature1=await wallet.signMessage(encrypted);
        const detailss = {
            content: encrypted,
            signature:signature1
        }
        const encryptionPublicKey = process.env.PUBLIC_KEY as string;
        const encryptedMessage = encrypt(encryptionPublicKey, { data: JSON.stringify(detailss) }, 'x25519-xsalsa20-poly1305');
        const detailsss={
            encrypt:encryptedMessage
        }
        const detailsqr=await detailtoqr(detailsss);
        const nftmetadata={
            name:"samplenft",
            description:"this is a testing nft",
            image:detailsqr
        }
        const nfturi=await uploadtoipfs(nftmetadata);
        const uri=`https://ipfs.io/ipfs/${nfturi.substring(7)}`
        const hash = await ethers.utils.solidityKeccak256(['string'], [uri]);
        const signature = await wallet.signMessage(ethers.utils.arrayify(hash));
        console.log(uri);
        console.log(signature);
        
        return [uri,signature];
    }
}


async function detailtoqr(details:object){
    const encryptedconturl = await uploadtoipfs(details);
    const datauri = await QRCode.toDataURL(encryptedconturl);
    const buffer = await datauritobuffer(datauri);
    const buffertoipfs = await uploadtoipfs(buffer);
    
    return buffertoipfs;

}