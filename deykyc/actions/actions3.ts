"use server"

import { encrypt } from 'eth-sig-util';

import { ThirdwebStorage } from "@thirdweb-dev/storage";

const secretKeys = process.env.SECRET_KEY;
const storage = new ThirdwebStorage({
    secretKey: secretKeys,

});

export async function encrypts(data: object,key:string) {
    const encryptionPublicKey = key as string;
    const encryptedMessage = encrypt(encryptionPublicKey, { data: JSON.stringify(data) }, 'x25519-xsalsa20-poly1305');
    const ciphertext = `0x${Buffer.from(JSON.stringify(encryptedMessage), "utf8").toString("hex")}`;
    return ciphertext;
}

export async function uploadtoipfs(metadata: object | string | Buffer) {
    const uri = await storage.upload(metadata);
    return uri;
}