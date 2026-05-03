"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const productLinks = ["Builder", "Templates", "Exports", "Pricing"];
const resourceLinks = ["Docs", "Changelog", "Security", "Support"];
const legalLinks = ["Privacy", "Terms", "DPA", "Status"];
const footerColumns = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourceLinks },
  { title: "Company", links: legalLinks },
];

export function Footer() {
  return (
    <footer className="bg-[#f8f8f8] px-4 pb-6 pt-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-white p-4 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-zinc-200 bg-[#f8f8f8] p-6 md:p-8 lg:p-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <Link
                  href="/"
                  className="group mb-8 flex w-fit items-center gap-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/logo.svg"
                      alt="Framey Logo"
                      width={26}
                      height={26}
                    />
                  </span>
                  <span className="text-xl font-semibold tracking-normal text-zinc-950">
                    Framey
                  </span>
                </Link>

                <h2 className="text-[clamp(2.25rem,6vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
                  Generate the page.
                  <br />
                  Own the code.
                </h2>
                <p className="mt-5 max-w-lg text-base font-medium leading-7 text-zinc-600">
                  Build polished websites from a brief, refine them with AI,
                  then export production-ready components for the stack your
                  team already ships.
                </p>
              </div>

              <Link
                href="#pricing"
                className="inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
              >
                Start building
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                { label: "Frameworks", value: "Next.js / React / Remix" },
                { label: "Export", value: "Components, assets, content" },
                { label: "Workflow", value: "Prompt, review, publish" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-zinc-200 bg-white p-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-5 text-zinc-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-5 text-white md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    Export preview
                  </p>
                  <p className="mt-2 text-lg font-medium">framey-site</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Code2 className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Typed content model",
                  "Responsive sections",
                  "Deploy-ready files",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#33d987]" />
                    <span className="text-sm font-medium text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-[#fff7ec] p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#33d987]" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    Online
                  </span>
                </div>
                <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-zinc-600">
                  v3.0
                </span>
              </div>
              <p className="text-xl font-medium leading-7 text-zinc-950">
                Have a product brief ready?
              </p>
              <Link
                href="mailto:hello@framey.ai"
                className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:border-zinc-950"
              >
                <Mail className="h-4 w-4" />
                hello@framey.ai
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[28px] border border-zinc-200 bg-[#f8f8f8] p-5 md:p-6">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="text-sm font-medium leading-6 text-zinc-500">
                Framey is an AI website builder for teams that need fast
                creative iteration and a clean engineering handoff.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {[
                  { name: "Updates", icon: <Send className="h-4 w-4" /> },
                  { name: "Source", icon: <Code2 className="h-4 w-4" /> },
                  { name: "Community", icon: <Globe className="h-4 w-4" /> },
                  {
                    name: "Contact",
                    icon: <MessageSquare className="h-4 w-4" />,
                  },
                ].map((social) => (
                  <button
                    key={social.name}
                    type="button"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors duration-300 hover:border-zinc-950 hover:text-zinc-950"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-zinc-950"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 pt-5 text-xs font-medium text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>(c) 2026 Framey Systems Inc.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="transition-colors duration-300 hover:text-zinc-950"
              >
                Cookie settings
              </Link>
              <span>All systems operational</span>
              <span>Built for production web teams</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
