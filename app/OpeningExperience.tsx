"use client";

import { useEffect, useRef, useState } from "react";

export function OpeningExperience() {
  const [opening, setOpening] = useState(false);
  const [complete, setComplete] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  const openInvitation = () => {
    if (opening) return;
    setOpening(true);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timerRef.current = setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "auto" });
      setComplete(true);
    }, reducedMotion ? 260 : 1500);
  };

  if (complete) return null;

  return (
    <section
      className={`opening-shell${opening ? " is-opening" : ""}`}
      aria-labelledby="opening-title"
      aria-live="polite"
    >
      <div className="opening-grain" aria-hidden="true" />
      <h1 id="opening-title" className="sr-only">
        Official Myanmar Business Trade Show and Travel Expo 2026 invitation from Shwe Nwar Lay
      </h1>

      <div className="envelope-scene">
        <div className="official-cover">
          <img
            src="/images/official-expo-invitation-cover.webp"
            alt="Myanmar Business Trade Show and Travel Expo 2026 event invitation addressed to Dear Esteemed Guest, presented by Shwe Nwar Lay"
            width={960}
            height={1440}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <button className="tap-open" type="button" onClick={openInvitation} disabled={opening}>
        Tap to Open
        <span aria-hidden="true">↓</span>
      </button>
    </section>
  );
}
