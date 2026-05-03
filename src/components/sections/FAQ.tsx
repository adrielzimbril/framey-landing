"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Code2, Minus, Plus, Rocket } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What does Framey generate?",
    answer:
      "Framey turns a product brief into a structured landing page with sections, copy, responsive layouts, interface mockups, and clean component architecture. You can keep iterating in chat until the page matches the level of polish you want.",
  },
  {
    question: "Can I export real code?",
    answer:
      "Yes. Every project can be exported as a real codebase instead of a locked visual file. Framey keeps the page split into reusable components with Tailwind classes, typed content, and assets ready for your own repository.",
  },
  {
    question: "Which frameworks are supported?",
    answer:
      "Framey is built for modern teams using Next.js, React, Remix, and Tailwind. The generator adapts the structure to your target stack so developers can review, edit, and ship without rewriting the page from scratch.",
  },
  {
    question: "Can my team edit the design after generation?",
    answer:
      "Yes. You can refine typography, colors, cards, copy, sections, and interactions directly from prompts or by editing the exported components. Framey is designed to keep creative direction and engineering handoff in the same flow.",
  },
  {
    question: "Is it ready for production?",
    answer:
      "Framey generates a strong production starting point: semantic structure, responsive spacing, accessible controls, SEO-friendly content blocks, and clean styling. Your team still owns final QA, analytics, integrations, and deployment decisions.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-white p-4 md:p-6">
        <div className="rounded-[26px] border border-zinc-200 bg-[#f8f8f8] p-5 md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 border-b border-zinc-200 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#33d987]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  FAQ
                </span>
              </div>
              <h2 className="text-[clamp(2.25rem,6vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
                Answers,
                <br />
                before launch.
              </h2>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[24px] border border-zinc-200 bg-white p-4 md:p-5"
            >
              <p className="text-sm font-medium leading-6 text-zinc-600 md:text-base">
                Clear answers for teams that want AI speed without losing code
                ownership, brand control, or a proper developer workflow.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {["Next.js", "React", "Remix", "Tailwind"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={[
                        "rounded-2xl border px-3 py-2 text-xs font-semibold",
                        index === 0 &&
                          "border-blue-200 bg-blue-50 text-blue-700",
                        index === 1 && "border-sky-200 bg-sky-50 text-sky-700",
                        index === 2 && "border-zinc-300 bg-zinc-950 text-white",
                        index === 3 &&
                          "border-emerald-200 bg-emerald-50 text-emerald-700",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.68fr_1.32fr]">
            <motion.aside
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[26px] border border-zinc-200 bg-white p-5 md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f8f8f8] text-zinc-950">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-normal text-zinc-950">
                Built for shipping, not just previewing.
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                The generator thinks in sections, files, responsive rules, and
                deployment constraints, so the result feels closer to a product
                team workflow.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Prompt-to-page iteration",
                  "Editable component structure",
                  "Export without lock-in",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-[#f8f8f8] px-3 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#10a66a]" />
                    <span className="text-sm font-semibold text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[22px] border border-zinc-200 bg-zinc-950 p-4 text-white">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                  <Code2 className="h-3.5 w-3.5" />
                  Export target
                </div>
                <div className="mt-4 space-y-2 font-mono text-[12px] text-zinc-300">
                  <p>app/page.tsx</p>
                  <p>components/hero.tsx</p>
                  <p>components/faq.tsx</p>
                </div>
              </div>
            </motion.aside>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={[
                      "overflow-hidden rounded-[24px] border transition-colors duration-300",
                      isOpen
                        ? "border-zinc-300 bg-white"
                        : "border-zinc-200 bg-white hover:border-zinc-300",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6 md:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-medium leading-6 tracking-normal text-zinc-950 sm:text-lg md:text-xl">
                        {faq.question}
                      </span>
                      <span
                        className={[
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                          isOpen
                            ? "border-zinc-950 bg-zinc-950 text-white"
                            : "border-zinc-200 bg-[#f8f8f8] text-zinc-600",
                        ].join(" ")}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.34,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div className="px-5 pb-6 md:px-6">
                            <div className="border-t border-zinc-100 pt-5">
                              <p className="max-w-3xl text-[15px] font-medium leading-7 text-zinc-600 md:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
