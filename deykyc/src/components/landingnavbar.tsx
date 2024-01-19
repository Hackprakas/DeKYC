"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavBar = () => {
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between "> 
           <Link href="/" className="flex items-center">

              <h1 className={cn("text-2xl px-9 font-bold text-blank", font.className)}>
                    DEKYC
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                    <Button variant = "default" className="rounded-full mt-2">
                        Get Started
                    </Button>

            </div>
                

        </nav>
    );
}