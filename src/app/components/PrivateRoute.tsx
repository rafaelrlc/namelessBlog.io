import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const isAuth = false; // implementar funcao de verificar tokens

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
