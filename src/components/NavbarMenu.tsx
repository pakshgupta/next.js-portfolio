'use client'
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { useEffect } from "react";

const NavbarMenu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideOnScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
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
      className={cn(
        "fixed top-0 inset-x-0 w-full z-50 transition-opacity duration-300 opacity-60" ,
        hideOnScroll ? "opacity-0 pointer-events-none" : "opacity-60",
        "md:static md:mt-4 md:top-auto md:inset-x-auto md:max-w-2xl md:mx-auto md:opacity-60",
        className
      )}
    >
      <Menu setActive={setActive}>
        {/* Hide email on mobile and tablet screens */}
        <span className="hidden md:inline">pakshgupta007@gmail.com</span>
        <Link className="font-bold" href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link className="font-bold" href={"#project"} onClick={(e) => handleScrollClick(e, "project")}>
          <MenuItem setActive={setActive} active={active} item="Projects" />
        </Link>
        <Link className="font-bold" href={"#contact"} onClick={(e) => handleScrollClick(e, "contact")}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
};

export default NavbarMenu;
