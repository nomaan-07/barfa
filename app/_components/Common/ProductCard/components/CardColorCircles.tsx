import { Colors } from "@/app/_utils/types";

interface CardColorCirclesProps {
  colors: Colors;
}

function CardColorCircles({ colors }: CardColorCirclesProps) {
  return (
    <div className="flex gap-1">
      {colors.map((color) => (
        <div
          key={color.en}
          className="border-default-300 size-2.5 rounded-full border"
          style={{ backgroundColor: color.value }}
        ></div>
      ))}
    </div>
  );
}

export default CardColorCircles;
