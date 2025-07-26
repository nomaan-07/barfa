import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="relative h-10 w-26 select-none sm:w-30">
      <Image
        priority
        src="/logo.png"
        fill
        sizes="120px"
        alt="لوگوی برفا"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}

export default Logo;
