import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

interface BaseProps {
  title?: string;
  description?: string;
}

type ButtonProps =
  | { buttonText: string; href: string }
  | { buttonText?: never; href?: never };

type NotFoundPageProps = BaseProps & ButtonProps;

function NotFoundPage({
  title = "صفحه‌ی مورد نظر پیدا نشد!",
  description = "احتمالا لینک اشتباه وارد کردید یا صفحه حذف شده است.",
  buttonText,
  href,
}: NotFoundPageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="relative size-64 sm:size-68 md:size-72 lg:size-78 xl:size-86">
        <Image
          src="/not-found.png"
          alt="صفحه‌ی مورد نظر پیدا نشد!"
          fill
          sizes="(max-width: 640px) 256px,
         (max-width: 768px) 272px,
         (max-width: 1024px) 288px,
         (max-width: 1280px) 312px,
         344px"
          priority
        />
      </div>

      <h1 className="mt-6 text-2xl font-bold">{title}</h1>
      <p className="text-default-600 mt-2">{description}</p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {buttonText && href && (
          <Button
            as={Link}
            size="lg"
            href={href}
            color="primary"
            variant="flat"
          >
            {buttonText}
          </Button>
        )}
        <Button as={Link} size="lg" href="/" color="primary">
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
