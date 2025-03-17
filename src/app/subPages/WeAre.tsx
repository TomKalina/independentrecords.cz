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
            src="/assets/images/studio/Medailonky/ondra.jpg"
            alt="Team Member 1"
            className={`mb-4 w-full rounded-full  ${
              isVisible1 ? "animate-fade-right" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="mb-2 text-xl font-semibold">Ondřej Bouška</h3>
          Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj
          Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj
        </div>
        <div
          ref={ref2}
          className="my-6 rounded-lg bg-white p-6 text-center shadow-md"
        >
          <Image
            src="/assets/images/studio/Medailonky/jara.jpg"
            alt="Team Member 2"
            className={`mb-4 w-full rounded-full  ${
              isVisible2 ? "animate-fade-left" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="mb-2 text-xl font-semibold">Jaroslav Kučera</h3>
          Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj
          Ahoj Ahoj Ahoj Ahoj Ahoj Ahoj
        </div>
      </div>
    </Section>
  );
}
