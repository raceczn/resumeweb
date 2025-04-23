import Link from "next/link";
import {
  FaEnvelope as Mail,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
  FaFacebook as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";
import {
  FiMessageSquare as MessageSquare,
  FiClock as Clock,
  FiCode as Code,
} from "react-icons/fi";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { GridWrapper } from "@/app/components/GridWrapper";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";


function ContactContent() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/raceczn/",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/rances.cuizon.3/",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-rose-900 via-red-800 to-rose-800 p-6 text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-medium">Email</h3>
              </div>
              <p className="text-white/80">Feel free to reach out via email</p>
            </div>
            <Link
              href="mailto:rancescuizon@gmail.com"
              className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 font-medium backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <span>Email Me</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#161b22] via-[#0d1117] to-[#161b22] p-6 text-white shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-[#21262d] p-2 backdrop-blur-sm">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-medium">GitHub</h3>
              </div>
              <p className="text-white/80">Explore my coding projects</p>
            </div>
            <Link
              href="https://github.com/raceczn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 font-medium backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <span>View Code</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-xl bg-white/10 p-3 shadow-md backdrop-blur-sm">
            <MessageSquare className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Connect with my Socials
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <div className="rounded-md bg-white/5 p-2 transition-colors group-hover:bg-white/10">
                {social.icon}
              </div>
              <span className="text-sm font-medium tracking-wide">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();
  return (
    <div className="relative mt-14">
      <title>Contact | Rances Cuizon</title>
      <meta
        name="description"
        content="Contact Rances Cuizon, a passionate web developer. Let's connect!"
      />
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper>
          <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Let&apos;s Connect! {timeOfDayGreeting}
          </h1>
          <div className="mt-4 text-center text-sm font-medium text-indigo-600">
            <span>
              Interested in working together? Let&apos;s make it happen!
            </span>
          </div>
        </GridWrapper>

        {/* Content */}
        <div className="flex w-full justify-center">
          <GridWrapper className="w-full max-w-screen-xl">
            <div className="w-full px-0 md:px-40">
              <ContactContent />
            </div>
          </GridWrapper>
        </div>
      </div>
      <br />
      <br />
            <ScrollToTopButton />
      
    </div>
  );
}
