import Box from "./components/Box";
import { Section } from "./components/Section";
import SectionWithImage from "./components/SectionWithImage";
import Vybaveni from "./subPages/Vybaveni";
import Map from "./components/Map";

export default function Home() {
  return (
    <>
      <SectionWithImage id="pribeh" title="Náš příběh">
        <br></br>
        <p>
          Independent Records - nejen nahrávací studio, a nejen pro hudebníky.
          Žijeme hudbou.
        </p>
        <br></br>
        <p className="text-left">
          Těchto pár řádků bude pro ty, které zajímá, jaká byla naše cesta,
          která nás dovedla až k tomu, co děláme teď.
        </p>
        <br></br>
        <p className="text-left">
          Ondra a Jára. Už jako teenageři jsme se muzice věnovali - nejdříve
          čistě jako posluchači, různých žánrů, různých stylů, ale RAP byl to,
          co nás přivedlo k prvním textům, k vyjadřování pocitů, k popisování
          života a doby, která byla a je kolem nás. Toto byl už jen krok k tomu
          začít věci zaznamenávat. Z počátku formou pokus / omyl (a že jich
          bylo). V podomácku vyrobeném studiu jsme postupně tvořili něco, co nás
          naplňovalo.
        </p>
        <br></br>
        <p className="text-left">
          Na nějakou dobu se pak naše cesty rozešly jinými směry. Odstěhovali
          jsme se do jiných měst, věnovali se jiným věcem a žili svoje životy.
          To se změnilo až v roce 2022, kdy jsme se oba znovu objevili v České
          Třebové. Vrátili jsme se zpět do rodného města.
        </p>
        <br></br>
        <p className="text-left">
          Myšlenka o založení opravdového nahrávacího studia začala vznikat už
          spoustu let zpátky, ale realizovat se začala ve chvíli, kdy jsme si
          uvědomili, že bychom se v životě rádi posunuli, něco vybudovali a
          začali se věnovat tomu, co nás skutečně baví. Myšlenku jsme začali
          rozvíjet, zabrali jsme a po dvou letech vybudovali to, co jsme vždy
          chtěli. Pod záštitou pardubického podnikatelského inkubátoru{" "}
          <a
            href="https://p-pink.cz/"
            target="_blank"
            className="text-pink-500 hover:text-sky-100"
          >
            P-PINK
          </a>{" "}
          jsme vybudovali svoje vlastní, hudební a nahrávací studio.
        </p>
        <br></br>
        <p>Děkujeme všem za podporu.</p>
      </SectionWithImage>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
              alt="Team Member 1"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ondřej Bouška</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/2.jpg"
              alt="Team Member 2"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jaroslav Kučera</h3>
          </div>
        </div>
      </Section>
      <section id={"sluzby"} className="py-16">
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
            <Box title="Nahrávací den" text="" link="Read More" />
            <Box title="Mixing" text="" link="Read More" />
            <Box title="Mastering" text="" link="Read More" />
            <Box title="Produkční služby" text="" link="Read More" />
          </div>
          <p>
            *Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku
            nás prosím kontaktujte e-mailem nebo telefoanicky.*
          </p>
        </div>
      </section>
      <Vybaveni />
      <Section id="kontakty" title="Kontakt">
        <Map />
      </Section>
    </>
  );
}
