import React from "react";
import  Navbart from "@/components/navbar";
import LandingContent from "@/components/landingcontent";

const Page = () => {
    return (
        <div className="w-screem min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <Navbart />
        <div className="flex flex-col items-center justify-center space-y-5">
            <LandingContent />
            </div>
        </div>
    );
}
export default Page;