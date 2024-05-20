function Section({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id: string;
}) {
  return (
    <section id={id} className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-screen-xl px-4 testimonials">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Section id="pribeh" title="Náš příběh">
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
      </Section>

      <Section id="sluzby" title="Služby a vybavení">
        <p>
          U nás v Independent Records se snažíme maximálně vyhovět
          zákazníkovi/muzikantovi, ať už z pohledu tvorby, tak časové
          flexibility.
        </p>
        <br></br>
        <ul className="list-disc list-inside text-center">
          <li>Nahrávací den:*</li>
          <li>Mixing:*</li>
          <li>Mastering:*</li>
          <li>Produkční služby:*</li>
        </ul>
        <br></br>
        <p>
          *Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku nás
          prosím kontaktujte e-mailem nebo telefonicky.*
        </p>
      </Section>
      <Section id="vybaveni" title="Vybavení studia">
        <p className="text-lg font-semibold">Počítač</p>
        <ul className="list-disc list-inside">
          <li>Apple Mac mini M1 8C CPU/8CGPU/16G/1TB/CZ</li>
          <li>Magic Keyboard Numeric Touch ID - Black Keys</li>
          <li>Apple Magic Mouse MK2E3ZM/A</li>
          <li>2x širokoúhlý 4K HD monitor ASUS</li>
        </ul>
        <p className="text-lg font-semibold">Klávesnice / MIDI ovladače</p>
        <ul className="list-disc list-inside">
          <li>AKAI MAX49 MIDI Controller Keyboard</li>
        </ul>
        <p className="text-lg font-semibold">Audio rozhraní</p>
        <ul className="list-disc list-inside">
          <li>Audient iD44 MKII - USB zvuková karta</li>
          <li>Behringer ADA 8200 Ultragain</li>
        </ul>
        <p className="text-lg font-semibold">Monitoring</p>
        <ul className="list-disc list-inside">
          <li>Studiové monitory aktivní Focal Shape 65</li>
          <li>Studiové monitory aktivní KRK Rokit RP5 G4</li>
          <li>Stojany na studiové monitory Gravity SP 3202</li>
          <li>Sluchátka Beyerdynamic DT-770 Pro, 80ohm</li>
          <li>Sluchátka OLLO Audio S4R, 32ohm</li>
        </ul>
        <p className="text-lg font-semibold">Náběr</p>
        <ul className="list-disc list-inside">
          <li>Rode NT1</li>
        </ul>
        <p className="text-lg font-semibold">Akustika</p>
        <ul className="list-disc list-inside">
          <li>Akustické molitan Pyramida</li>
          <li>Akustický molitan VELES-X Acoustic 50x50</li>
          <li>Akustický molitan PYRAMID Chocolate mkII</li>
          <li>Akustický molitan PYRAMID Komplet</li>
          <li>Akustické basové pasti</li>
        </ul>
        <p className="text-lg font-semibold">Ostatní vybavení</p>
        <ul>
          <li>Studiový stůl Thomann XL Black</li>
          <li>Optický kabel 1,0m</li>
          <li>Koaxální kabel Pro Snake 2,0m</li>
          <li>Extreme MUS1B</li>
          <li>Extreme KB1PRO</li>
          <li>Propojovací kabel BESPECO- EASX300</li>
          <li>HDMI rozbočovač Baseus Matrix</li>
        </ul>
        <br></br>
        <p>
          *Technické vybavení studia průběžně vylepšujeme, abychom mohli
          poskytnout co nejlepší služby pro co možná nejširší okruh muzikantů a
          ostatních zákazníků.*
        </p>
      </Section>
      <Section id="kontakty" title="Kontakt">
        <div className="flex justify-between">
          <div>
            <p>Kde nás najdete?</p>
            <p>Skalka 1858</p>
            <p>Česká Třebová</p>
            <p>560 02</p>
          </div>
          <div>Otevírací doba</div>
        </div>
      </Section>
    </>
  );
}
