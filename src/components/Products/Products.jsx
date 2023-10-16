import Data from "../../Data/Data";
import "./Products.css"
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="pt-10">
      <div className="products">
        {Data.slice(1,5)?.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
