import { socialLinks } from "@/app/_data/socialLinks";
import clsx from "clsx";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={clsx(
            "md:text-default-300 text-white transition-all",
            link.hoverColor,
          )}
        >
          <span className="inline-block size-8">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
