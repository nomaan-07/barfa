import Link from "next/link";

type NavItem = {
  title: string;
  href: string;
};

type LinkSection = {
  title: string;
  items: NavItem[];
};

interface FooterLinksColumnProps {
  section: LinkSection;
}

function FooterLinksColumn({ section }: FooterLinksColumnProps) {
  return (
    <div>
      <p className="mb-4 text-lg font-bold">{section.title}</p>
      <div className="space-y-4">
        {section.items.map((item, index) => (
          <Link
            className="text-default-200 block transition-colors md:hover:text-white"
            href={item.href}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterLinksColumn;
