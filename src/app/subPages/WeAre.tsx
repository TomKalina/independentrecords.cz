"use client";

import * as React from "react";
import { Section } from "../components/Section";
import Image from "next/image";
import { useIsVisible } from "../hooks/useIsVisible";
interface Props {}

export default function WeAre(props: Props) {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = React.useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref1);

  return (
    <Section animate={false}>
      <div
        className={`
      2xl:grid-cols-2
      grid
      gap-8
      sm:grid-cols-1
      md:grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-2`}
      >
        <div
          ref={ref1}
          className={`my-6 rounded-lg bg-white p-6 text-center shadow-md `}
        >
          <Image
            src="/assets/images/studio/mini/ondra.jpg"
            alt="Ondřej Bouška"
            className={`mb-4 aspect-square w-full rounded-full object-cover ${
              isVisible1 ? "animate-fade-right" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="mb-2 text-xl font-semibold">BOUDA - Ondřej Bouška</h3>
          <p>
            S hudbou jsem vyrůstal odmala. V rodině, kde se pravidelně hrálo na
            kytaru, na klavír a zpívalo to vlastně ani jinak nejde 😊
          </p>
          <br />
          <p>
            Na základce přišla první kytara, baskytara, pak bicí a já si
            postupně začal uvědomovat, že mám pro hudbu vlohy - že to mám v
            krvi. Ačkoli mám svoje oblíbený žánry, miluju hudbu jako celek. S
            rockem, punkem a nu-metalem přišla láska k tvrdé muzice. S rapem
            přišlo uvědomění, že k nám hudba může promlouvat a občas se nás
            dotknout někde hodně hluboko. Nahrávací studio byl můj sen přes 10
            let a jsem šťastnej že se nám ho podařilo uskutečnit.
          </p>
          <br />
          <p>
            Věnuji se sound engineeringu, produkování a zároveň se více starám o
            marketing studia a obecně o byrokracii, kterou s sebou podnikání
            nese.
          </p>
          <br />
          <p>
            Jinak jsem jen kluk co si plní sen a chce se v životě věnovat tomu,
            co ho baví!
          </p>
        </div>
        <div
          ref={ref2}
          className="my-6 rounded-lg bg-white p-6 text-center shadow-md"
        >
          <Image
            src="/assets/images/studio/mini/jara.jpg"
            alt="Jaroslav Kučera"
            className={`mb-4 aspect-square w-full rounded-full object-cover ${
              isVisible1 ? "animate-fade-right" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="mb-2 text-xl font-semibold">Jaroslav Kučera</h3>
        </div>
      </div>
    </Section>
  );
}
