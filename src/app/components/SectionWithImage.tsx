import * as React from "react";
import Image from "next/image";

export default function SectionWithImage({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id: string;
}) {
  return (
    <section id={id} className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          {children}
        </div>

        <div className="md:w-1/2">
          <Image
            src="/ai/6.jpeg"
            alt="Image"
            className="w-full md:mx-auto md:max-w-md rounded-lg bg-gray-100 shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
