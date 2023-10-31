import React from "react";
import Link from "next/link";

const MenuOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link href={"/sign-in"}>
        <p className="bg-primary hover:bg-primary/90 text-center text-white font-bold mb-10 py-2 px-4 rounded">
          Seu Perfil
        </p>
      </Link>
      <Link href={"/post/new"}>
        <p className="bg-primary hover:bg-primary/90 text-center text-white font-bold mb-10 py-2 px-4 rounded">
          Novo Post
        </p>
      </Link>
    </div>
  );
};

export default MenuOptions;
