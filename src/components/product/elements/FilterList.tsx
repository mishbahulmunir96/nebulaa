import Checkbox from "./Checkbox";

const FilterList = () => {
  return (
    <div className="sticky top-24 h-52">
      <h3>Filter</h3>
      <Checkbox id="semua" htmlFor="semua" text="semua" />
      <Checkbox id="buket" htmlFor="buket" text="buket" />
      <Checkbox id="box" htmlFor="box" text="box hantaran" />
      <Checkbox id="flowerbox" htmlFor="flowerbox" text="flower box" />
    </div>
  );
};

export default FilterList;
