"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from '@/app/ui/home.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroRef2 = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

 
  useEffect(() => {
    // if (!isLoaded) return;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, [isLoaded]);

  useEffect(() => {
    // if (!isLoaded) return;

    gsap.fromTo(
      heroRef2.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, [isLoaded]);

  return (
    <>
      
      {/* Hero Section */}
      <section
        style={{
          height: "550px",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div ref={heroRef} style={{ opacity: 0 }}>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            {/* <img src="" /> */}
            hero banner Image
          </div>
        </div>
      </section>

      <section
        style={{        
          background: "#fff",
          height: "100vh",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          color:"000",
        }}
      >
        <div ref={heroRef2} style={{ opacity: 0 }}>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#000",
              letterSpacing: "-0.03em",
            }}
          >
            <div className={styles.txtArea_Head}>
              <h2 className={styles.Head_title}>title</h2>
            </div>
            <div className={styles.txtArea_Body}>
              <p className={styles.Body_desc}>desc..........</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}