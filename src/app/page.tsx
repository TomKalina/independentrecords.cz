export default function Home() {
  return (
    <html>
      <head>
        <title>independentrecords.cz</title>
        <link rel="shortcut icon" href="app/favicon.ico"></link>
      </head>
      <body className="font-mono bg-origin-content p-6 mr-4">
        <header>
          <nav className="flex items-center justify-between flex-wrap p-6 bg-sky-950">
            <div className="flex items-center flex-shrink-0 m-6">
              <span className="font-semibold text-2xl tracking-tight font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-50 to-indigo-700">
                independentrecords.cz
              </span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center justify-end px-3 py-2">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#pribeh"
                  className="block mt-4 lg:inline-block lg:mt-0  text-indigo-400 hover:text-indigo-50 tracking-wide mr-4 font-semibold"
                >
                  Náš příběh
                </a>
                <a
                  href="#sluzby"
                  className="block mt-4 lg:inline-block lg:mt-0  text-indigo-50 hover:text-indigo-400 tracking-wide mr-4 font-semibold"
                >
                  Služby a vybavení
                </a>
                <a
                  href="#vybaveni"
                  className="block mt-4 lg:inline-block lg:mt-0  text-indigo-50 hover:text-indigo-400 tracking-wide mr-4 font-semibold"
                >
                  Vybavení studia
                </a>
                <a
                  href="#kontakty"
                  className="block mt-4 lg:inline-block lg:mt-0  text-indigo-50 hover:text-indigo-400 tracking-wide mr-4 font-semibold"
                >
                  Kontakt
                </a>
              </div>
              <div>
                <img src=""></img>
                <a href="#"></a>
              </div>
            </div>
          </nav>
        </header>
        <div className="bg-repeat bg-cover bg-center" style={{backgroundImage: "url('studio.jpg')"}}>
        <article
            id="pribeh"
            className="bg-sky-950 bg-opacity-80 text-sky-100 text-center bg-origin-content p-6 m-4"
          >
            <header>
              <h1 className="font-semibold text-center text-indigo-400 text-xl tracking-wide">
                Náš příběh
              </h1>
            </header>
            <section>
              <br></br>
              <p>
                Independent Records - nejen nahrávací studio, a nejen pro hudebníky. Žijeme hudbou.
              </p>
                <br></br>
              <p className="text-left">
                Těchto pár řádků bude pro ty, které zajímá, jaká byla naše cesta, která nás dovedla až k tomu, co děláme teď.
              </p>
                <br></br>
              <p className="text-left">
                Ondra a Jára. Už jako teenageři jsme se muzice věnovali - nejdříve čistě jako posluchači, různých žánrů, různých stylů, ale RAP byl to, co nás přivedlo k prvním textům, k vyjadřování pocitů, k popisování života a doby, která byla a je kolem nás. Toto byl už jen krok k tomu začít věci zaznamenávat. Z počátku formou pokus / omyl (a že jich bylo). V podomácku vyrobeném studiu jsme postupně tvořili něco, co nás naplňovalo.
              </p> 
                <br></br>
              <p className="text-left">
                Na nějakou dobu se pak naše cesty rozešly jinými směry. Odstěhovali jsme se do jiných měst, věnovali se jiným věcem a žili svoje životy. To se změnilo až v roce 2022, kdy jsme se oba znovu objevili v České Třebové. Vrátili jsme se zpět do rodného města. 
              </p> 
                <br></br>
              <p className="text-left">
                Myšlenka o založení opravdového nahrávacího studia začala vznikat už spoustu let zpátky, ale realizovat se začala ve chvíli, kdy jsme si uvědomili, že bychom se v životě rádi posunuli, něco vybudovali a začali se věnovat tomu, co nás skutečně baví. Myšlenku jsme začali rozvíjet, zabrali jsme a po dvou letech vybudovali to, co jsme vždy chtěli. Pod záštitou pardubického podnikatelského inkubátoru <a href="https://p-pink.cz/" target="_blank" className="text-pink-500 hover:text-sky-100">P-PINK</a> jsme vybudovali svoje vlastní, hudební a nahrávací studio. 
              </p>  
                <br></br>
              <p>
                Děkujeme všem za podporu.
              </p>
            </section>
          </article>
          <article className="bg-sky-950 bg-opacity-80 text-sky-100 text-center bg-origin-content p-6 m-4"
          id="sluzby">
              <header>
                <h1 className="font-semibold text-center text-indigo-400 text-xl tracking-wide">
                  Služby a vybavení
                </h1>
              </header>
              <section>
                <p>
                  U nás v Independent Records se snažíme maximálně vyhovět zákazníkovi/muzikantovi, ať už z pohledu tvorby, tak časové flexibility.
                </p>
                <br></br>
                <p>
                  <ul className="list-disc list-inside text-center">
                    <li>Nahrávací den:*</li>
                    <li>Mixing:*</li>
                    <li>Mastering:*</li>
                    <li>Produkční služby:*</li>
                  </ul>
                </p>
                <br></br>
                <p>
                  *Nacenění služeb studia aktuálně probíhá - pro konkrétní poptávku nás prosím kontaktujte e-mailem nebo telefonicky.*
                </p>
              </section>
            </article>
            <article className="bg-sky-950 bg-opacity-80 text-sky-100 bg-origin-content p-6 m-4"
            id="vybaveni">
              <header>
                <h1 className="font-semibold text-center text-indigo-400 text-xl tracking-wide">
                  Vybavení studia
                </h1>
              </header>
              <section>
                <p className="text-lg font-semibold">
                  Počítač
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>Apple Mac mini M1 8C CPU/8CGPU/16G/1TB/CZ</li>
                    <li>Magic Keyboard Numeric Touch ID - Black Keys</li>
                    <li>Apple Magic Mouse MK2E3ZM/A</li> 
                    <li>2x širokoúhlý 4K HD monitor ASUS</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Klávesnice / MIDI ovladače
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>AKAI MAX49 MIDI Controller Keyboard</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Audio rozhraní
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>Audient iD44 MKII - USB zvuková karta</li>
                    <li>Behringer ADA 8200 Ultragain</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Monitoring
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>Studiové monitory aktivní Focal Shape 65</li>
                    <li>Studiové monitory aktivní KRK Rokit RP5 G4</li>
                    <li>Stojany na studiové monitory Gravity SP 3202</li>
                    <li>Sluchátka Beyerdynamic DT-770 Pro, 80ohm</li>
                    <li>Sluchátka OLLO Audio S4R, 32ohm</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Náběr
                </p> 
                <p>
                  <ul className="list-disc list-inside">
                    <li>Rode NT1</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Akustika
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>Akustické molitan Pyramida</li>
                    <li>Akustický molitan VELES-X Acoustic 50x50</li>
                    <li>Akustický molitan PYRAMID Chocolate mkII</li>
                    <li>Akustický molitan PYRAMID Komplet</li>
                    <li>Akustické basové pasti</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold">
                  Ostatní vybavení
                </p>
                <p>
                  <ul className="list-disc list-semibold">
                    <li>Studiový stůl Thomann XL Black</li>
                    <li>Optický kabel 1,0m</li>
                    <li>Koaxální kabel Pro Snake 2,0m</li>
                    <li>Extreme MUS1B</li>
                    <li>Extreme KB1PRO</li>
                    <li>Propojovací kabel BESPECO- EASX300</li>
                    <li>HDMI rozbočovač Baseus Matrix</li>
                  </ul>
                </p>
                <br></br>
                <p>
                  *Technické vybavení studia průběžně vylepšujeme, abychom mohli poskytnout co nejlepší služby pro co možná nejširší okruh muzikantů a ostatních zákazníků.*
                </p>
              </section>
            </article><article
              id="kontakty"
              className="bg-sky-950 bg-opacity-80 text-sky-100 bg-origin-content p-6 m-4"
            >
              <header>
                <h1 className="font-semibold text-center text-indigo-400 text-xl tracking-wide">
                  Kontakt
                </h1>
              </header>
              <section className="text-center">
                <div className="flex justify-between">
                  <div>
                    <p>Kde nás najdete?</p>
                    <p>Skalka 1858</p>
                    <p>Česká Třebová</p>
                    <p>560 02</p>
                  </div>
                  <div>Otevírací doba</div>
                </div>
              </section>
          </article>
      </div>
      </body>
    </html>
  );
}
