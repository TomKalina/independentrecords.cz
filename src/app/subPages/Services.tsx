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
          Služby a ceník
        </>
      }
    >
      <p className="my-7">
        U nás v Independent Records se snažíme zákazníkovi maximálně vyhovět - ať už z pohledu tvorby, tak časové flexibility. Nelimituje nás ani hudební žánr, se kterým k nám dorazíte.
        Stačí se jen ozvat - ať už telefonicky, na e-mail nebo přes sociální sítě a domluvit si s námi schůzku.
      </p>
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-4">
          <Box
            title="Nahrávání"
            text="500 CZK/hodina (20€)"
            src="/assets/images/studio/mini/4.jpg"
          />
          <Box
            title="Mixing"
            text="2 000 CZK/skladba (80€)"
            src="/assets/images/studio/mini/19.jpg"
          />
          <Box
            title="Mastering"
            text="500 CZK/skladba (20€)"
            src="/assets/images/studio/mini/28.jpg"
          />
          <Box
            title="Produkční služby"
            text="Na vyžádání"
            src="/assets/images/studio/mini/21.jpg"
          />
        </div>
        <p className="text-left">
        Mix skladeb nahraných v domácím nebo jiném nahrávacím studiu: 4 000 CZK/skladba (160 €)
        </p>
        <br></br>
        <p>
        Mastering/Remastering skladeb smíchaných v domácím nebo jiném nahrávacím studiu: od 1 000 CZK/skladba (40 €)
        </p>
        <br></br>
        <p className="text-left">
        Ačkoli se jako nahrávací studio zaměřujeme primárně na služby a aktivity týkající se produkování hudebních děl, dokážeme pracovat se zvukem obecně.
        Pokud se zaměřujete spíše mluvené slovo, podcasty apod.. i to je součástí portfolia našeho studia.
        Ať už je tedy Vaše zaměření jakékoli, prostředí našeho studia a jeho personál Vám vyjde vždy maximálně vstříc.
        </p>
      </div>
    </Section>
  );
}
