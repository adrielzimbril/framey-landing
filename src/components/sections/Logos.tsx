"use client";

import { motion } from "motion/react";
import { CheckCircle2, Globe2, Sparkles } from "lucide-react";

const teams = [
  "Scale",
  "Northstar",
  "Replit",
  "Fidelity",
  "Windsurf",
  "Glean",
  "Laravel",
  "Linear",
];
const proof = [
  ["42", "components generated"],
  ["6", "routes mapped"],
  ["98", "launch score"],
];

export function Logos() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-[1220px] gap-4 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[34px] border border-zinc-200 bg-white p-6 md:p-8">
          <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f8f8f8]">
            <Sparkles className="h-5 w-5 text-zinc-950" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Product teams use Framey to move from idea to preview
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proof.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[22px] border border-zinc-200 bg-[#f8f8f8] p-4"
              >
                <div className="text-3xl font-medium tracking-normal text-zinc-950">
                  {value}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] text-zinc-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[34px] border border-zinc-200 bg-white p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-3 rounded-[24px] bg-[#f8f8f8] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
              <Globe2 className="h-4 w-4" />
              Live generation network
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#33d987]" />
              18 previews today
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-[#f8f8f8] py-8">
            <motion.div
              animate={{ x: [0, -820] }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="flex w-max items-center gap-4 px-4"
            >
              {[...teams, ...teams, ...teams].map((team, index) => (
                <div
                  key={`${team}-${index}`}
                  className="flex h-16 min-w-[170px] items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5"
                >
                  <span
                    className="h-4 w-4 rounded-md border border-zinc-300"
                    style={{
                      backgroundColor:
                        index % 3 === 0
                          ? "var(--framey-accent)"
                          : index % 3 === 1
                            ? "var(--framey-accent-soft)"
                            : "#111111",
                    }}
                  />
                  <span className="text-sm font-semibold text-zinc-700">
                    {team}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {["Prompt reviewed", "Code exportable", "Deploy preview"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white px-3 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#10a66a]" />
                  <span className="text-sm font-semibold text-zinc-700">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
