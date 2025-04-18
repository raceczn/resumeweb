import { BgGradient } from "./components/BgGradient";
import { GetinTouch } from "./components/GetTouch";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import clsx from "clsx";
import { ShadowBox } from "@/app/components/ShadowBox";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <title>Intro | Rances Cuizon</title>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="div"
                delay={HEADING_DELAY}
                className="animate-border-glow relative mx-auto mb-2 max-w-fit rounded-full border-2 border-[#328E6E] bg-white px-4 py-1 text-sm font-semibold text-text-primary md:text-base"
              >
                Hello! <span className="animate-wave">👋</span> I'm Rances
                Cuizon
              </AnimatedText>

              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                I design and develop things for mobile and web.
              </AnimatedText>
            </GridWrapper>

            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="px-4 leading-8 text-text-secondary"
                >
                  Passionate software developer who loves designing and creating
                  innovative solutions for both mobile and web platforms.
                  Slightly addicted to chocolate, and not a fan of{" "}
                  <span className="inline-block font-bold text-blue-500">
                    C<span className="inline-block rotate-0 transform">S</span>
                    <span className="inline-block translate-y-1 rotate-[25deg] align-baseline">
                      S
                    </span>
                  </span>
                  .
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>

          {/* Desktop Photos */}
          {/* <div>
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div> */}
        </section>

        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Get to know me.</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Who and my programming origins
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Hi! I’m Rances Cuizon, but most people call me Race or Ranz.
                  I'm currently pursuing a Bachelor of Science in Computer
                  Science at Cavite State University, and my journey into
                  programming started right there—during my college years. At
                  first, I was just curious about how things work behind the
                  screen, but as I dived deeper into the fundamentals, I
                  realized that this is what I’m meant to do. Sitting in front
                  of a computer, solving problems, and creating something from
                  nothing.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/images/aboutme2.jpg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="py-18 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Finding My Way to Web
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  What truly shaped my path was becoming a Project Manager for
                  various academic and passion-driven projects. Leading a team
                  and managing technical tasks gave me a sense of responsibility
                  and fulfillment I didn’t know I needed. I learned to take
                  things seriously, not just for the grades, but for growth.
                  Over time, I faced many challenges that helped improve my
                  leadership and problem-solving skills. I’m proud to be part of
                  successful projects, whether it’s building mobile apps or
                  responsive web interfaces. I enjoy every part of the
                  process—from ideation to execution.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/images/aboutme3.png"
                    alt="Leadership"
                  />
                </div>
              </div>
            </div>
            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Life Beyond Code
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I am the second eldest among four siblings, all of us are
                  boys. Growing up in a big family has shaped my perspective on
                  collaboration and responsibility. Our home is always filled
                  with energy, and the experience of having so many brothers has
                  taught me how to navigate different personalities, solve
                  problems together, and support each other through thick and
                  thin.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  My family has always been a strong foundation, motivating me
                  to pursue my goals with determination. They’ve instilled in me
                  values of hard work, humility, and the importance of staying
                  grounded, which I carry with me in both my personal and
                  professional life.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[370px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/images/family.jpg"
                    alt="Family"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <GetinTouch />
        </section>
      </div>
    </section>
  );
}
