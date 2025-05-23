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
    <section id="vybaveni" className="scroll-mt-menu bg-black py-16">
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
            src="/assets/images/studio/mini/20.jpg"
            width={500}
            height={500}
            alt="Image"
            className="w-full rounded-lg bg-gray-100 shadow-lg md:mx-auto md:max-w-md"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="mb-4 text-5xl font-bold text-white">
            Vybavení studia
          </h2>
          <ol className="mb-10 mt-5 list-outside">
            <MyLi number={1}>Počítač</MyLi>
            <MyLi>Apple Mac mini M1 8C CPU/8CGPU/16G/1TB/CZ</MyLi>
            <MyLi>Magic Keyboard Numeric Touch ID - Black Keys</MyLi>
            <MyLi>Apple Magic Mouse MK2E3ZM/A</MyLi>
            <MyLi>2x širokoúhlý 4K HD monitor ASUS</MyLi>
            <MyLi number={2}>DAW</MyLi>
            <MyLi>FL Studio Signature Bundle</MyLi>
            <MyLi number={3}>Virtuální nástroje a pluginy</MyLi>
            <MyLi>FL Studio Plugins</MyLi>
            <MyLi>iZotope Music Production</MyLi>
            <MyLi>iZotope Ozone</MyLi>
            <MyLi>iZotope RX10</MyLi>
            <MyLi>Native Instruments</MyLi>
            <MyLi>Acqua Mastering Plugins</MyLi>
            <MyLi>IK Media</MyLi>
            <MyLi number={4}>Klávesnice / MIDI ovladače</MyLi>
            <MyLi>AKAI MAX49 MIDI Controller Keyboard</MyLi>
            <MyLi>AKAI Professional - FIRE Pad Controller</MyLi>
            <MyLi>Icon Platform-M - MIDI control surface </MyLi>
            <MyLi number={5}>Audio rozhraní</MyLi>
            <MyLi>Audient iD44 MKII</MyLi>
            <MyLi>Behringer ADA 8200 Ultragain</MyLi>
            <MyLi>ESI Audio - M4U EX MIDI interface</MyLi>
            <MyLi number={6}>Audio monitoring</MyLi>
            <MyLi>Studiové monitory aktivní Focal Shape 65</MyLi>
            <MyLi>Studiové monitory aktivní KRK Rokit RP5 G4</MyLi>
            <MyLi>Stojany na studiové monitory Gravity SP 3202</MyLi>
            <MyLi>Sluchátka Beyerdynamic DT-770 Pro, 80ohm</MyLi>
            <MyLi>Sluchátka OLLO Audio S4R, 32ohm</MyLi>
            <MyLi>Samson C-QUE 8 - headphones amplifier</MyLi>
            <MyLi number={8}>Náběr zvuku</MyLi>
            <MyLi>NEUMANN TLM 102 BK</MyLi>
            <MyLi>Rode M5 Stereo</MyLi>
            <MyLi>Rode NT1</MyLi>
            <MyLi>Shure SM57</MyLi>
            <MyLi>SE Electronics sE8 - párové mikrofony</MyLi>
            <MyLi>sE Electronics V7X</MyLi>
            <MyLi>sE Electronics V Kick</MyLi>
            <MyLi>sE Electronics V Beat</MyLi>
            <MyLi>Fender Blues Junior</MyLi>
            <MyLi number={8}>Akustika</MyLi>
            <MyLi>Akustický molitan Pyramida</MyLi>
            <MyLi>Akustický molitan VELES-X Acoustic 50x50</MyLi>
            <MyLi>Akustický molitan PYRAMID Chocolate mkII</MyLi>
            <MyLi>Akustický molitan PYRAMID Komplet</MyLi>
            <MyLi>Akustické basové pasti - statické</MyLi>
            <MyLi>Akustické panely - posuvné</MyLi>
            <MyLi number={9}>Ostatní vybavení</MyLi>
            <MyLi>Studiový stůl Thomann XL Black</MyLi>
            <MyLi>Optický kabel 1,0m</MyLi>
            <MyLi>Koaxální kabel Pro Snake 2,0m</MyLi>
            <MyLi>Extreme MUS1B</MyLi>
            <MyLi>Extreme KB1PRO</MyLi>
            <MyLi>Propojovací kabel BESPECO- EASX300</MyLi>
            <MyLi>The sssnake MC 8 Multicore MK II</MyLi>
            <MyLi>HDMI rozbočovač Baseus Matrix</MyLi>
            <MyLi>Valeton GP-200 Multi-effect Processor</MyLi>
            <MyLi>Rockstand RS20862 7 E-Guitar Stand</MyLi>
          </ol>
          <button className="rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-secondary">
            Technické vybavení studia průběžně vylepšujeme, abychom mohli
            poskytnout co nejlepší služby pro co možná nejširší okruh muzikantů
            a zákazníků obecně.
          </button>
        </div>
      </div>
    </section>
  );
}
