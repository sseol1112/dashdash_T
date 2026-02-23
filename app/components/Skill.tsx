"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".skill-panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current!.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={containerRef} style={{ display: "flex", overflow: "hidden" }}>
      <div className="skill-panel" style={{ minWidth: "100vw", height: "100vh", background: "#111", color: "white" }}>
        React
      </div>
      <div className="skill-panel" style={{ minWidth: "100vw", height: "100vh", background: "#333", color: "white" }}>
        Next.js
      </div>
      <div className="skill-panel" style={{ minWidth: "100vw", height: "100vh", background: "#555", color: "white" }}>
        GSAP
      </div>
    </div>
  );
}