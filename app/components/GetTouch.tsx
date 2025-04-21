"use client";

import Link from "next/link";

export function GetinTouch({ className }: { className?: string }) {
  return (
    <section className={`bg-gradient-to-r from-black via-gray-900 to-black w-full ${className || ""}`}>
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center py-16 text-center space-y-6 md:rounded-lg">
        <h2 className="text-4xl font-bold text-white">Need help building something&quest;</h2>
        <p className="text-white/75 w-full md:max-w-xl">
          Whether you&apos;re searching for a dedicated partner to develop your project or simply need expert support, I&apos;m here to help.
        </p>
        <Link href="/contact" aria-label="Contact">
          <button className="px-6 py-3 text-lg border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
}
