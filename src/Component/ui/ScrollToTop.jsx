import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  // The initial value is calculated once on the first render. This way, if the visitor refreshes
  // the page while it is already scrolled down, the button shows up immediately instead of
  // waiting for the next scroll event.
  const [isVisible, setIsVisible] = useState(() => window.scrollY > 300);

  useEffect(() => {
    // The handler gets a name so the exact same function can be removed in the cleanup below.
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // "passive: true" tells the browser this listener never blocks scrolling,
    // which keeps scrolling smooth on phones.
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup: remove the listener when the component unmounts. Before this, every mount added a
    // new listener that was never removed (a small memory leak).
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible ? (
    // Position and size:
    // - bottom-4 right-4 on mobile, bottom-5 right-5 (your original) from 640px up.
    // - p-4 on mobile makes the button about 46px, a comfortable size for a thumb (the minimum
    //   recommended touch target is about 44px). From 640px it is your original p-3.
    // - z-40: keeps the button above the page sections, but below the mobile menu (z-50) in the header.
    // - aria-label: gives the icon-only button a name for screen readers.
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 hover:bg-Primary01 group p-4 sm:p-3 bg-black/10 backdrop-blur-md transition-all rounded-lg shadow-xl"
    >
        <svg className='fill-black group-hover:fill-white' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z"/>
        </svg>
    </button>
  ) : null;
};

export default ScrollToTop;
