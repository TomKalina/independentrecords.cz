import * as React from "react";

interface Props {}

function Item(props: { href: string; children: React.ReactNode }) {
  return (
    <li className="hover:animate-wiggle hover:animate-duration-200 hover:animate-thrice">
      <a href={props.href} className="font-bold hover:text-secondary">
        {props.children}
      </a>
    </li>
  );
}
export default function Menu(props: Props) {
  return (
    <nav className="hidden justify-center md:flex md:flex-grow">
      <ul className="flex justify-center space-x-4 text-white ">
        <Item href="#pribeh">Náš příběh</Item>
        <Item href="#sluzby">Služby a vybavení</Item>
        <Item href="#vybaveni">Vybavení studia</Item>
        <Item href="#kontakty">Kontakt</Item>
      </ul>
    </nav>
  );
}
