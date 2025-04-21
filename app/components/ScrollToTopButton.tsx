"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700 shadow-lg transition-all duration-300 hover:from-gray-300 hover:to-gray-400 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
};