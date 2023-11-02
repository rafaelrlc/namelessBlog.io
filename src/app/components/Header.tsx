"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  const { push } = useRouter();

  return (
    <header>
      <div
        className="flex flex-col gap-2 justify-center items-center py-10 mt-8 mb-4 rounded-lg bg-primary text-white hover:cursor-pointer"
        onClick={() => push("/")}
      >
        <h1 className=" font-semibold text-2xl">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </header>
  );
};

export default Header;
