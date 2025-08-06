import BrandStory from "./BrandStory";
import Contact from "./Contact";
import FooterCredits from "./FooterCredits";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <footer className="border-t-default-200 bg-primary border-t py-8 text-white">
      <div className="divide-primary-300 mx-auto max-w-7xl space-y-8 divide-y px-6 *:not-last:pb-8">
        <FooterTop />
        <BrandStory />
        <FooterLinks />
        <Contact />
        <FooterCredits />
      </div>
    </footer>
  );
}

export default Footer;
