"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { MenuItem } from "@/components/ui/navbar-menu";

import Link from "next/link";

interface NavLinkProps {
  children?: ReactNode;
  to?: `/${string}`;
  name: string;
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
}

export default function NavLink({
  children,
  to,
  name,
  active,
  setActive,
}: NavLinkProps) {
  if (!to)
    return (
      <>
        <MenuItem setActive={setActive} active={active} item={name}>
          {children}
        </MenuItem>
      </>
    );

  return (
    <>
      <Link href={to}>
        <MenuItem setActive={setActive} active={active} item={name}>
          {children}
        </MenuItem>
      </Link>
    </>
  );
}
