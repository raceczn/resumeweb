import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Skills_Stack, TOOL_STACKS } from "app/data/toolbox";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  live_demo: string;
  github: string;
  stacks: string[];
}

const projects: Project[] = [
  {
    title: "Gochisou Bimi",
    description:
      "A mobile app developed for Gochisou Bimi to manage and track inventory easily. Users can check stock levels, update products, view history, and generate reports, making inventory management quick and simple.",
    image: "/projects/Gochisou_Bimi.png",
    live_demo: "",
    github: "https://github.com/RON2814/inventory_project",
    stacks: ["Dart", "Flutter", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Fighero",
    description:
      "An interactive eCommerce site for collectible toy figures. Built with Framer, it offers smooth navigation and engaging visuals for a user-friendly shopping experience.",
    image: "/projects/Fighero_web.png",
    live_demo: "https://figheroo.framer.website/",
    github: "",
    stacks: ["Framer", "Figma", "React"],
  },
  {
    title: "racecznfolio",
    description:
      "Personal portfolio website, showcasing my projects and skills. It features a clean design, smooth animations, and responsive layout for an optimal user experience across devices.",
    image: "/projects/raceczn-folio.png",
    live_demo: "https://racecznfolio.vercel.app/",
    github: "https://github.com/raceczn/raceczn_folio",
    stacks: ["React", "JavaScript", "Next.js", "Tailwind CSS", "SCSS"],
  },
  {
    title: "YelpCamp ",
    description:
      "A full-stack campground review app with user authentication, campground management, map pins, reviews, flash messages, and image uploads. Built with Node.js, Express, MongoDB, and Bootstrap",
    image: "/projects/YelpCamp.png",
    live_demo: "",
    github: "https://github.com/raceczn/YelpCamp",
    stacks: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    title: "Enrollment System",
    description:
      "A system that simplifies enrollment for CvSU's DCS Department. Students can check their grades, subjects, and Certificate of Registration, while role-based access makes data management more efficient.",
    image: "/projects/enrollment-system.png",
    live_demo: "",
    github: "https://github.com/RON2814/enrollment-system",
    stacks: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Anime Hunt",
    description:
      "A web app for anime fans to explore anime series with real-time data from Jikan API. It features a responsive, easy-to-use design with smooth animations for a great browsing experience.",
    image: "/projects/anime-hunt.png",
    live_demo: "https://anime-hunt-race.vercel.app/",
    github: "https://github.com/raceczn/anime_hunt",
    stacks: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Jikan API"],
  },
  {
    title: "Aristopets",
    description:
      "Aristopets is a platform that promotes premium care for cats and dogs. It encourages responsible pet ownership and builds a community that values love and respect for pets.",
    image: "/projects/aristopets.png",
    live_demo: "",
    github: "https://github.com/raceczn/aristopets",
    stacks: ["HTML", "CSS", "JavaScript", "Django"],
  },
  {
    title: "Comfee Shop",
    description:
      "Comfee is a simple e-commerce desktop app for a coffee shop. Built with Java Swing, it lets users browse the menu, view the gallery, and learn more about the shop.",
    image: "/projects/comfeee.png",
    live_demo: "",
    github: "https://github.com/raceczn/comfee_app",
    stacks: ["Java", "Figma"],
  },
  {
    title: "Checklist",
    description:
      "Checklist is a web app that helps students track their academic progress. It shows personal details, courses, grades, and more in a clear and organized way.",
    image: "/projects/Checklist.png",
    live_demo: "",
    github: "https://github.com/raceczn/Checklist",
    stacks: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
];

function ProjectImage(props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className="drama-shadow rounded-lg"
      width={500} // Set appropriate width
      height={300} // Set appropriate height
    />
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <title>Projects | Rances Cuizon</title>

      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my projects I&apos;ve worked on.
        </h1>
      </GridWrapper>
      <GridWrapper>
        <div className="text-center text-sm font-medium text-indigo-600">
          <span>Both private and open source.</span>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-4 shadow-md transition hover:bg-[#FBFBFB] hover:shadow-lg"
            >
              <div className="mb-4">
                <ProjectImage src={project.image} alt={project.title} />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-4">
                  <h2 className="mb-3 text-xl font-semibold leading-snug text-gray-800 md:text-[1.375rem]">
                    {project.title}
                  </h2>
                  <p className="text-justify text-sm text-text-secondary">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Tech Stack:
                    </span>
                    {project.stacks.map((stack) => {
                      const tool = [...TOOL_STACKS, ...Skills_Stack].find(
                        (tool) => tool.title === stack,
                      );
                      return tool ? (
                        <div key={stack} className="group relative">
                          <Image
                            src={tool.imgSrc}
                            alt={tool.title}
                            width={24}
                            height={24}
                            className="h-6 w-6 transition-transform duration-200 hover:scale-110"
                          />

                          <span className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {tool.title}
                          </span>
                        </div>
                      ) : null;
                    })}
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-indigo-600"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} className="mr-2" />
                        Github Repo
                      </a>
                    )}

                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
                        title="Live Demo"
                      >
                        <LinkIcon size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GridWrapper>

      <br />
      <br />
    </div>
  );
}
