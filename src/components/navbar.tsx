"use client";

import { Sparkles } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-model";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/theme-toggle";
import MobileSidebar from "./ui/mobile-sidebar";
const font = Poppins({
  weight: "600",
  subsets: ["latin"]
});

interface NavbarProps {
  isPro: boolean;
}

export default function Navbar({ isPro }: NavbarProps) {
  const proModal = useProModal();

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            compatriot.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button size="sm" variant="premium" onClick={proModal.onOpen}>
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}