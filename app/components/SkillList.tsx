import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import MarqueeElement from "@/app/components/MarqueeElement";

import { Skills_Stack, TOOL_STACKS } from "@/app/data/toolbox";

interface SkillCardProps {
  name: string;
  imgSrc: string;
}

const SkillCard = ({ name, imgSrc }: SkillCardProps) => {
  return (
    <div className="px-2">
      <div className="flex items-center w-full space-x-2 rounded-full border border-neutral-300  px-2 py-2 shadow-sm ">
        <img src={imgSrc} alt={name} className="h-6 w-6 object-contain" />
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};

const SkillList = () => {

  return (
    <section className="space-y-4 w-full col-span-full">
    
      {/* STACK FOR SKILLS */}
      <MarqueeElement direction="left">
        {Skills_Stack.map((skill, i) => (
          <SkillCard key={i} name={skill.title} imgSrc={skill.imgSrc} />
        ))}
      </MarqueeElement>

      {/* STACK FOR TOOLS */}
      <MarqueeElement direction="right">
        {TOOL_STACKS.map((tool, i) => (
          <SkillCard key={i} name={tool.title} imgSrc={tool.imgSrc} />
        ))}
      </MarqueeElement>
    </section>
  );
};

export default SkillList;
