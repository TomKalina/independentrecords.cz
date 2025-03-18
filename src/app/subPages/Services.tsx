import * as React from "react";
import Box from "../components/Box";
import { Section } from "../components/Section";

interface Props {}

export default function Services(props: Props) {
  return (
    <Section
      id="sluzby"
      animate={false}
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
          <Box
            title="Nahrávací den"
            text=""
            src="/assets/images/studio/mini/4.jpg"
          />
          <Box title="Mixing" text="" src="/assets/images/studio/mini/21.jpg" />
          <Box
            title="Mastering"
            text=""
            src="/assets/images/studio/mini/28.jpg"
          />
          <Box
            title="Produkční služby"
            text=""
            src="/assets/images/studio/mini/3.jpg"
          />
        </div>
        <p className="text-center">
          Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku nás
          prosím kontaktujte e-mailem nebo telefonicky.
        </p>
      </div>
    </Section>
  );
}
