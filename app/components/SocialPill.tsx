import { siteMetadata } from "app/data/siteMetadata";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export function SocialPill() {
  return (
    <div className="z-30 flex place-items-center space-x-1 rounded-full bg-dark-primary px-3 py-2">
      <a
        href={siteMetadata.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="h-5 w-5 text-gray-400 hover:text-gray-300" />
        <span className="sr-only">Twitter</span>
      </a>
      
      <a
        href={siteMetadata.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-5 w-5 text-gray-400 hover:text-gray-300" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  );
}
