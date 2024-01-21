"use client";

import { ThirdwebProvider, metamaskWallet, smartWallet } from "@thirdweb-dev/react";


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
    >
      {children}

    </ThirdwebProvider>
  )
}