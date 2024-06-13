import * as React from "react";
import Box from "../components/Box";
import { Section } from "../components/Section";

interface Props {}

export default function Services(props: Props) {
  return (
    <Section
      id="sluzby"
      title={
        <>
          Služby a <span className="text-primary">vybavení</span>
        </>
      }
    >
      <p className="my-7">
        U nás v Independent Records se snažíme maximálně vyhovět
        zákazníkovi/muzikantovi, ať už z pohledu tvorby, tak časové flexibility.
      </p>
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-4">
          <Box title="Nahrávací den" text="" src="/ai/3.jpeg" />
          <Box title="Mixing" text="" src="/ai/2.jpeg" />
          <Box title="Mastering" text="" src="/ai/1.jpeg" />
          <Box title="Produkční služby" text="" src="/ai/4.jpeg" />
        </div>
        <p className="text-center">
          *Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku nás
          prosím kontaktujte e-mailem nebo telefoanicky.*
        </p>
      </div>
    </Section>
  );
}
