import { Package2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function NavMenu() {
  return (
    <>
      <NavLink
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </NavLink>

      <NavLink href="/" name="Home" />
      <NavLink href="/courses" name="Courses" />
      <NavLink href="/contact" name="Contact Us" className="text-nowrap" />
    </>
  );
}

interface NavLinkProps {
  href: `/${string}`;
  name?: string;
  children?: ReactNode;
  className?: string;
}

function NavLink({ href, name, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground text-nowrap transition-colors hover:text-foreground",
        className,
      )}
    >
      {name ?? children}
    </Link>
  );
}
