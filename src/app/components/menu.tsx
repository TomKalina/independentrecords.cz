import * as React from "react";

interface Props {}

function Item(props: { href: string; children: React.ReactNode }) {
  return (
    <li className="hover:animate-wiggle hover:animate-thrice hover:animate-duration-200">
      <a href={props.href} className="hover:text-secondary font-bold">
        {props.children}
      </a>
    </li>
  );
}
export default function Menu(props: Props) {
  return (
    <nav className="hidden md:flex md:flex-grow justify-center">
      <ul className="flex justify-center space-x-4 text-white ">
        <Item href="#pribeh">Náš příběh</Item>
        <Item href="#sluzby">Služby a vybavení</Item>
        <Item href="#vybaveni">Vybavení studia</Item>
        <Item href="#kontakty">Kontakt</Item>
      </ul>
    </nav>
  );
}
