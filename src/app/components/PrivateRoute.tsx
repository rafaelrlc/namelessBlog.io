"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const { data: sessionData } = useSession();
  console.log("sessionData", sessionData);

  let isAuth = true;

  if (!sessionData) {
    isAuth = false;
  }

  useEffect(() => {
    if (!isAuth) {
      push("/sign-in");
    }
  }, [isAuth, push]);

  return (
    <>
      {!isAuth && null}
      {isAuth && children}
    </>
  );
};

export default PrivateRoute;
