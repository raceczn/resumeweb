"use client";

import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";
import React from "react";

export function SpeakingBento() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BentoCard linkTo="/speaking" height="h-[276px]">
      <div
        className="group h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="absolute left-1/2 -translate-x-1/2">
          <CirclePattern isHovered={isHovered} />
        </span>
   
      </div>
    </BentoCard>
  );
}

export function CirclePattern({ isHovered }: { isHovered?: boolean }) {
  const rings = [
    { width: 195, height: 195, x: 86.5, y: 108.5, delay: 0 }, // innermost
    { width: 267, height: 267, x: 50.5, y: 72.5, delay: 0.2 }, // inner middle
    { width: 339, height: 339, x: 14.5, y: 36.5, delay: 0.4 }, // outer middle
    { width: 411, height: 411, x: -21.5, y: 0.5, delay: 0.6 }, // outermost
  ];

  return (
    <svg
      className="h-full w-[400px]"
      viewBox="0 0 368 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {rings.map((ring, index) => (
        <motion.rect
          key={index}
          x={ring.x}
          y={ring.y}
          width={ring.width}
          height={ring.height}
          rx={ring.width / 2}
          fill="none"
          initial={{ stroke: "#D6DADE", strokeOpacity: 0.5 }}
          animate={{
            stroke: isHovered ? "#818cf8" : "#D6DADE",
            strokeOpacity: isHovered ? 1 : 0.5,
          }}
          transition={{
            duration: 0.4,
            delay: isHovered ? ring.delay : 0.45 - ring.delay, // Reverse delay when unhovered
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

