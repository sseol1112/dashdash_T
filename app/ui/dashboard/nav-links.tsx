"use client";

import { HomeIcon, PowerIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Sign Out", href: "/", icon: PowerIcon },
];

function getLoginState() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("currentUser");
}

export default function NavLinks() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 최초 1회
    setIsLoggedIn(getLoginState());

    const sync = () => setIsLoggedIn(getLoginState());

    // 같은 탭에서 발생시키는 커스텀 이벤트
    window.addEventListener("auth:changed", sync);

    // 다른 탭/창에서 localStorage 변경 시
    window.addEventListener("storage", (e) => {
      if (e.key === "currentUser") sync();
    });

    return () => {
      window.removeEventListener("auth:changed", sync);
      window.removeEventListener("storage", sync as any);
    };
  }, []);

  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("myMbti");

    // 🔥 상태 동기화 트리거
    window.dispatchEvent(new Event("auth:changed"));

    router.replace("/dashboard/login");
  };

  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;
          if(!isLoggedIn) { 
            return; 
          } else {
            if(link.name == "Sign Out") {
              return (
                <a key={link.name} href={link.href} onClick={handleSignOut} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </a>
              );
            } else {
              return (
                <a key={link.name} href={link.href} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </a>
              ); 
            }
          }
            
        })
      }
    </>
  );
}
