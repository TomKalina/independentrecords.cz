import * as React from "react";
import Image from "next/image";

interface Props {}

export default function Footer(props: Props) {
  return (
    <footer className="py-10">
      <ul className="mt-10 flex justify-center space-x-8">
        <li>
          <a href="https://www.youtube.com/channel/UC5N-XPGXWVO1tlWLfgkqHQQ">
            <Image
              src="/assets/images/social_icons/instagram.png"
              alt="Instagram"
              className="h-10 w-10"
              width={512}
              height={512}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/indpnt_records/">
            <Image
              src="/assets/images/social_icons/youtube.png"
              alt="YouTube"
              className="h-10 w-10"
              width={512}
              height={512}
            />
          </a>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
      <div className="mt-10 text-center">
        Tento projekt byl podpořen z prostředků Pardubického kraje z podprogramu
        Startovací vouchery
      </div>
      <div className="mt-10 flex justify-center ">
        <Image
          src="/pardubicky-kraj-logo-00o.jpg"
          alt="YouTube"
          className=""
          width={200}
          height={200}
        />
      </div>
      <span className="mt-10 block text-center font-semibold text-gray-txt ">
        © {new Date().getFullYear()}. Developed by{" "}
        <a href="https://skalina.cz" className="text-primary">
          Tom & Marky
        </a>
      </span>
    </footer>
  );
}
