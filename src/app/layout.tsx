import "./globals.css";
import PrivateRoute from "./components/PrivateRoute";
import FooterComponent from "./components/FooterComponent";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const pathname = usePathname();
  //const isPublic = checkIsPublicRoute(pathname!);

  const isPublic = true;

  return (
    <html lang="en">
      <body>
        <Toaster />
        <Header />
        <div className={`max-w-[55rem] mx-auto md:px-10 px-4 py-6 h-screen`}>
          {isPublic && children}
          {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
