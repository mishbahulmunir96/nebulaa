import { FC } from "react";
import Checkbox from "./Checkbox";

interface FilterListProps {
  className?: string;
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}
const FilterList: FC<FilterListProps> = ({
  className,
  checkedItems,
  onCheckboxChange,
}) => {
  return (
    <div
      className={`sticky top-20 z-50 mx-0 flex h-full flex-col rounded-md bg-slate-200/90 p-2 backdrop-blur-sm md:top-24 ${className}`}
    >
      <h3>Filter:</h3>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {["Semua", "Buket", "Box Hantaran", "Flowerbox"].map((id) => (
          <Checkbox
            key={id}
            id={id}
            htmlFor={id}
            text={id}
            checked={checkedItems[id]}
            onChange={() => onCheckboxChange(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
