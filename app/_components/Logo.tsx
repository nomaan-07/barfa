import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="w-30 h-10 relative">
      <Image
        priority
        src="/logo.png"
        fill
        alt="لوگوی برفا"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}

export default Logo;
