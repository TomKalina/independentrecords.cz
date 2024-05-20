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
        "bg-white py-16 px-4",
        animate && isVisible1 ? animate : "opacity-0"
      )}
      ref={ref1}
    >
      <div className="container mx-auto max-w-screen-xl px-4 testimonials">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
