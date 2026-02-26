"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from '@/app/ui/home.module.css';

export default function Hero() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = loaderRef.current!;
    const circle = circleRef.current!;

    // 🖤 subtle breathing
    const breathing = gsap.to(circle, {
      scale: 1.08,
      duration: 1.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    const endLoader = () => {
      breathing.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          loader.style.display = "none";
        },
      });

      tl.to(circle, {
        scale: 50, // 🔥 화면 덮기
        duration: 1.4,
        ease: "expo.inOut",
      });
    };

    const timer = setTimeout(endLoader, 1600);

    return () => {
      clearTimeout(timer);
      breathing.kill();
    };
  }, []);


  return (
    <>
      {/* 🖤 Preloader */}
      <div
        ref={loaderRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        <div
          ref={circleRef}
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        <p style={{marginLeft:"10px", color:"#fff"}}>loading..........</p>
      </div>

    </>
  );
}