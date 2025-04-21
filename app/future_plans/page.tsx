import { ShadowBox } from "@/app/components/ShadowBox";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { ConnectionsBento } from "@/app/components/ConnectionsBento";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ToolboxBento } from "@/app/components/ToolboxBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";

type Talk = {
  conference: string;
  title: string;
  description: string;
};

type EventCategory = {
  title: string;
  talks: Talk[];
};

type PresentationList = {
  careergoals: EventCategory;
  lifegoals: EventCategory;
  longterm: EventCategory;
};

const presentationList: PresentationList = {
  careergoals: {
    title: "Career Goals",
    talks: [
      {
        conference: "",
        title: "Keep Improving My Portfolio",
        description:
          "I will continue to update this portfolio with better design, more useful features, and new projects. I want it to reflect who I am — someone who loves to create, solve problems, and help others through technology.",
      },
      {
        conference: "",
        title: "Learn More, Build More",
        description:
          "I plan to master full-stack development. That means learning not just front-end tools like React and Tailwind, but also back-end tools like Laravel, Node.js, and databases. I want to build complete apps that are both smart and user-friendly.",
      },
      {
        conference: "",
        title: "Gain Certificates & Real Experience",
        description:
          "I’ll take online courses and earn certificates to strengthen my expertise, and gain professional experience through internships or freelance work to move closer to my career goals.",
      },
    ],
  },
  lifegoals: {
    title: "Life Goals",
    talks: [
      {
        conference: "",
        title: "Travel the World",
        description:
          "I want to travel and see beautiful places in the Philippines and abroad. I believe traveling helps you grow, meet new people, and understand different cultures. My dream destinations include Japan, South Korea, and Italy.",
      },
      {
        conference: "",
        title: "Live a Balanced Life",
        description:
          "I believe that enjoying life helps you do better at work. So, I plan to balance my time between work, rest, hobbies, family, and friends. Life is not just about deadlines — it’s also about memories.",
      },
      {
        conference: "",
        title: "Give Back to My Family",
        description:
          "I want to support my family financially and emotionally. Giving back to them is one of my biggest motivations. I dream of helping my siblings with their studies and giving my parents the life they deserve.",
      },
      {
        conference: "",
        title: "Do Things That Make Me Happy",
        description:
          "Aside from tech, I also want to enjoy simple joys — good coffee, sunsets, music, movies, and spontaneous adventures. These little things keep me inspired and motivated.",
      },
    ],
  },
  longterm: {
    title: "Long-Term Vision",
    talks: [
      {
        conference: "",
        title: "Build Something of My Own",
        description:
          "Someday, I want to build my own tech product or startup. It could be a helpful app, a digital tool for students, or a small company that makes life easier for people.",
      },
      {
        conference: "",
        title: "Become a Mentor & Share Knowledge",
        description:
          "In the future, I want to help younger students and aspiring devs by teaching and sharing what I’ve learned — maybe through content creation or community events",
      },
    ],
  },
};

export default function FuturePlansPage() {
  return (
    <div className="relative">
      <title>Future Plans | Rances Cuizon</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Future Goals: <br />
            Still Debugging
            <span className="typing-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </h1>
        </GridWrapper>

        <div>
          {/* Photos */}
          <div className="mb-8 mt-16 hidden items-center justify-center space-x-12 lg:flex">
            <div className="relative">
              <ShadowBox width={278} height={278}></ShadowBox>
              <span className="absolute left-1 top-2 rotate-[-8deg]">
                <Photo
                  width={270}
                  height={270}
                  src="/images/future/future.jpg"
                  alt="Working while enjoying life photo"
                  direction="right"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={412} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[8deg]">
                <Photo
                  width={404}
                  height={270}
                  src="/images/future/travel.jpg"
                  alt="Travelling photo"
                  direction="left"
                  className="h-full w-full object-cover"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={188} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[-8deg]">
                <Photo
                  width={180}
                  height={270}
                  src="/images/future/developer.jpg"
                  alt="Developer photo"
                  direction="right"
                />
              </span>
            </div>
          </div>
          {/* Mobile Photos */}
          <AnimatedMobilePhotos delay={0.1} />
        </div>

        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-700">
            <span>
              My future goals aren’t just about work — I want to careergoals a
              meaningful and balanced life.
            </span>
          </div>
        </GridWrapper>

        <div className="relative space-y-16">
          {/* Talks list */}
          <section className="space-y-16">
            {Object.entries(presentationList).map(([key, category]) => (
              <GridWrapper key={key} className="py-2">
                <div>
                  <div className="grid h-auto grid-cols-1 text-balance pt-8 lg:grid-cols-12">
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
                      {category.talks.map((talk, index) => (
                        <div key={index}>
                          <h3 className="mb-2 text-lg font-semibold">
                            {talk.title}
                          </h3>
                          <p className="mb-6 text-xs text-text-secondary">
                            {talk.conference}
                          </p>
                          <p className="mb-6 text-base leading-7 text-text-secondary">
                            {talk.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GridWrapper>
            ))}
          </section>

            

          <section className="relative space-y-16">
            <div className="text-center text-sm font-medium text-indigo-700">
              <span>
                Collection of my Wishlist and Plans!
              </span>
            </div>
            {/* Plann */}
            <GridWrapper>
              <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-12">
                <div className="h-full lg:col-span-3 lg:row-span-6">
                  <div className="h-full">
                    <CurrentlyPlayingBento />
                  </div>
                </div>

                <div className="hidden h-full lg:col-span-7 lg:row-span-5 lg:block">
                  <div className="h-full">
                    <ScrapbookBento />
                  </div>
                </div>

                <div className="hidden h-full lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                  <div className="h-full">
                    <CurrentlyReadingBento />
                  </div>
                </div>

                <div className="h-full lg:col-span-7 lg:row-span-8">
                  <div className="h-full">
                    <ConnectionsBento />
                  </div>
                </div>

                <div className="h-full lg:col-span-3 lg:row-span-4">
                  <div className="h-full">
                    <ToolboxBento />
                  </div>
                </div>
              </div>
            </GridWrapper>
          </section>
          
        </div>
      </div>
    </div>
  );
}
