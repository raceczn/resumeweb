import { Skills_Stack } from "../data/toolbox";
import { BentoCard } from "./BentoCard";

const items = Skills_Stack
  .map((item, index) => (
    <div key={item.title} className="group inline-block text-center">
      <div
        className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 ${
          index === 2
            ? "delay-0 group-hover:-translate-y-3"
            : index === 1 || index === 3
              ? "delay-100 group-hover:-translate-y-3"
              : "delay-200 group-hover:-translate-y-3"
        }`}
        style={{
          width: index === 2 ? 130 : 110,
          height: index === 2 ? 130 : 110,
        }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <img className="h-10 w-10" alt={item.title} src={item.imgSrc} />
        </div>
      </div>
    </div>
  ))
  .slice(0, 5);


