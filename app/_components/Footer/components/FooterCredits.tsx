function FooterCredits() {
  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(new Date());

  return (
    <div className="text-sm">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>ساخته‌شده با ❤️ توسط نعمان</span>
        <span> © برفا {persianYear} — تمامی حقوق محفوظ است.</span>
      </div>
      <div className="mt-2 text-center">
        تصاویر و محتوای محصولات از وب‌سایت{" "}
        <a
          href="https://www.digikala.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-danger-400 hover:text-danger transition-colors"
        >
          دیجی‌کالا
        </a>{" "}
        گرفته شده است.
      </div>
    </div>
  );
}

export default FooterCredits;
