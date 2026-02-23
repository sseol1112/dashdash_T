"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = titleRef.current!;
    const letters = text.innerText.split("");

    text.innerHTML = letters
      .map((letter) =>
        letter === " "
          ? `<span>&nbsp;</span>`
          : `<span style="display:inline-block">${letter}</span>`
      )
      .join("");

    gsap.fromTo(
      text.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section style={{ display: "block", alignItems: "center", justifyContent: "center" }}>
      <h1 ref={titleRef} style={{ fontSize: "4rem", fontWeight: "bold" }}>
        My Dashboard
      </h1>
    </section>
  );
}