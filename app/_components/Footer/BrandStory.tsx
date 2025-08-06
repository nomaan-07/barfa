import {
  LucideCheckCircle,
  LucideCpu,
  LucideHeadphones,
  LucideTruck,
} from "lucide-react";

const iconStyles = "size-10";

const sellingPoints = [
  {
    icon: <LucideTruck strokeWidth={1.5} className={iconStyles} />,
    headline: "ارسال سریع",
    description:
      "تکنولوژی مورد نیاز خود را با گزینه‌های ارسال سریع دریافت کنید.",
  },
  {
    icon: <LucideHeadphones strokeWidth={1.5} className={iconStyles} />,
    headline: "پشتیبانی تخصصی",
    description: "تیم کارشناسان ما به صورت ۲۴ ساعته آماده کمک به شما هستند.",
  },
  {
    icon: <LucideCheckCircle strokeWidth={1.5} className={iconStyles} />,
    headline: "کیفیت تضمینی",
    description:
      "ما بالاترین استانداردهای کیفیت را برای تمام محصولات خود تضمین می‌کنیم.",
  },
  {
    icon: <LucideCpu strokeWidth={1.5} className={iconStyles} />,
    headline: "تکنولوژی پیشرفته",
    description:
      "ما جدیدترین و پیشرفته‌ترین محصولات تکنولوژی را ارائه می‌دهیم.",
  },
];

function BrandStory() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {sellingPoints.map((point, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span>{point.icon}</span>
          <p className="text-default-200 text-sm">{point.headline}</p>
        </div>
      ))}
    </div>
  );
}

export default BrandStory;
