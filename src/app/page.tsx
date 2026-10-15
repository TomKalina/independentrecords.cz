import Equipment from "./subPages/Equipment";
import WeAre from "./subPages/WeAre";
import Services from "./subPages/Services";
import Story from "./subPages/Story";
import Slideshow from "./subPages/Slideshow";
import Loading from "@/app/subPages/Loading";
import SoundCloud from "@/app/components/SoundCloud";
import Review from "@/app/subPages/Review";
import Contacts from "@/app/subPages/Contacts";
import JsonLd from "@/components/JsonLd";
import { buildHomeJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd()} />
      <h1 className="sr-only">
        Independent Records – nahrávací studio Česká Třebová
      </h1>
      <Loading />
      <Slideshow />
      <Story />
      <WeAre />
      <Services />
      <Review />
      <SoundCloud />
      <Equipment />
      <Contacts />
    </>
  );
}
