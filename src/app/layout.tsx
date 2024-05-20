import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "./components/menu";
import MobileMenu from "./components/mobileMenu";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="assets/css/styles.css" />
        <link rel="stylesheet" href="node_modules/swiper/swiper-bundle.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
      </head>

      <body>
        <header className="bg-gray-dark sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-4">
            {/* Left section: Logo */}
            {/* <div className="flex items-center">
              <img
                src="assets/images/logo-blue.png"
                alt="Logo"
                className="h-14 w-auto mr-4"
              />
            </div> */}
            <div className="flex items-center flex-shrink-0 m-6">
              <span className="font-semibold text-2xl tracking-tight font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-50 to-indigo-700">
                independentrecords.cz
              </span>
            </div>
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
        {/* <div
          className="bg-repeat bg-center"
          style={{ backgroundImage: "url('studio.jpg')" }}
        ></div> */}

        {children}

        <footer className="py-10">
          <ul className="flex justify-center mt-10 space-x-8">
            <li>
              <a href="#">
                <img
                  src="assets/images/social_icons/instagram.png"
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="assets/images/social_icons/youtube.png"
                  alt="YouTube"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="assets/images/social_icons/facebook.png"
                  alt="Facebook"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="assets/images/social_icons/twitter.png"
                  alt="Twitter"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="assets/images/social_icons/linkedin.png"
                  alt="LinkedIn"
                  className="h-10 w-10"
                />
              </a>
            </li>
          </ul>
          <span className="block text-center text-gray-txt font-semibold mt-10 ">
            © {new Date().getFullYear()}. Developerd by{" "}
            <a href="https://spacema-dev.com" className="text-primary">
              Tom & Marky
            </a>
          </span>
        </footer>

        {/* <script src="node_modules/swiper/swiper-bundle.js"></script> */}
        {/* <script src="assets/js/script.js"></script> */}
      </body>
    </html>
  );
}
