import { BorderCard } from "@/app/components/BorderCard";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Skills_Stack } from "app/data/toolbox";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";
import SkillList from "../components/SkillList";

export default function ToolboxPage() {
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
              <span>My professional skills and development tools I work with.</span>
            </div>
          </GridWrapper>
        </div>
        {/* List */}
        <GridWrapper className="-mt-2"> 
          <div className="relative grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
            <SkillList/>
          </div>
        </GridWrapper>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
