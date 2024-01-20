import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink(props: NavLinkProps) {
  return (
    <Link href={props.href}>
      <h1 className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[current=true]:text-foreground">
        {props.children}
      </h1>
    </Link>
  );
}
