import CardProductPage from "./CardProductPage";

interface Product {
  entryId: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating?: number;
}

const ListProductPage = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid w-full grid-cols-1 justify-between gap-4 md:w-5/6 md:grid-cols-3">
      {products.map((product: Product) => (
        <CardProductPage
          key={product.entryId}
          src={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ListProductPage;
