"use server"
import { decrypt } from "eth-sig-util";
import { ethers } from "ethers";



export async function providecipher(){
    const url="https://ipfs.io/ipfs/QmWYKjf2PywTMLj1LDWWwAoNXubnkosbGcomvMh52zzw9K/0";
    const response=await fetch(url);
    const data=await response.json();
    console.log(data.encrypt);
    const originaldata=JSON.parse(decrypt(data.encrypt,process.env.PRIVATE_KEY as string));
    const address= ethers.utils.verifyMessage(originaldata.content ,originaldata.signature);
    if (address=="0x00bE6367428D44244a56861A0a70597c4DfcB0Fc"){
        // console.log(originaldata);
        const originalda=JSON.parse(decrypt(data.encrypt,process.env.PRIVATE_KEY as string));
        return originalda;
        console.log(originalda)
    }
    else{
        console.log("bitch");
    }}

export async function getauthorization(){
    const url = 'https://api.sandbox.co.in/authenticate';
      const headers = {
        'accept': 'application/json',
        'x-api-key': process.env.KYC_API_KEY as string,
        'x-api-secret': process.env.KYC_SECRET_KEY as string,
        'x-api-version': '1.0',
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}



