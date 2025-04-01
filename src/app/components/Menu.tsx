"use client";

import { useOutsideClick } from "@/app/hooks/useOutsideClick";
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

export default function Menu(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setIsMenuOpen(false));
  function MobileItem(props: { href: string; children: React.ReactNode }) {
    return (
      <li className="border-b border-primary pb-4 pt-4 ">
        <a
          href={props.href}
          className="font-bold text-white hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          {props.children}
        </a>
      </li>
    );
  }
  return (
    <>
      <nav className="hidden justify-end sm:hidden md:flex md:flex-grow">
        <ul className="flex justify-end space-x-4">
          {menu.map((item) => (
            <Item key={item.href} href={item.href}>
              {item.label}
            </Item>
          ))}
        </ul>
      </nav>
      {isMenuOpen ? (
        <button className="flex text-white hover:text-primary focus:outline-none md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 6l12 12M6 18L18 6"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="flex text-white hover:text-primary focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      )}
      {isMenuOpen && (
        <nav className="w-full md:block md:w-auto" ref={ref}>
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
