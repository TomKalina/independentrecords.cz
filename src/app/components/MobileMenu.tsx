import * as React from "react";

interface Props {}

export default function MobileMenu(props: Props) {
  return (
    <nav
      id="mobile-menu-placeholder"
      className="mobile-menu flex hidden flex-col items-center space-y-8 md:hidden"
    >
      <ul>
        <li>
          <a href="index.html" className="font-bold hover:text-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="aboutus.html" className="font-bold hover:text-secondary">
            About us
          </a>
        </li>
        <li>
          <a href="reviews.html" className="font-bold hover:text-secondary">
            Reviews
          </a>
        </li>
        <li>
          <a href="portfolio.html" className="font-bold hover:text-secondary">
            Portfolio
          </a>
        </li>
        <li>
          <a href="team.html" className="font-bold hover:text-secondary">
            Team
          </a>
        </li>
        <li>
          <a href="404.html" className="font-bold hover:text-secondary">
            404
          </a>
        </li>
        <li>
          <a href="contact.html" className="font-bold hover:text-secondary">
            Contact
          </a>
        </li>
      </ul>
      <div className="mt-6 flex flex-col items-center space-y-2">
        <a
          href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
          className="inline-block flex min-w-[110px] items-center justify-center rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-secondary"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
