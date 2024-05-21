import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Independent Records",
  description: "Web nahrávací společnosti Independent Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="icon" href="assets/images/favicon.png" />
        <title>independentrecords.cz</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />

        {/* <link rel="stylesheet" href="/assets/css/styles.css" /> */}
        {/* <link rel="stylesheet" href="assets/css/custom.css" /> */}
      </head>

      <body className="animate-fade">
        <header className="bg-gray-dark sticky top-0 z-50 ">
          <div className="container mx-auto flex justify-between items-center py-4">
            {/* Left section: Logo */}
            <div className="flex items-center">
              <a href="#">
                <img
                  src="/logo/dlouhe-modra.svg"
                  alt="Logo"
                  className="animate-jump-in h-14 w-auto mr-4"
                />
              </a>
            </div>
            {/* <div className="flex items-center flex-shrink-0 m-6">
              <a
                href="#"
                className="animate-jump-in font-semibold text-2xl tracking-tight font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-50 to-indigo-700"
              >
                independentrecords.cz
              </a>
            </div> */}
            {/* Hamburger menu (for mobile) */}
            {/* <div className="flex md:hidden">
              <button id="hamburger" className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>  */}

            {/* Center section: Menu */}
            <Menu />
            {/* Right section: Buttons (for desktop) */}
            {/* <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
                className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block"
              >
                Get started
              </a>
            </div> */}
          </div>
        </header>
        {/* Mobile menu */}
        {/* <MobileMenu /> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
