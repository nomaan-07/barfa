import BrandStory from "./components/BrandStory";
import Contact from "./components/Contact";
import FooterCredits from "./components/FooterCredits";
import FooterLinks from "./components/FooterLinks";
import FooterTop from "./components/FooterTop";

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
