"use client";

import { ThirdwebProvider, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import 'dotenv/config' ;



export default function Providers({ children, }: {
  children: React.ReactNode
}) {
  return (

    <ThirdwebProvider
      activeChain="mumbai"
      clientId={"3cd6a9826843173b4720388a11aa5c03"}
      supportedWallets={[
      metamaskWallet()
      ]}
      sdkOptions={
        {
          gasless:{
            biconomy:{
              apiId: "48a14ced-8ac2-4a28-a85b-f53ba65db2ba",
              apiKey: "o3Lj6R8hU.fe485f00-20b9-4e48-ab72-fbfb4a38ea4b",
              deadlineSeconds:3600
            }
          }
        }
      }
    >
      {children}

    </ThirdwebProvider>
  )
}