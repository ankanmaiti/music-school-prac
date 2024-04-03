"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavMenu from "./NavMenu";

import { Button } from "@/components/ui/button";
import SearchBox from "@/components/SearchBox";
import ProfileButton from "./ProfileButton";

import { Menu, Package2 } from "lucide-react";

interface NavbarProps { }

export default function Navbar({ }: NavbarProps) {
  return (
    <>
      {/*Wide Screen Navbar*/}
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavMenu />
      </nav>

      {/*Small-Medium Screen Navbar*/}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-4 font-medium">
            <NavMenu />
          </nav>
        </SheetContent>
      </Sheet>

      {/*Search & Login/User*/}
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <SearchBox />
        <ProfileButton />
      </div>
    </>
  );
}
