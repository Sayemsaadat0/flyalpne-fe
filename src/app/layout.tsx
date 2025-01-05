import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/Providers';
// Archivo,

// const archivo = Archivo({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fly Alone',
  description: 'Fly Alone',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const session = await getServerSession(authOptions); ${archivo.className}
  return (
    <Providers>
      <html lang="en">
        <body className={` ${quicksand.className} antialiased`}>
          {/* <NextAuthProvider session={session}>
          <TanStackQueryProvider></TanStackQueryProvider>
        </NextAuthProvider> */}
          {children}
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
