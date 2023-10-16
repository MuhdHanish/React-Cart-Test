import Data from "../../Data/Data";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {Data.slice(1,5)?.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
