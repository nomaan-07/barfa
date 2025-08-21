import Product from "@/app/_components/Product";
import { getProduct } from "@/app/_lib/data-services";

const raw = {
  id: "1",
  created_at: "2025-08-07 20:13:00.295477+00",
  price: "16999000",
  discount_percent: "4",
  title_fa:
    "گوشی موبایل شیائومی مدل Redmi Note 13 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
  main_features:
    '{"اندازه":"6.67","نسخه سیستم عامل":"Android 13","فناوری صفحه‌ نمایش":"AMOLED","رزولوشن دوربین اصلی":"108 مگاپیکسل"}',
  specifications:
    '{"صدا":{"اسپیکر":"استریو","خروجی صدا":"جک ۳.۵ میلی‌متری","توضیحات تکمیلی":"۲۴-bit/۱۹۲kHz Hi-Res & Hi-Res wireless audio"},"حافظه":{"مقدار RAM":"۸ گیگابایت","حافظه داخلی":"۲۵۶ گیگابایت","پشتیبانی از کارت حافظه":"microSD"},"دوربین":{"فلش":"LED,","سیستم عامل":"اندروید","دسته ‌بندی":"‌میان‌رده","نوع سیم کارت":"سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)","تعداد سیم کارت":"دو عدد"},"سایر مشخصات":{"حس‌گرها":["قطب‌نما (Compass)","شتاب‌سنج (Accelerometer)","مجاورت (Proximity)","ژیروسکوپ (Gyro)","اثرانگشت زیر صفحه نمایش"],"توان شارژ":"۳۳ وات","اقلام همراه":["دفترچه‌ راهنما","شارژر","قاب ژله‌ای","کابل USB Type-C"],"ظرفیت باتری":"۵۰۰۰ میلی آمپر ساعت","قابلیت‌های شارژ":"شارژ با سیم"}}',
  category: '{"en":"mobile","fa":"موبایل"}',
  colors:
    '[{"en":"black","fa":"مشکی","value":"#212224"},{"en":"blue","fa":"آبی","value":"#6387a8"},{"en":"gold","fa":"طلایی","value":"#f8e4c4"}]',
  image_sources:
    '{"main":"https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/xiaomi/redmi-note-13/redmi-note-13.jpg","colors":{"black":"https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/xiaomi/redmi-note-13/redmi-note-13-black.png","blue":"https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/xiaomi/redmi-note-13/redmi-note-13-blue.png","gold":"https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/xiaomi/redmi-note-13/redmi-note-13-gold.png"}}',
  introduction:
    "سری Redmi گوشی‌های هوشمند میان‌رده شیائومی تا به امروز توانسته‌اند با بهره بردن از مشخصات فنی قدرتمند و البته قیمتیر را داشته باشد، شیائومی Redmi Note 13 می‌تواند یکی از گزینه‌های بسیار مناسب برای شما باشد.",
  title_en: "Xiaomi Redmi Note 13 4G Dual SIM 256GB And 8GB RAM Mobile Phone",
  brand: '{"en":"xiaomi","fa":"شیائومی"}',
  warranty: "گارانتی ۱۸ ماهه مشرق زمین زاگرس",
  quantity: "15",
  discounted_price: "16999000",
};

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  return <Product raw={raw} product2={product} />;
}

export default ProductPage;
