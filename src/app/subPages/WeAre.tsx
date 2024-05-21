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
      grid
      sm:grid-cols-1
      md:grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-2
      2xl:grid-cols-2
      gap-8`}
      >
        <div
          ref={ref1}
          className={`bg-white rounded-lg shadow-md p-6 my-6 text-center `}
        >
          <Image
            src="/assets/images/team/1.jpg"
            alt="Team Member 1"
            className={`w-full rounded-full mb-4  ${
              isVisible1 ? "animate-fade-right" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="text-xl font-semibold mb-2">Ondřej Bouška</h3>
        </div>
        <div
          ref={ref2}
          className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
        >
          <Image
            src="/assets/images/team/2.jpg"
            alt="Team Member 2"
            className={`w-full rounded-full mb-4  ${
              isVisible2 ? "animate-fade-left" : "opacity-0"
            }`}
            width={300}
            height={300}
            loading="lazy"
          />
          <h3 className="text-xl font-semibold mb-2">Jaroslav Kučera</h3>
        </div>
      </div>
    </Section>
  );
}
