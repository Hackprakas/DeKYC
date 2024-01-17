"use server"
import { decrypt } from "eth-sig-util";
import { ethers } from "ethers";

export async function providecipher(){
    const url="https://ipfs.io/ipfs/QmPsbW52D1bbGBmCV9k9fhworPbboGK1QTF9AtcfRcFa5q/0";
    const response=await fetch(url);
    const data=await response.json();
    console.log(data.encrypt);
    const originaldata=JSON.parse(decrypt(data.encrypt,process.env.PRIVATE_KEY as string));
    const address= ethers.utils.verifyMessage(originaldata.content ,originaldata.signature);
    if (address=="0x00bE6367428D44244a56861A0a70597c4DfcB0Fc"){
        console.log(originaldata);
        return originaldata;
    }
    else{
        console.log("bitch");
    }

}