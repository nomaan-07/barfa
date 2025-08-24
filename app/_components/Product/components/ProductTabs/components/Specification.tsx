interface SpecificationProps {
  label: string;
  value: string | string[];
}

function Specification({ label, value }: SpecificationProps) {
  return (
    <div className="border-default-100 flex gap-4 rounded-xl border p-2 text-xs/relaxed sm:p-3 sm:text-sm/relaxed">
      <span className="text-default-500 w-1/3 shrink-0">{label}</span>
      <div className="space-y-2 font-medium">
        {Array.isArray(value) ? (
          value.map((v) => <div key={v}>{v}</div>)
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}

export default Specification;
