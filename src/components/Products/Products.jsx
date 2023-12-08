import "./Products.css";
import ProductCard from "./ProductCard/ProductCard";
import { useState } from "react";
import Confetti from "react-confetti";
import { data } from "../../data/data";

const Products = () => {
  const datas = data;
  const [pop, setPop] = useState(false);
  return (
    <div className="pt-10 flex flex-col">
      {data.length ? (
        <div className="products">
          {pop && <Confetti />}
          {datas?.map((data, index) => (
            <ProductCard key={index} data={data} pop={pop} setPop={setPop} />
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Products;
