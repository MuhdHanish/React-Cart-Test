import PropTypes from "prop-types";
import "./ProductCard.css"
import StarRating from "./StarRating/StarRatring";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice/cartSlice";

const ProductCard = ({ data }) => {
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
          }}
        >
          <FiShoppingBag style={{ fontSize: "22px" }} />
        </div>
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-textColor font-medium">{data.name}</h2>
        <p className="text-gray-500 max-w-[170px]">{data.description}</p>
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
    data: PropTypes.object.isRequired
}
export default ProductCard;
