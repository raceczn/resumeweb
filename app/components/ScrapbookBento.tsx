"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAnyWhere, useMediaQuery } from "usehooks-ts";
import Image from "next/image";

import { cn } from "../lib/utils";
import { useRotationVelocity } from "../lib/useRotationVelocity";
import { getRandomNumberInRange } from "../lib/getRandomNumberInRange";
import { useElementBoundingRect } from "../lib/useelementBoundingRect";
import { BentoCard } from "./BentoCard";

function Sticker({
  children,
  index = 1,
  caption,
  className,
  preventYOffsetOnMobile: preventYOffset,
}: {
  children: React.ReactNode;
  index: number;
  caption?: string;
  className?: string;
  preventYOffsetOnMobile?: boolean;
}) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const boundingRect = useElementBoundingRect(itemRef);

  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState<Boolean>(false);
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [isMounted, setIsMounted] = useState<Boolean>(false);

  // State hooks for dynamic values
  const [initialRotation, setInitialRotation] = useState<number>(0);
  const [initialY, setInitialY] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
    // Set random values after the component mounts on the client side
    setInitialRotation(getRandomNumberInRange(-15, 15));
    setInitialY(
      getRandomNumberInRange(10, 25) *
        (index === 0 ? 1 : index % 2 === 0 ? -0.5 : 0.5),
    );
  }, [index]); // Added index as dependency

  const matches = useMediaQuery("(max-width: 768px)");

  function onOpen() {
    if (matches) {
      setIsModal(!isModal);
      setIsCaptionVisible(!isModal);
    }
  }

  function onStart() {
    if (!matches) {
      setIsCaptionVisible(true);
      setIsDragging(true);
    }
  }

  function onEnd() {
    if (!matches) {
      setIsCaptionVisible(false);
      setIsDragging(false);
    }
  }

  useClickAnyWhere((e) => {
    if (
      e.target != itemRef.current &&
      !itemRef.current?.contains(e.target as Node) &&
      isModal &&
      matches
    ) {
      setIsModal(false);
      setIsCaptionVisible(false);
    }
  });

  const { rotate, x } = useRotationVelocity(initialRotation);

  const stickerVariants = {
    default: {},
    modal: {
      x: -boundingRect.x / 2 + boundingRect.width,
      rotate: 0,
      scale: 1.2,
      zIndex: 1000,
    },
    dragging: {
      scale: 1.2,
      zIndex: 1000,
    },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      ref={itemRef}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        shown: {
          opacity: 1,
          scale: 1,
          y: matches && preventYOffset ? Math.abs(initialY) : initialY,
        },
      }}
      style={{
        zIndex: isModal || isDragging ? 1000 : undefined,
      }}
      className={cn("relative cursor-grab active:cursor-grabbing", className)}
    >
      <motion.div
        variants={stickerVariants}
        className={cn(
          "flex-shrink-1 relative h-fit min-w-[96px] drop-shadow-lg",
        )}
        drag={!matches}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{
          power: 0.1,
          bounceStiffness: 200,
        }}
        dragElastic={0.8}
        style={{
          rotate: isModal ? 0 : rotate,
          x,
        }}
        animate={
          matches
            ? isModal
              ? "modal"
              : "default"
            : isDragging
              ? "dragging"
              : "default"
        }
        onTap={onOpen}
        onHoverStart={onStart}
        onHoverEnd={onEnd}
        onDragEnd={onEnd}
      >
        <div className="pointer-events-none select-none">{children}</div>

        <AnimatePresence>
          {caption && caption.length > 0 && isCaptionVisible && (
            <motion.div
              key="child"
              initial={{ opacity: 0, y: -48, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 0.9 }}
              exit={{ opacity: 0, y: -48, scale: 0.5 }}
              style={{
                left: `50%`,
                x: `-50%`,
              }}
              className={cn(
                "pointer-events-none absolute top-full z-10 mx-auto mt-2 min-w-[160px] max-w-screen-sm select-none text-balance rounded-sm bg-white/95 px-3 py-2 text-center text-[10px] text-black backdrop-blur-3xl",
              )}
            >
              {caption}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function ScrapbookBento({ className }: { className?: string }) {
  const [resetIndex, setResetIndex] = useState<number>(0);

  const container = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: {
        delayChilcren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <BentoCard
      colSpan={9}
      rowSpan={4}
      height="h-[220px]"
      showHoverGradient={false}
      hideOverflow={false}
    >
      <h2 className="mb-2 animate-gradient-shift mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-lg font-semibold text-transparent">
        Wishlist{" "}
        <span className="ml-1 cursor-pointer text-[0.7rem] italic text-gray-500 underline-offset-4 transition-all duration-300 hover:text-blue-600 hover:underline">
          (give it a hover ✨)
        </span>
      </h2>

      <div className="absolute top-0 h-[220px] w-full overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)]"></div>
      <div
        key={resetIndex}
        className={cn(
          "bg-secondary @container xs:max-h-none w-full rounded-3xl p-6",
          className,
        )}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="shown"
          className="-mt-8 grid h-full w-full grid-cols-4 items-center gap-4"
        >
          <Sticker
            caption="I want to pursue a career as a web or software developer."
            index={0}
          >
            <Image
              width={80}
              height={80}
              alt="Developer icon"
              src="/images/future/developer.png"
              className="xs:max-w-none max-w-[100px]"
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption="Of course, my first goal is to graduate from Cavite State University (CvSU) with a degree in Computer Science."
            index={1}
          >
            <Image
              width={96}
              height={106}
              alt="CvSU logo"
              src="/images/future/cvsu.png"
              className="xs:max-w-none max-w-[100px]"
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption="One of my biggest dreams is to work at Google someday."
            index={2}
          >
            <Image
              width={130}
              height={130}
              alt="Google logo"
              src="/images/future/google.png"
              className=""
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption="I aim to earn my AWS Certified Cloud Practitioner certification to deepen my knowledge in cloud computing."
            index={3}
          >
            <Image
              width={160}
              height={160}
              alt="AWS certification"
              src="/images/future/aws_cert.png"
              draggable={false}
              className="xs:max-w-none"
            />
          </Sticker>
        </motion.div>
      </div>
    </BentoCard>
  );
}