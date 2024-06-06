"use client";
import { Button } from "@/components/ui/button";
import { Package, PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="h-full w-full flex items-center flex-col justify-evenly">
      <h1 className="text-7xl text-blue-500 font-bold">이력서 박스</h1>
      <Link
        href={"/auth"}
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="p-5 hover:bg-slate-100 rounded-2xl duration-100"
      >
        {isOpen ? (
          <PackageOpen
            className="text-blue-500"
            size={128}
            onClick={() => setIsOpen((cur) => !cur)}
          />
        ) : (
          <Package
            className="text-blue-500"
            size={128}
            onClick={() => setIsOpen((cur) => !cur)}
          />
        )}
      </Link>
    </main>
  );
}
