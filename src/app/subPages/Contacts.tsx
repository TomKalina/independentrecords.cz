"use client";

import { Section } from "@/app/components/Section";
import * as React from "react";
import Map from "../components/Map";

interface Props {}

const Contacts: React.FC<Props> = ({}) => {
  const [phone, setPhone] = React.useState<string>("");

  React.useEffect(() => {
    const phoneNumber = "+420731262744";
    setPhone(phoneNumber);
  }, []);

  return (
    <>
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
                <a href={`tel:${phone}`}>{phone}</a>
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
};

export default Contacts;
