import Box from "./components/Box";
import { Section } from "./components/Section";
import SectionWithImage from "./components/SectionWithImage";
import Equipment from "./subPages/Equipment";
import Map from "./components/Map";
import WeAre from "./subPages/WeAre";
import Services from "./subPages/Services";
import Story from "./subPages/Story";

export default function Home() {
  return (
    <>
      <Story />
      <WeAre />
      <Services />
      <Equipment />
      <Section id="kontakty" title="Kontakt">
        <Map />
      </Section>
    </>
  );
}
