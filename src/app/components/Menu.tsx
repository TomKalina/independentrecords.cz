"use client";

import * as React from "react";

interface Props {}

const menu = [
  { href: "#pribeh", label: "Náš příběh" },
  { href: "#sluzby", label: "Služby a vybavení" },
  { href: "#vybaveni", label: "Vybavení studia" },
  { href: "#kontakty", label: "Kontakt" },
];

function Item(props: { href: string; children: React.ReactNode }) {
  return (
    <li className=" hover:animate-wiggle hover:animate-duration-200 hover:animate-thrice ">
      <a href={props.href} className="font-bold text-white hover:text-primary">
        {props.children}
      </a>
    </li>
  );
}

function MobileItem(props: { href: string; children: React.ReactNode }) {
  return (
    <li className="border-b border-primary pb-4 pt-4 ">
      <a href={props.href} className="font-bold text-white hover:text-primary">
        {props.children}
      </a>
    </li>
  );
}

export default function Menu(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <nav className="hidden justify-center sm:hidden md:flex md:flex-grow">
        <ul className="flex justify-center space-x-4 ">
          {menu.map((item) => (
            <Item key={item.href} href={item.href}>
              {item.label}
            </Item>
          ))}
        </ul>
      </nav>
      <button
        className="flex text-white focus:outline-none md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 6l12 12M6 18L18 6"
            ></path>
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <nav className="w-full md:block md:w-auto">
          <ul>
            {menu.map((item) => (
              <MobileItem key={item.href} href={item.href}>
                {item.label}
              </MobileItem>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
