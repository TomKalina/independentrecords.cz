import * as React from "react";

interface Props {}

export default function Footer(props: Props) {
  return (
    <footer className="py-10">
      <ul className="mt-10 flex justify-center space-x-8">
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
      <span className="mt-10 block text-center font-semibold text-gray-txt ">
        © {new Date().getFullYear()}. Developed by{" "}
        <a href="https://skalina.cz" className="text-primary">
          Tom & Marky
        </a>
      </span>
    </footer>
  );
}
