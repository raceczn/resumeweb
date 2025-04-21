import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Training } from "@/app/components/training_experiences";
import Achievements from "./achievements";
import { Skills_Stack, TOOL_STACKS } from "@/app/data/toolbox";
import Image from "next/image";
import SkillList from "../components/SkillList";
import { Suspense } from "react";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";


export default function SkillsPage() {
  return (
    <div className="relative">
      <title>Skills | Rances Cuizon</title>
      <span className="absolute left-1/2 top-20 -translate-y-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <div className="relative space-y-10 md:space-y-16">
        <div className="mx-auto text-balance pt-14 md:pt-16">
          <GridWrapper>
            <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              Acquired Skills, Trainings, & Certificates
            </h1>
          </GridWrapper>
        </div>
        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* Applications */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>
                These are the professional skills and development tools I work
                with.
              </span>
            </div>
          </GridWrapper>
        </div>
        {/* List */}
        <GridWrapper>
          <div className="relative grid grid-cols-4 place-items-center gap-2 sm:gap-3 md:gap-4 lg:grid-cols-8 lg:gap-4">
            {[...Skills_Stack, ...TOOL_STACKS]
              .filter((item) => item.title !== "Jikan API")
              .map((item) => (
                <a
                  key={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
                >
                  <div className="group inline-block text-center">
                    <div className="h-20 w-20 rounded-[20px] border border-border-primary bg-bg-primary p-1.5 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400 sm:h-24 sm:w-24 sm:p-2 md:h-28 md:w-28">
                      <div
                        className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset",
                        }}
                      >
                        <Image
                          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                          alt={item.title}
                          src={item.imgSrc}
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                    {item.title && (
                      <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm md:mt-3">
                        {item.title}
                      </p>
                    )}
                  </div>
                </a>
              ))}
          </div>
        </GridWrapper>
        <br />
        {/* Training */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>
                  Learning and Training experiences that helped me grow my
                  skills
                </span>
              </div>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Training />
          </GridWrapper>
        </div>
        <br />
        <br />
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                <span>Look what I&apos;ve earned.</span>
              </h2>
            </GridWrapper>
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>
                  A collection of Awards and Certificates that I have earned
                  throughout my academic and professional journey.
                </span>
              </div>
            </GridWrapper>
          </div>
        </div>

        <div className="space-y-16">
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            {/* Suspense boundary */}
            <Achievements />
          </Suspense>
        </div>

        <br />
        <br />
      </div>
      <ScrollToTopButton />

    </div>
  );
}
