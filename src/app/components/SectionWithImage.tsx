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
    <section id={id} className="scroll-mt-menu bg-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <h2 className="mb-4 text-5xl font-bold">{title}</h2>
          {children}
        </div>

        <div className="md:w-1/2">
          <Image
            src="/assets/images/studio/medium/1.jpg"
            alt="Image"
            className="w-full rounded-lg bg-gray-100 shadow-lg md:mx-auto md:max-w-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
