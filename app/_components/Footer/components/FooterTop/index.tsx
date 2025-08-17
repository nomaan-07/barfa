import Logo from "@/app/_components/Logo";
import BackToTopButton from "./components/BackToTopButton";

function FooterTop() {
  return (
    <div className="flex items-center justify-between">
      <Logo color="white" />
      <BackToTopButton />
    </div>
  );
}

export default FooterTop;
