import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Photo } from "@/app/components/Photo";

type journey = {
  subtitle: string;
  title: string;
  description: string[];
};

type MyJourney = {
  title: string;
  journeys: journey[];
};

type PresentationList = {
  challenges: MyJourney;
  learnings: MyJourney;
  realize: MyJourney;
};

const presentationList: PresentationList = {
  challenges: {
    title: "Challenges",
    journeys: [
      {
        subtitle: "",
        title: "There was a time I wished I could pause life.",
        description: [
          "Not stop it—just pause it long enough to breathe, to feel, to be free without guilt.",
          "It wasn’t that I hated what I was doing. In fact, I loved it. But somewhere along the way, the pressure became so loud, I couldn’t hear my own passion anymore. I was drowning in overlapping roles—juggling academic deadlines, freelance tasks, capstone system projects, and the unspoken expectations that come from being the second eldest in a hardworking Filipino family. Each day felt like a race I didn’t sign up for.",
          "Late nights weren’t quiet. They were filled with error logs, pending submissions, and internal breakdowns masked by a simple “Kaya pa.” I would stare at my screen—debugging not just code, but also my self-worth. I asked myself over and over, “Why can’t I get this right? Why does everyone else seem to be moving forward while I’m stuck?”",
        ],
      },
      {
        subtitle: "",
        title: "The Silent Doubt",
        description: [
          "There were moments I’d scroll through social media, seeing people share their wins—internships, bootcamp certificates, thriving small businesses, or their latest recognitions. I would smile, leave a supportive comment, even react with genuine pride for them. But deep down, I felt like I was falling behind. I wondered, “When will it be my turn?",
        ],
      },
      {
        subtitle: "",
        title:
          "The Weight No One Sees",
        description: [
          "I grew up in a family that challengesd simply. We had enough to get by, but never enough to feel safe. There was always a line we walked between comfort and sacrifice. My parents worked incredibly hard—my mom even went abroad—just to make sure we had opportunities they never had. And as one of seven siblings, I learned early on not to ask for more than what was needed.",
          "But understanding that reality didn’t make it any lighter.",
          "There were times we’d face sudden expenses—hospital bills, school payments, or emergencies—and I could see the tiredness in my parents’ eyes. They never made us feel the burden, but I felt it anyway. I carried it with me in silence. I knew that every small success I had wasn’t just for me—it was for them.",
          "So, I kept going.",
          "Even when I was tired.",
          "Even when I was doubting myself.",
          "Even when no one saw how hard I was trying."
        ],
      },
      {
        subtitle: "",
        title: "The Other Side of the Story",
        description: [
          "There were other battles too—not just academic or financial. I dealt with imposter syndrome, moments of isolation, burnout, and mental blocks that made even the simplest tasks feel impossible. There were days I didn’t feel creative, smart, or “enough.” I lost sleep. I missed meals. I skipped breaks because I thought “productivity” was the only way to prove myself.",
          "But all of these brought lessons I now hold close to my heart."
        ],
      },
    ],
  },
  learnings: {
    title: "What I’ve Learned",
    journeys: [
      {
        subtitle: "",
        title: "1. Growth isn’t linear—and that’s okay.",
        description: [
          "There’s no one path to success. Some people bloom early, others take time. I’ve learned to stop rushing the process and trust that my journey, with all its detours and pauses, still matters.",
        ],
      },
      {
        subtitle: "",
        title:"2. Rest is part of the grind.",
        description: [
          "I used to feel guilty for taking breaks. But I’ve come to understand that you can’t pour from an empty cup. Resting isn’t quitting—it’s recharging. It’s necessary.",
        ],
      },
      {
        subtitle: "",
        title: "3. It's okay to ask for help.",
        description: [
          "For the longest time, I thought strength meant doing everything alone. But I’ve learned that real strength is knowing when to reach out, when to say “I’m struggling,” and when to accept support.",
        ],
      },
      {
        subtitle: "",
        title: "4. Being behind is just a perspective.",
        description: [
          "Maybe I didn’t get that internship. Maybe my project didn’t work the first time. But that doesn’t mean I’m behind. I’m just on a different timeline—and that’s valid.",
        ],
      },
      {
        subtitle: "",
        title: "5. Family is my \"why.\"",
        description: [
          "Every hardship I face is rooted in a bigger purpose: to make life better for my family. That purpose fuels me on days when motivation runs dry.",
        ],
      },
      {
        subtitle: "",
        title: "6. Self-worth isn’t tied to accomplishments.",
        description: [
          "I am not just my grades, my skills, or the output I dechallengesr. I am a work in progress, constantly evolving, and that’s something to be proud of.",
        ],
      },
    ],
  },
  realize: {
    title: "In the end, I realized",
    journeys: [
      {
        subtitle: "",
        title:
          "I used to want to pause life.",
        description: [
          "Now, I want to challenges it more intentionally—acknowledging the struggles, appreciating the slow wins, and honoring the journey.",
          "Because all of it—every late night, every tear, every retry—shaped the person I’m becoming.",
          "And I’m proud of that."
        ],
      },
    ],
  },
};

export default function JourneyPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();
  return (
    <div className="relative mt-14">
      <title>Challenges & Learnings | Braydon Coyer</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>Challenges & Learnings:</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                The Glitches That Made Me Stronger
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/rancesp2.png"
                      alt="Rances pogi "
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/coffee.png"
                      alt="Drinks with code"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/coffee2.png"
                      alt="Holding drinks"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        <div className="relative space-y-32">
          {/* journeys list */}
          <section className="space-y-16">
            {Object.entries(presentationList).map(([key, category]) => (
              <GridWrapper key={key} className="py-4">
                <div>
                  <div className="grid h-auto grid-cols-1 text-balance pt-16 lg:grid-cols-12">
                    <h2 className="mb-16 text-balance text-3xl font-semibold leading-10 lg:col-span-2 lg:mb-0 lg:text-right">
                      {category.title}
                    </h2>
                    <div className="col-span-2 hidden h-auto justify-center lg:flex">
                      <svg
                        className="h-full w-2"
                        viewBox="0 0 8 100"
                        preserveAspectRatio="none"
                      >
                        <g filter="url(#filter0_i_185_3294)">
                          <path
                            d="M4 4L4 96"
                            stroke="#D6DADE"
                            strokeOpacity="0.24"
                            strokeWidth="8"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_185_3294"
                            x="0"
                            y="0"
                            width="8"
                            height="100%"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.847059 0 0 0 0 0.882353 0 0 0 0 0.921569 0 0 0 0.32 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_185_3294"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col space-y-14 text-left lg:col-span-8 lg:col-start-5">
                      {category.journeys.map((journey, index) => (
                        <div key={index}>
                          <h3 className="mb-2 text-lg font-semibold">
                            {journey.title}
                          </h3>
                          <p className="mb-6 text-xs text-text-secondary">
                            {journey.subtitle}
                          </p>
                          <div className="mb-6 text-base leading-relaxed text-gray-600">
                            {journey.description.map((desc, index) => (
                              <p key={index} className="mb-2">
                                {desc}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GridWrapper>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
