import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function CurrentlyReadingBento() {
  return (
    <BentoCard height="h-full" className="group">
      <h2 className="animate-gradient-shift mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-base font-semibold text-transparent">
        I wish to have!
      </h2>{" "}
      <div className="relative h-full">
        <div className="absolute left-5 top-6 h-full origin-bottom-left transition-transform duration-300 ease-in-out group-hover:-rotate-3">
          <BookCover />
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </BentoCard>
  );
}


function BookCover() {
  return (
    <div className="relative aspect-video h-full w-96 overflow-hidden rounded bg-red-500">
      <div className="absolute left-5 h-full w-2 bg-slate-900/20 blur-sm"></div>
      <Image
        src="/images/future/orv-side-story.png"
        alt="Dune book cover"
        fill
        className="object-cover"
      />
    </div>
  );
}
