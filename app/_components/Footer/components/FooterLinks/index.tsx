import { footerLinksSections } from "@/app/_data/footerLinks";
import FooterLinksColumn from "./components/FooterLinksColumn";

function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      {footerLinksSections.map((section, index) => (
        <FooterLinksColumn section={section} key={index} />
      ))}
    </div>
  );
}

export default FooterLinks;
