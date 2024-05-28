"use client";

import React from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import classNames from "classnames";

export function Section({
  children,
  title,
  id,
  animate = "animate-jump-in",
}: {
  children: React.ReactNode;
  title?: React.ReactNode | string;
  id?: string;
  animate?: string | false;
}) {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      id={id}
      className={classNames(
        "bg-white px-4 py-16",
        animate && (isVisible1 ? animate : "opacity-0"),
      )}
      ref={ref1}
    >
      <div className="testimonials container mx-auto max-w-screen-xl px-4">
        <div className="mb-12 text-center lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
