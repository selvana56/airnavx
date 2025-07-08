'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  usePathname, ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const HEADERDATA = [
  { title: "Home", link: "/" },
  { title: "About project", link: "#about-project" },
  { title: "Team", link: "#team-members" },
];


const Header = () => {
  const path = usePathname();
   const [hash, setHash] = useState<string | null>(null)

  useEffect(() => {
    
    setHash(window.location.hash)

  
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [hash])

  return (
    <section className={`h-[60px] fixed w-full bg-transparent flex items-center
    ${path == '/dashboard'?'lg:hidden':'flex'}
    `}>
      <div className="w-11/12 max-w-6xl mx-auto flex items-center justify-between">
       {hash}
        <Logo />
        <nav className={`hidden  sm:flex gap-5 `}>
          {HEADERDATA.map((item, index) => (
            <Button
            onClick={()=>setHash(window.location.hash)}
            key={index} className={`px-16 ${path ===item.link ?'bg-black hover:bg-black/70': ""}`}  variant={path ===item.link ?'default': "outline"}>
              <Link href={item.link}>{item.title}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Header;
