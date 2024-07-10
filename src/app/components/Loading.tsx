"use client";

import classNames from "classnames";
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

const Loading: React.FC<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  //   if (!isLoading) {
  //     return <></>;
  //   }

  return (
    <div
      className={classNames(
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-95",
        {
          "animate-fade animate-reverse": !isLoading,
        },
      )}
    >
      <Image
        width={500}
        height={500}
        src="/logo/kulate-cerna.svg"
        alt="Logo"
        // className="mr-4 h-14 w-auto animate-jump-in"
      />
    </div>
  );
};

export default Loading;
