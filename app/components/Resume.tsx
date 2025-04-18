import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Cavite State University",
      period: "2022 - Present",
      positions: [
        {
          title: "Bachelor of Science in Computer Science",
          description: [
            "Attended seminars and workshops on emerging technologies to stay up to date with the field.",
            "Lead and Project Manager for multiple group projects, implementing real-world solutions, and enhancing programming skills.",
          ],
        },
      ],
    },
    {
      company: "Udemy",
      period: "Jan 2025 - April 2025",
      positions: [
        {
          title: "Web Development Bootcamp",
          description: [
            "Built real web apps with HTML5, CSS3, Bootstrap, TailwindCSS, and JavaScript",
            "Created responsive and accessible layouts, deployed apps, and worked with databases.",
            "Learned about web development best practices, including performance optimization and security.",
            "Created a full-stack app using Node, Express, and MongoDB.",
            "Tested APIs with Postman and managed dependencies using the command line.",
          ],
        },
      ],
    },
   
  ],
  avatarUrl: "/images/rancesp.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
