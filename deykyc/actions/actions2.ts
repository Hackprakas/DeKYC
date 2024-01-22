"use server"
import { decrypt } from "eth-sig-util";
import { ethers } from "ethers";



export async function providecipher(url:string){
    const urls=`https://ipfs.io/ipfs/${url.substring(7)}`;
    const response=await fetch(urls);
    const data=await response.json();
    console.log(data.encrypt);
    const originaldata=JSON.parse(decrypt(data.encrypt,process.env.PRIVATE_KEY as string));
    const address= ethers.utils.verifyMessage(originaldata.content ,originaldata.signature);
    if (address=="0x00bE6367428D44244a56861A0a70597c4DfcB0Fc"){
        console.log(originaldata.content);
        return originaldata.content;
      }
      else{
        console.log("bitch");
        return "bitch";
      }
    }
   


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


export async function datauritobuffer(datauri: string) {
  const response = await fetch(datauri);
  const blobs = await response.blob();
  const file = new File([blobs], "qr.png", { type: "image/png" });
  const files = Buffer.from(await file.arrayBuffer())
  return files;
}






