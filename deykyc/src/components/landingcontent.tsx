import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Code, Mic, ImageIcon, Music, Video, Bot } from "lucide-react";
import App from './model';

interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element; // Define icon as optional
}

const features: Feature[] = [
  {
    title: "ChatBot",
    description: "Engage in seamless conversations and assist you in generating code effortlessly. From brainstorming to problem-solving, experience a new level of collaboration with your AI companion.",
    icon: <MessageSquare />,
  },
  {
    title: "ChatBot",
    description: "Engage in seamless conversations and assist you in generating code effortlessly. From brainstorming to problem-solving, experience a new level of collaboration with your AI companion.",
    icon: <MessageSquare />,
  },
  {
    title: "Code Assistant",
    description: "Engage in seamless generation and assist you in generating code effortlessly. From brainstorming to problem-solving, experience a new level of collaboration with your AI companion.",
    icon: <Code />,
  },
  {
    title: "Text-to-Speech",
    description: "Transform text into lifelike speech with unparalleled accuracy and naturalness. Listen to your ideas come to life or communicate effortlessly with others through the power of voice.",
    icon: <Mic />,
  },
  {
    title: "Photo Generation",
    description: "Unleash your creativity with image generation capabilities. Generate stunning visuals, design concepts, or illustrations directly through intuitive interactions with Rover.",
    icon: <ImageIcon />,
  },
  {
    title: "Assistant",
    description: "Get help with your daily tasks & Summarize uploaded files and much more.",
    icon: <Bot />,
  },
  
  // Add more features here if needed
];

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
  <Card className="bg-slate-200 border-none animate-fade-in hover:transform hover:scale-105 transition-transform text-black shadow-lg">
    <CardHeader>
      <CardTitle className="flex items-center">
        <div>
          <p className="text-lg">{title}</p>
        </div>
        {icon && <div className="ml-2">{icon}</div>}
      </CardTitle>
      <CardContent className="pt-4 px-0 text-zinc-500">
        {description}
      </CardContent>
    </CardHeader>
  </Card>
);

const LandingContent: React.FC = () => {
  return (
    <div className="px-10 pb-20">
      <Card className=" bg-gray-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 text-black mt-10 shadow-xl">
        <div className='flex flex-col justify-center items-center space-y-5 py-10'>
          <h2 className="text-4xl font-bold text-black">How it works</h2>
          <App />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 pb-10"> 
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))} 
        </div>
      </Card> 
    </div> 
  );
};

export default LandingContent;
