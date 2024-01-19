"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

export default function Navbart() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "How it works",
    "Decrypt",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-r from-rose-50 to-teal-100 border-b border-gray-200">
      <NavbarContent>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className={cn("text-2xl px-1 font-bold text-blank", font.className)}>
            DEKYC
          </h1>
        </NavbarBrand>
        <div className="hidden sm:flex flex-grow justify-center items-center gap-4">
          <NavbarItem>
            <Link href="/" className={cn("text-1.5xl px-9 font-bold text-blank", font.className)}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className={cn("text-1.5xl px-9 font-bold text-blank", font.className)}>
              How it works
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className={cn("text-1.5xl px-9 font-bold text-blank", font.className)}>
              Decrypt
            </Link>
          </NavbarItem>
        </div>
        <div className="flex justify-end items-center">
          <NavbarItem>
            <Link href="/info">
            <Button>
              Get Started
            </Button>
            </Link>
          </NavbarItem>
        </div>
       
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}