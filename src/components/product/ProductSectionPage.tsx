import FilterList from "./elements/FilterList";
import ListProductPage from "./elements/ListProductPage";

const ProductSectionPage = () => {
  return (
    <div className="px-4">
      <div className="flex w-full justify-between">
        <FilterList />
        <ListProductPage />
      </div>
    </div>
  );
};

export default ProductSectionPage;
