type ColorsArr = [string, { name: string; value: string }][];

interface ColorCirclesProps {
  colorsArr: ColorsArr;
}

function ColorCircles({ colorsArr }: ColorCirclesProps) {
  return (
    <div className="flex gap-1">
      {colorsArr.map(([key, color]) => (
        <div
          key={key}
          className="border-default-300 size-2.5 rounded-full border"
          style={{ backgroundColor: color.value }}
        ></div>
      ))}
    </div>
  );
}

export default ColorCircles;
