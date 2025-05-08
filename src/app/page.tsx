import Box from "./components/Box";
import { Section } from "./components/Section";
import SectionWithImage from "./components/SectionWithImage";
import Equipment from "./subPages/Equipment";
import WeAre from "./subPages/WeAre";
import Services from "./subPages/Services";
import Story from "./subPages/Story";
import Slideshow from "./subPages/Slideshow";
import Link from "next/link";
import classNames from "classnames";
import { title } from "process";
import Loading from "@/app/subPages/Loading";
import SoundCloud from "@/app/components/SoundCloud";
import Review from "@/app/subPages/Review";
import Contacts from "@/app/subPages/Contacts";

export default function Home() {
  return (
    <>
      <Loading />
      <Slideshow />
      {/* <section className={classNames("bg-white px-4 py-16")}>
        <div className=" container ">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold">
              Independent Records - Nahrávací studio Česká Třebová
            </h1>
          </div>
        </div>
      </section> */}
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
