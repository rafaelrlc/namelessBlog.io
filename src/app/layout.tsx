"use client";
import "./globals.css";
import type { Metadata } from "next";
import PrivateRoute from "./components/PrivateRoute";
import { usePathname } from "next/navigation";
import FooterComponent from "./components/FooterComponent";
import { Toaster } from "./components/ui/toaster";
import { checkIsPublicRoute } from "@/functions/check-route";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublic = checkIsPublicRoute(pathname!);

  return (
    <html lang="en">
      <body>
        <div className={`max-w-4xl mx-auto md:px-10 px-4 h-auto  `}>
          {isPublic && children}
          {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
          <FooterComponent />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
