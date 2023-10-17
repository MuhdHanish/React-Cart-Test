import "./Products.css";
import ProductCard from "./ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { fetchData } from "../../axios/service";
import Confetti from "react-confetti";

const Products = () => {
  const [data, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchData()
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }, []);
  const setNewData = () => {
    fetchData(currentPage)
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }
  const [pop, setPop] = useState(false);
  return (
    <div className="pt-10 flex flex-col">
      {data.length ? (
        <div className="products">
          {pop && <Confetti />}
          {data?.slice(currentPage, currentPage + 4)?.map((data, index) => (
            <ProductCard key={index} data={data} pop={pop} setPop={setPop} />
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
      <div className="pagination">
        {currentPage !== 1 && (
          <div
            onClick={() => {
              setCurrentPage(currentPage - 1);
              setNewData();
            }}
            className="pagination-button"
          >
            Perv
          </div>
        )}
        <div className="pagination-button bg-white text-textColor border">
          {currentPage}
        </div>
        {currentPage !== 12 && (
          <div
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setNewData();
            }}
            className="pagination-button"
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
