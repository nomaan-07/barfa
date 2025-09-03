import { Button } from "@heroui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-small w-full rounded-xl p-3">
      {children}
      <div className="my-2 flex w-full items-center gap-1">
        <div className="bg-default-200 h-px w-full rounded-full"></div>
        <span className="text-default-500 shrink-0 text-sm">یا</span>
        <div className="bg-default-200 h-px w-full rounded-full"></div>
      </div>
      <Button
        variant="ghost"
        endContent={<FaGoogle className="size-4" />}
        size="sm"
        fullWidth
        as={Link}
        href="/"
        className="border-1"
      >
        ادامه دادن با گوگل
      </Button>
    </div>
  );
}

export default AuthCard;
