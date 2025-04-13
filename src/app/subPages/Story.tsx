import * as React from "react";
import SectionWithImage from "../components/SectionWithImage";

interface Props {}

export default function Story(props: Props) {
  return (
    <SectionWithImage id="pribeh" title="Náš příběh">
      <p className="text-left">
        Independent Records - nejen nahrávací studio, a nejen pro hudebníky.
      </p>
      <br></br>
      <p className="text-left">
        Ondra a Jára. Už jako teenageři jsme se muzice věnovali - nejdříve čistě
        jako posluchači, různých žánrů, různých stylů, ale RAP byl to, co nás
        přivedlo k prvním textům, k vyjadřování pocitů, k popisování života a
        doby, která byla a je kolem nás. Toto byl už jen krok k tomu začít věci
        zaznamenávat. Z počátku formou pokus / omyl (a že jich bylo). V
        podomácku vyrobeném studiu jsme postupně tvořili něco, co nás
        naplňovalo.
      </p>
      <br></br>
      <p className="text-left">
        Na nějakou dobu se pak naše cesty rozešly jinými směry. Odstěhovali jsme
        se do jiných měst, věnovali se jiným věcem a žili svoje životy. To se
        změnilo až v roce 2022, kdy jsme se oba znovu objevili v České Třebové.
        Vrátili jsme se zpět do rodného města.
      </p>
      <br></br>
      <p className="text-left">
        Myšlenka o založení opravdového nahrávacího studia začala vznikat už
        spoustu let zpátky. Realizovat se ale začala ve chvíli, kdy jsme si
        uvědomili, že bychom se v životě rádi posunuli, něco vybudovali a začali
        se věnovat tomu, co nás skutečně baví. Myšlenku jsme začali rozvíjet,
        zabrali jsme a po dvou letech vybudovali to, co jsme vždy chtěli. Naše
        vlastní nahrávací studio.
      </p>
      <br></br>
      <p className="text-left">
        Místo, kde si dovolujeme žít vlastní sen a pomáháme ostatním realizovat
        ten jejich.
      </p>
      <br></br>
      <p className="text-left">
        Děkujeme všem za podporu a děkujeme i těm, kteří říkali, že to nezvládneme. Děkujeme za možnost věnovat se tomu, co nás opravdu baví!
      </p>
    </SectionWithImage>
  );
}
