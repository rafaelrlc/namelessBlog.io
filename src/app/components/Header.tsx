import React from "react";
interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <header>
      <div className="flex flex-col gap-2 justify-center items-center py-10 mt-8 mb-4 rounded-lg bg-primary text-white ">
        <h1 className=" font-semibold text-2xl">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </header>
  );
};

export default Header;
