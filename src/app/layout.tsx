import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Image from "next/image";
import Script from "next/script";
import { buildRootLayoutMetadata } from "@/lib/seo";

export const metadata = buildRootLayoutMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="animate-fade">
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '6d7920ea22bc2ad5a448c627db272fa883f90202';
          window.smartsupp||(function(d) {
            var s,c,o=smartsupp=function(){ o._.push(arguments)};
            o._=[];
            s=d.getElementsByTagName('script')[0];
            c=d.createElement('script');
            c.type='text/javascript';
            c.charset='utf-8';
            c.async=true;
            c.src='https://www.smartsuppchat.com/loader.js?';
            s.parentNode.insertBefore(c,s);
          })(document);
        `}
        </Script>
        <header className="sticky top-0 z-50 bg-black">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <a href="#">
                <Image
                  width={200}
                  height={100}
                  src="/logo/dlouhe-modra-bila.svg"
                  alt="Independent Records – logo nahrávacího studia"
                  className="mr-4 h-14 w-auto animate-jump-in"
                />
              </a>
            </div>
            <Menu />
          </div>
          <div className="bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white">
            Studio je z důvodu zdržení v rámci přípravy nových prostor uzavřeno na dobu neurčitou.
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
