import * as React from "react";

interface Props {}

export default function menu(props: Props) {
  return (
    <nav className="hidden md:flex md:flex-grow justify-center">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <a href="#pribeh" className="hover:text-secondary font-bold">
            Náš příběh
          </a>
        </li>
        <li>
          <a href="#sluzby" className="hover:text-secondary font-bold">
            Služby a vybavení
          </a>
        </li>
        <li>
          <a href="#vybaveni" className="hover:text-secondary font-bold">
            Vybavení studia
          </a>
        </li>
        <li>
          <a href="#kontakty" className="hover:text-secondary font-bold">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
