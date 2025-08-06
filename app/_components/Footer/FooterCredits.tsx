function FooterCredits() {
  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(new Date());

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
      <span> © برفا {persianYear} — تمامی حقوق محفوظ است.</span>
      <span>ساخته‌شده با ❤️ توسط نعمان</span>
    </div>
  );
}

export default FooterCredits;
