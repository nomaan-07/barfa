import Logo from "@/app/_components/Logo";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { LucideEye } from "lucide-react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

function LoginPage() {
  return (
    <>
      <div className="flex justify-center">
        <Logo />
      </div>
      <Card shadow="sm">
        <CardHeader>
          <h2 className="w-full text-center text-xl font-black">
            ورود با ایمیل
          </h2>
        </CardHeader>
        <CardBody className="text-right">
          <Form>
            <Input
              label="ایمیل:"
              labelPlacement="outside-top"
              style={{ direction: "ltr" }}
              type="email"
              placeholder="example@email.com"
            />
            <div className="mb-2 w-full">
              <Input
                label="رمز عبور:"
                labelPlacement="outside-top"
                style={{ direction: "ltr" }}
                type="password"
                placeholder="••••••••"
                startContent={<LucideEye className="size-5 cursor-pointer" />}
              />
              <Link
                href="/forgot-password"
                className="text-primary mt-2 block text-xs"
              >
                فراموشی رمز عبور
              </Link>
            </div>
            <Button color="primary" fullWidth type="submit">
              ورود
            </Button>
          </Form>
        </CardBody>
        <CardFooter className="flex-col gap-2">
          <div className="text-xs">
            حساب کاربری ندارید؟‌{" "}
            <Link href="/signup" className="text-primary">
              ثبت نام کنید
            </Link>
            .
          </div>
          <div className="flex w-full items-center gap-1">
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
        </CardFooter>
      </Card>
      <div className="text-center text-sm">
        با عضویت در سایت، همه‌ی{" "}
        <Link href="terms" className="text-primary">
          قوانین و شرایط
        </Link>{" "}
        برفا را پذیرفته‌اید.
      </div>
    </>
  );
}

export default LoginPage;
