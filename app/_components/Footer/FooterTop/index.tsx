import Logo from "../../Logo";
import BackToTopButton from "./BackToTopButton";

function FooterTop() {
  return (
    <div className="flex items-center justify-between">
      <Logo color="white" />
      <BackToTopButton />
    </div>
  );
}

export default FooterTop;
