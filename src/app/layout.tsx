import "./globals.css";
import type { Metadata } from "next";
import FooterComponent from "./components/FooterComponent";
export const metadata: Metadata = {
  title: "NameLess Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`max-w-4xl mx-auto md:px-10 px-4 h-auto `}>
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
