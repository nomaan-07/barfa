import SocialMediaLinks from "./components/SocialMediaLinks";

function Contact() {
  return (
    <div>
      <p className="mb-3 font-semibold">ارتباط با ما</p>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex gap-2">
            <p>تلفن:</p>
            <a
              href="tel:09914418254"
              className="md:text-default-200 text-white transition-colors md:hover:text-white"
            >
              09914418254
            </a>
          </div>
          <div className="flex gap-2">
            <p>ایمیل:</p>
            <a
              href="mailto:09914418254"
              className="md:text-default-200 text-white transition-colors md:hover:text-white"
            >
              nomaan07.dev@gmail.com
            </a>
          </div>
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default Contact;
