"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.setProperty("--mouse-x", `${clientX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 z-0 pointer-events-none spotlight-bg transition-opacity duration-300"
    />
  );
}
