import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BookUser, Wallet, FolderKey, Music, Video, Bot, FolderLock, QrCode, BadgeCheck } from "lucide-react";
import App from './model';

interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element; // Define icon as optional
}

const features: Feature[] = [
  {
    title: " Wallet Connection",
    description: "Users connect their MetaMask wallet,for sharing their unique public key inorder to get their KYC NFT",
    icon: <Wallet />,
  },
  {
    title: "Aadhar Verification",
    description: "Following wallet connection, the user details are retrived by entering Aadhaar number; these data are never saved.",
    icon: <BookUser />,
  },
  {
    title: "Encryption",
    description: "Those details are encrypted using the user and the organization's public key, then stored in IPFS",
    icon: <FolderLock />,
  },
  {
    title: "Mint NFT",
    description: "The nfts are generated and rendered to the users using the previously acquired data.",
    icon: <QrCode />,
  },
  {
    title: "Decryption",
    description: "Decryption will be provided as api to the organizations inorder to fetch the details of the user.",
    icon: <FolderKey />,
  },
  {
    title: "KYC In Seconds",
    description: "User can do their KYC in a single click at an easier way. It avoid the inconvenience of doing repeated KYC Process.",
    icon: <BadgeCheck />,
  },
  
  // Add more features here if needed
];

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
  <Card className="bg-slate-200 border-none animate-fade-in hover:transform hover:scale-105 transition-transform text-black shadow-lg" >
    <CardHeader>
      <CardTitle className="flex items-center">
        <div>
          <p className="text-lg">{title}</p>
        </div>
        {icon && <div className="ml-2">{icon}</div>}
      </CardTitle>
      <CardContent className="pt-4 px-0 text-zinc-600">
        {description}
      </CardContent>
    </CardHeader>
  </Card>
);

const LandingContent: React.FC = () => {
  return (
    <div className="px-10 pb-20">
      <Card className=" bg-gray-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-300 text-black mt-10 shadow-xl">
        <div className='flex flex-col justify-center items-center space-y-5 py-10'>
          <h2 className="text-4xl font-bold text-black">How it works</h2>
          <App />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-10"> 
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))} 
        </div>
      </Card> 
    </div> 
  );
};

export default LandingContent;
