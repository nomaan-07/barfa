import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  color?: "primary" | "white";
}

function Logo({ color = "primary" }: LogoProps) {
  return (
    <Link
      href="/"
      className="relative inline-block h-10 w-26 select-none sm:w-30"
    >
      <Image
        priority
        src={color === "primary" ? "/logo/logo.png" : "/logo/logo-white.png"}
        fill
        sizes="120px"
        alt="لوگوی برفا"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}

export default Logo;
