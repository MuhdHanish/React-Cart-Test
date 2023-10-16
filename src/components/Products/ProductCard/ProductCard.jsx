import PropTypes from "prop-types";
import StarRating from "./StarRating/StarRatring";
import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({ data }) => {
  return (
      <div className="px-4 min-h-[350px] 
      relative group border border-gray-200 rounded-xl
     hover:-translate-y-1 hover:shadow-xl transition duration-500
      max-w-[400px] cursor-pointer flex flex-col gap-3">
      <div>
        <img
          className="w-[237px] h-[221.0px]"
          src={data.imageUrl}
          width={200}
          height={300}
          alt={data.name}
        />
        <div className="absolute top-2 right-2 border shadow-xl bg-white hover:bg-textColor text-textColor hover:text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <FiShoppingBag style={{ fontSize: "22px" }} />
        </div>
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-textColor font-medium">{data.name}</h2>
        <p className="text-gray-500 max-w-[170px]">{data.description}</p>
        <StarRating rating={data.rating} />
        <div className="font-bold flex gap-4">
          <div>₹ {data.price}</div>
          <del className="text-grayh-500 font-normal">₹{parseInt(data.price)+50}.00</del>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired
}
export default ProductCard;
