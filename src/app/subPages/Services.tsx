import * as React from "react";
import Box from "../components/Box";
import { useIsVisible } from "../hooks/useIsVisible";

interface Props {}

export default function Services(props: Props) {
  return (
    <section id={"sluzby"} className="py-16 animate-fade">
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-5xl font-bold mb-4">
          Služby a <span className="text-primary">vybavení</span>
        </h2>
        <p className="my-7">
          U nás v Independent Records se snažíme maximálně vyhovět
          zákazníkovi/muzikantovi, ať už z pohledu tvorby, tak časové
          flexibility.
        </p>
      </div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
          <Box title="Nahrávací den" text="" />
          <Box title="Mixing" text="" />
          <Box title="Mastering" text="" />
          <Box title="Produkční služby" text="" />
        </div>
        <p className="text-center">
          *Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku nás
          prosím kontaktujte e-mailem nebo telefoanicky.*
        </p>
      </div>
    </section>
  );
}
