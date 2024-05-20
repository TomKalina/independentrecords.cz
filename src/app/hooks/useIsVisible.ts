"use client";

import { useEffect, useState } from "react";

export function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe((ref as any).current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
