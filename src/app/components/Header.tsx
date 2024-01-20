"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { Home, PlusSquare } from "lucide-react";
import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="border-b h-16 flex items-center px-6">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <h1 className="flex items-center gap-1.5 text-base font-medium text-gray-800 transition-colors hover:text-gray-900 data-[current=true]:text-foreground">
            Nameless.Blog
          </h1>

          <Separator orientation="vertical" className="h-6" />

          <NavLink href="/">
            <Home className="h-4 w-4 text-gray-600" />
            Home
          </NavLink>

          <NavLink href="/post/new">
            <PlusSquare className="h-4 w-4 text-gray-600" />
            Novo Post
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
