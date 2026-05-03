"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Design Lead, Aether",
    content:
      "Framey turns the first draft into something we can actually review. The page structure, copy and code export arrive together, which changes the whole workflow.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Sarah",
  },
  {
    name: "Marcus Thorne",
    role: "Frontend Architect",
    content:
      "Most AI builders stop at a nice picture. Framey gives us editable React components, sane Tailwind tokens and a clean route structure from the same prompt.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Marcus",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Prism",
    content:
      "We launched our waitlist page in one afternoon. The bento sections felt custom, not templated, and our developer could still take over the code.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Elena",
  },
  {
    name: "David Kim",
    role: "Product Designer",
    content:
      "The best part is how direct the editing feels. I can ask for a stronger hero, watch the canvas update, then fine tune the layout without starting again.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=David",
  },
  {
    name: "Naomi Hart",
    role: "Brand Systems Lead",
    content:
      "Framey keeps the visual system coherent. Spacing, radius, typography and component states stay aligned across every generated page.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Naomi",
  },
  {
    name: "Theo Park",
    role: "Agency Developer",
    content:
      "For client work, the handoff is the product. Framey gives us a persuasive page, a preview link and code that is organized enough to ship.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Theo",
  },
];

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!rail || !card) return;

    const gap = 18;
    rail.scrollTo({
      left: active * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <motion.section
      id="testimonials"
      className="bg-[#f8f8f8] px-4 py-10 md:px-6"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="testimonials-gooey-light mx-auto max-w-[1220px] overflow-hidden rounded-[34px] border border-zinc-200 bg-white p-5 md:p-8">
        <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Testimonials
            </span>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,6vw,3rem)] font-semibold leading-[0.98] tracking-tight text-zinc-950">
              Teams use Framey to move from prompt to production.
            </h2>
          </div>
          <p className="max-w-md text-base font-medium leading-relaxed text-zinc-600">
            Auto-sliding customer notes with the same editorial motion as
            Cosmos, rebuilt on clean white cards for Framey.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div
            ref={railRef}
            className="flex gap-[18px] overflow-x-auto scroll-smooth px-1 py-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.article
                data-testimonial-card
                key={testimonial.name}
                className={cn(
                  "min-w-[82vw] rounded-[28px] bg-[#f8f8f8] p-5 shadow-[inset_0_0_0_3px_#f8f8f8] sm:min-w-[380px] lg:min-w-[420px]",
                  "flex min-h-[280px] flex-col justify-between",
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
                animate={{
                  scale: active === index ? 1.02 : 1,
                  rotate: active === index ? 0 : index % 2 === 0 ? -1 : 1,
                  backgroundColor: active === index ? "#ffffff" : "#f8f8f8",
                }}
                whileHover={{ rotate: 0, y: -5 }}
                transition={{ duration: 0.35 }}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      Verified build
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-lg font-medium leading-relaxed tracking-tight text-zinc-950 sm:text-xl">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-zinc-200 pt-5">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-zinc-200 bg-white p-1">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-950">
                      {testimonial.name}
                    </div>
                    <div className="text-xs font-medium text-zinc-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 border-t border-zinc-200 pt-5">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    active === index
                      ? "w-8 bg-zinc-950"
                      : "w-3 bg-zinc-300 hover:bg-zinc-500",
                  )}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 transition-colors hover:bg-[#f8f8f8]"
                onClick={() =>
                  setActive(
                    (current) =>
                      (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-950 text-white transition-colors hover:bg-zinc-800"
                onClick={() =>
                  setActive((current) => (current + 1) % TESTIMONIALS.length)
                }
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
