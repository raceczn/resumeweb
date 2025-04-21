import { Skills_Stack } from "../data/toolbox";
import { BentoCard } from "./BentoCard";
import Image from 'next/image';

const filteredStack = ["React", "TypeScript", "Next.js"];

const items = Skills_Stack
  .filter(item => filteredStack.includes(item.title))
  .map((item, index) => (
    <div key={item.title} className="group inline-block text-center">
      <div
        className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 delay-${index * 100} group-hover:-translate-y-3`}
        style={{
          width: 110,
          height: 110,
        }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <Image
            className="h-10 w-10"
            alt={item.title}
            src={item.imgSrc}
            width={40}  
            height={40} 
            layout="intrinsic"  
          />
        </div>
      </div>
    </div>
  ));

export function ToolboxBento() {
  return (
    <BentoCard height="md:h-[300px] lg:h-[300px]">
      <div className="group-hover:from-bg-white absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg-primary to-transparent"></div>
      <div className="group-hover:from-bg-white absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg-primary to-transparent"></div>
      <div className="z-20 text-center">
        <h2 className="text-base font-medium">Core Frontend Skills</h2>
        <p className="mt-1 text-text-secondary">
          I want to learn more about them:
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
        {items}
      </div>
    </BentoCard>
  );
}