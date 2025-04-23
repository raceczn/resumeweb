"use client";

import { GetinTouch } from "@/app/components/GetTouch";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Button } from "@/app/components/Button";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";

export default function ResumePage() {
  return (
    <div className="relative space-y-16">
      <div className="mt-8 text-center">
        <title>Resume | Rances Cuizon</title>

        <GridWrapper>
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            My Curriculum Vitae
          </h1>
          <div className="mt-4 text-center text-sm font-medium text-indigo-600">
            <span>
              A visual representation of my educational background, work experience, and skills.
            </span>
          </div>
        </GridWrapper>
        <GridWrapper className="py-4">
          <Button
            variant="primary"
            href="/curriculum_vitae.pdf"
            download
            className="px-6 py-3 text-lg"
          >
            Download CV
          </Button>
        </GridWrapper>
      </div>

      <GridWrapper className="space-y-6">
        <div className="flex justify-center">
          {/* Mobile view - simple link */}
          <div className="block md:hidden">
            <a
              href="/curriculum_vitae.pdf"
              className="text-lg text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/Download Resume
            </a>
          </div>

          {/* Desktop view - PDF embed (unchanged) */}
          <div className="hidden w-full md:block">
            <object
              data="/curriculum_vitae.pdf"
              type="application/pdf"
              width="100%"
              height="1200px"
              className="rounded-lg shadow-md"
            >
              <p>
                Your browser does not support PDF viewing.{" "}
                <a href="/Resume.pdf" className="text-blue-500 underline">
                  Download it here.
                </a>
              </p>
            </object>
          </div>
        </div>
      </GridWrapper>

      <section>
        <GetinTouch />
      </section>
      <ScrollToTopButton />
    </div>
  );
}
