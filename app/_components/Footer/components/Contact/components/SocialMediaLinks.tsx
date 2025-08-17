import clsx from "clsx";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
    hoverColor: "md:hover:text-[#C13584]",
  },
  {
    name: "Telegram",
    url: "https://telegram.org",
    icon: FaTelegram,
    hoverColor: "md:hover:text-white",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: FaGithub,
    hoverColor: "md:hover:text-[#181717]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: FaLinkedin,
    hoverColor: "md:hover:text-white",
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={clsx(
            "md:text-default-300 text-white transition-all",
            social.hoverColor,
          )}
        >
          <social.icon size={32} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
