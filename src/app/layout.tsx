import './globals.css'
import PrivateRoute from './components/private-route'
import FooterComponent from './components/footer'
import { Toaster } from './components/ui/toaster'
import Header from './components/header'
import { Providers } from './providers'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const pathname = usePathname();
  // const isPublic = checkIsPublicRoute(pathname!);

  const isPublic = true

  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster />
          <Header />
          <div className={`mx-auto h-screen max-w-[55rem] px-4 py-6 md:px-10`}>
            {isPublic && children}
            {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
            <FooterComponent />
          </div>
        </Providers>
      </body>
    </html>
  )
}
