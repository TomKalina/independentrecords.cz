import * as React from "react";

interface Props {
  title: string;
  //   children: React.ReactNode;
  text: string;
  link?: string;
}

export default function Box({ title, text, link }: Props) {
  return (
    <>
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 rounded-xl"
          src="/assets/images/blog/blog-3.jpg"
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
          {title}
        </h1>
        <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
          {text}
        </p>
        <div className="mt-4">
          {link && (
            <a
              href="#"
              className="inline-flex items-center mt-4 font-semibold text-primary lg:mb-0 hover:text-gray-dark"
              title="Explore Our Team"
            >
              {" "}
              {link} »{" "}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
