import * as React from "react";

interface Props {}

export default function mobileMenu(props: Props) {
  return (
    <nav
      id="mobile-menu-placeholder"
      className="mobile-menu hidden flex flex-col items-center space-y-8 md:hidden"
    >
      <ul>
        <li>
          <a href="index.html" className="hover:text-secondary font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="aboutus.html" className="hover:text-secondary font-bold">
            About us
          </a>
        </li>
        <li>
          <a href="reviews.html" className="hover:text-secondary font-bold">
            Reviews
          </a>
        </li>
        <li>
          <a href="portfolio.html" className="hover:text-secondary font-bold">
            Portfolio
          </a>
        </li>
        <li>
          <a href="team.html" className="hover:text-secondary font-bold">
            Team
          </a>
        </li>
        <li>
          <a href="404.html" className="hover:text-secondary font-bold">
            404
          </a>
        </li>
        <li>
          <a href="contact.html" className="hover:text-secondary font-bold">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex flex-col mt-6 space-y-2 items-center">
        <a
          href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
          className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block flex items-center justify-center min-w-[110px]"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
