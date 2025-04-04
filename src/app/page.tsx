import Box from "./components/Box";
import { Section } from "./components/Section";
import SectionWithImage from "./components/SectionWithImage";
import Equipment from "./subPages/Equipment";
import Map from "./components/Map";
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
      <Section id="kontakty" title="Kontakt">
        <div className="mx-auto mt-8 max-w-md space-y-4">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-wrap items-center justify-between whitespace-normal break-words">
              <h3 className="text-xl font-semibold">Email</h3>
              <a
              href="mailto:independentrecords@protonmail.com"
              className="text-lg font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
              independentrecords@protonmail.com
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Telefon</h3>
              <div className="text-lg font-medium">
                <a href="tel:+420731262744">+420 731 262 744</a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Adresa</h3>
              <div className="text-lg font-medium">
                Skalka 1858, Česká Třebová
              </div>
            </div>
          </div>
        </div>
        <br />
        <Map />
      </Section>
    </>
  );
}
