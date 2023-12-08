import PropTypes from "prop-types";
import "./ProductCard.css"
import StarRating from "./StarRating/StarRatring";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice/cartSlice";
import { useEffect } from "react";

const ProductCard = ({ data, pop,setPop }) => {
  useEffect(() => {
    setTimeout(() => {
      setPop(false);
    },5000)
  },[pop,setPop])
  const dispatch = useDispatch();
  return (
    <div className="product-card group">
      <div>
        <img
          className="w-[237px] h-[221.0px]"
          src={data.imageUrl}
          width={200}
          height={300}
          alt={data.name}
        />
        <div
          className="add-to-cart"
          onClick={() => {
            dispatch(addToCart({ product: data }));
            setPop(true);
          }}
        >
          <FiShoppingBag style={{ fontSize: "22px" }} />
        </div>
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-textColor font-medium truncate">
          {data.name.length > 21 ? data.name.slice(0, 19) + ".." : data.name}
        </h2>
        <p className="text-gray-500 max-w-[160px] truncate">
          {data.description.length > 25
            ? data.description.slice(0, 20) + ".."
            : data.description}
        </p>
        <StarRating rating={data.rating} />
        <div className="font-bold flex gap-4">
          <div>₹ {data.price}</div>
          <del className="text-grayh-500 font-normal">
            ₹{parseInt(data.price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    pop: PropTypes.bool.isRequired,
    setPop: PropTypes.func.isRequired
}
export default ProductCard;
