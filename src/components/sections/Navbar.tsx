"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Simulation", href: "#simulation" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4 md:top-5">
      <div className="mx-auto grid h-14 max-w-[1220px] grid-cols-[1fr_auto] items-center gap-2 rounded-full bg-white/76 px-3 shadow-[inset_0_0_0_3px_#f8f8f8] backdrop-blur-2xl backdrop-saturate-150 sm:gap-3 md:h-16 md:grid-cols-[1fr_auto_1fr] md:px-4">
        <Link
          href="/"
          className="group/logo flex w-fit min-w-0 items-center gap-2 rounded-full py-1 pr-2 transition-transform active:scale-95 sm:gap-2.5 sm:pr-3"
        >
          <Image src="/logo.svg" alt="Framey" width={32} height={32} priority />
          <span className="text-base font-semibold tracking-tight text-zinc-950">
            Framey
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-1 rounded-full bg-[#f8f8f8]/72 p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-zinc-500 transition-colors hover:bg-white/80 hover:text-zinc-950"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 rounded-full bg-white/68 px-3 py-1.5 lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-950"></span>
            </span>
            <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider">
              Live builder
            </span>
          </div>
          <button className="hidden h-10 items-center justify-center rounded-full px-3 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-white/72 sm:inline-flex">
            Sign In
          </button>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-950 px-3 text-[12px] font-semibold text-white transition-colors hover:bg-zinc-800 sm:px-4 md:px-5">
            <Play className="h-3.5 w-3.5 fill-white" />
            <span className="hidden sm:inline">Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 sm:hidden" />
          </button>
        </div>
      </div>
    </nav>
  );
}
