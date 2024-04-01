"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";

import { cn } from "@/utils/cn";
import NavLink from "./NavLink";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className,
        )}
      >
        <Menu setActive={setActive}>
          <NavLink name="Home" to="/" active={active} setActive={setActive} />
          <NavLink name="Cources" active={active} setActive={setActive}>
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/">Basic Music Theory</HoveredLink>
              <HoveredLink href="/">Advance Composition</HoveredLink>
              <HoveredLink href="/">Song Writting</HoveredLink>
            </div>
          </NavLink>
          <NavLink name="Contact Us" to="/contact" active={active} setActive={setActive}/>
        </Menu>
      </div>
    </>
  );
}
