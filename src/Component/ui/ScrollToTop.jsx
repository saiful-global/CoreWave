import { useState, useEffect } from "react";

// How far (in px) the page must be scrolled before the button appears.
const SHOW_AFTER = 300;

export default function ScrollToTop() {
  // This is a plain React + Vite project: the page only renders in the browser (no server rendering),
  // so `window` always exists and it is safe to read it right here.
  // The starting value is calculated once on the first render. This way, if the visitor refreshes
  // the page while it is already scrolled down, the button shows up immediately instead of
  // waiting for the next scroll event.
  // (In Next.js this had to be `false` and was fixed inside useEffect, because the server has no window.)
  const [isVisible, setIsVisible] = useState(() => window.scrollY > SHOW_AFTER);

  useEffect(() => {
    // The handler gets a name so the exact same function can be removed in the cleanup below.
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER);
    };

    // "passive: true" tells the browser this listener never blocks scrolling,
    // which keeps scrolling smooth on phones.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove the listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    // Position and size:
    // - bottom-4 right-4 on mobile, bottom-5 right-5 from 640px up.
    // - p-4 on mobile makes the button about 46px, a comfortable size for a thumb
    //   (the recommended minimum touch target is about 44px). From 640px it is p-3.
    // - z-40: above the page sections, below the header's mobile menu (z-50).
    // - Colors: the original button was made for a DARK site (white arrow on a see-through white
    //   background). CoreWave has a LIGHT background, where that would be invisible, so it uses
    //   a see-through black background with a black arrow, and on hover the brand green with a white arrow.
    // - focus-visible outline: a green ring shows when the button is reached with the keyboard (Tab).
    // - aria-label: gives the icon-only button a name for screen readers.
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group fixed bottom-4 right-4 z-40 rounded-lg bg-black/10 p-4 shadow-xl backdrop-blur-md transition-all hover:bg-Primary01 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Primary01 sm:bottom-5 sm:right-5 sm:p-3"
    >
      <svg
        className="fill-black group-hover:fill-white"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" />
      </svg>
    </button>
  );
}
