import "./globals.css";
import type { Metadata } from "next";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Independent Records",
  description: "Web nahrávacího studia Independent Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="icon" href="favicon_io/favicon.ico" />
        <title>Independent Records - Nahrávací studio Česká Třebová</title>
      </head>

      <body className="animate-fade">
        <header className="sticky top-0 z-50 bg-black">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <a href="#">
                <Image
                  width={200}
                  height={100}
                  src="/logo/dlouhe-modra-bila.svg"
                  alt="Logo"
                  className="mr-4 h-14 w-auto animate-jump-in"
                />
              </a>
            </div>
            <Menu />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
