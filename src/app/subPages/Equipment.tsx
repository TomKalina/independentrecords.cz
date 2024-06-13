"use client";
import * as React from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import Image from "next/image";
import classNames from "classnames";
function MyLi({
  number,
  children,
}: {
  number?: number;
  children: React.ReactNode;
}) {
  if (number) {
    return (
      <li className="mb-4 mt-4 flex items-center">
        <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
          {number}
        </strong>
        <span className="text-white">{children}</span>
      </li>
    );
  }

  return (
    <li>
      <span className="text-white">{children}</span>
    </li>
  );
}

interface Props {}

export default function Equipment(props: Props) {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section id="vybaveni" className="bg-gray-500 py-16">
      <div
        ref={ref1}
        className={classNames(
          `
        container mx-auto flex flex-col items-center justify-between md:flex-row`,
          isVisible1 ? "animate-fade-right" : "opacity-0",
        )}
      >
        <div className="mb-8 md:mb-0 md:w-1/2">
          <Image
            src="/ai/7.jpeg"
            width={500}
            height={500}
            alt="Image"
            className="w-full rounded-lg bg-gray-100 shadow-lg md:mx-auto md:max-w-md"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="mb-4 text-5xl font-bold text-white">
            Vybavení <span className="text-primary">studia</span>
          </h2>
          <ol className="mb-10 mt-5 list-outside">
            <MyLi number={1}>Počítač</MyLi>
            <MyLi>Apple Mac mini M1 8C CPU/8CGPU/16G/1TB/CZ</MyLi>
            <MyLi>Magic Keyboard Numeric Touch ID - Black Keys</MyLi>
            <MyLi>Apple Magic Mouse MK2E3ZM/A</MyLi>
            <MyLi>2x širokoúhlý 4K HD monitor ASUS</MyLi>

            <MyLi number={2}>Klávesnice / MIDI ovladače</MyLi>
            <MyLi>AKAI MAX49 MIDI Controller Keyboard</MyLi>
            <MyLi number={3}>Audio rozhraní</MyLi>
            <MyLi>Audient iD44 MKII - USB zvuková karta</MyLi>
            <MyLi>Behringer ADA 8200 Ultragain</MyLi>
            <MyLi number={4}>Monitoring</MyLi>
            <MyLi>Studiové monitory aktivní Focal Shape 65</MyLi>
            <MyLi>Studiové monitory aktivní KRK Rokit RP5 G4</MyLi>
            <MyLi>Stojany na studiové monitory Gravity SP 3202</MyLi>
            <MyLi>Sluchátka Beyerdynamic DT-770 Pro, 80ohm</MyLi>
            <MyLi>Sluchátka OLLO Audio S4R, 32ohm</MyLi>
            <MyLi number={5}>Náběr</MyLi>
            <MyLi>Rode NT1</MyLi>
            <MyLi number={6}>Akustika</MyLi>
            <MyLi>Akustické molitan Pyramida</MyLi>
            <MyLi>Akustický molitan VELES-X Acoustic 50x50</MyLi>
            <MyLi>Akustický molitan PYRAMID Chocolate mkII</MyLi>
            <MyLi>Akustický molitan PYRAMID Komplet</MyLi>
            <MyLi>Akustické basové pasti</MyLi>
            <MyLi number={7}>Ostatní vybavení</MyLi>
            <MyLi>Studiový stůl Thomann XL Black</MyLi>
            <MyLi>Optický kabel 1,0m</MyLi>
            <MyLi>Koaxální kabel Pro Snake 2,0m</MyLi>
            <MyLi>Extreme MUS1B</MyLi>
            <MyLi>Extreme KB1PRO</MyLi>
            <MyLi>Propojovací kabel BESPECO- EASX300</MyLi>
            <MyLi>HDMI rozbočovač Baseus Matrix</MyLi>
          </ol>
          <button className="rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-secondary">
            *Technické vybavení studia průběžně vylepšujeme, abychom mohli
            poskytnout co nejlepší služby pro co možná nejširší okruh muzikantů
            a ostatních zákazníků.*
          </button>
        </div>
      </div>
    </section>
  );
}
