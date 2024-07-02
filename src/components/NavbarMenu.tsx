'use client'
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Link from "next/link";
const NavbarMenu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
    className={cn("fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-60" , className)}
    >
      
        <Menu setActive={setActive}>
          pakshgupta007@gmail.com
            <Link  className="font-bold" href={"/"}>
            <MenuItem  setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
        
            <Link className="font-bold"  href={"#project"} onClick={(e) => handleScroll(e, "project")}>
            <MenuItem setActive={setActive} active={active} item="Projects">
            
            </MenuItem>
            </Link>
            
            <Link className="font-bold"  href={"#contact"} onClick={(e) => handleScroll(e, "contact")}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  );
};

export default NavbarMenu;
