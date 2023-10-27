import React from "react";
import Link from "next/link";
interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <header>
      <div className="flex flex-col gap-2 justify-center items-center py-10 my-8 rounded-lg bg-sky-900 text-white ">
        <h1 className=" font-semibold text-2xl">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </header>
  );
};

export default Header;
