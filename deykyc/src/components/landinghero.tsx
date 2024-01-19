"use client"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    return (
        <div className="text-black font-bold py-36 text-center space-y-5"> 
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl space-y-7 font-extrabold"> 
             <h1> 
               Secure Kyc Powered By Web3
             </h1>
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-500 text-4xl sm:text-5xl md:text-6xl lg:text-6xl space-y-5">
            <TypewriterComponent
              options={{
                strings: [
                  "KYC AT EASIER WAY", 
            ],
            autoStart: true,
            loop: true,
              }}
            />
          </div> 
          <div className="text-sm md:text-xl font-light text-zinc-400">
            <p>
              This platform that allows users to store their KYC data on the blockchain. 
            </p>
          </div>
          <div> 
              <Link href="/info">
                <Button variant="default" className=" md:text-lg p-4 md:p-6 rounded-full font-semibold">
                    Explore NOW 
                </Button>
              </Link>
                

          </div>
        </div> 
    );
}