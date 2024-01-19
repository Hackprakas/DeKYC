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
    { label: "Home", href: "/" },
    { label: "How it works", href: "#" },
    { label: "Decrypt", href: "/decrypt" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-r from-rose-50 to-teal-100 border-b border-gray-200">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
          <h1 className={cn("text-2xl px-1 font-bold text-blank cursor-pointer", font.className)}>
            DEKYC
          </h1>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex flex-grow justify-center items-center gap-4">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <Link href={item.href} className={cn("text-1.5xl px-9 font-bold text-blank", font.className)}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
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
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}