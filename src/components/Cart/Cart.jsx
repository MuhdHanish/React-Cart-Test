import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart} from "../../redux/cartSlice/cartSlice";
import "./Cart.css";

const Cart = () => {
  const { products } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <span className="w-[100px] h-[2px] bg-textColor"></span>
        <span className="text-xl font-bold ">Shopping Cart</span>
      </div>
      <div className="cart-body">
        {products?.map((product) => (
          <div className="cart-product" key={product?._id}>
            <div className="flex gap-5">
              <div>
                <img src={product?.imageUrl} width={100} height={100} alt="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <div className="flex flex-col gap-1 justify-center items-start ">
                  <span className="text-[14px] font-medium">
                    {product?.name}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {product?.description.slice(0, 15) + "..."}
                  </span>
                </div>
                <div className="cart-buttons">
                  <button
                  onClick={() => { dispatch(increaseQty({ productId: product._id })) }}
                  className="cart-button">+</button>
                  <span className="font-medium text-[13px]">
                    {product?.quantity}
                  </span>
                  <button
                  onClick={() => { dispatch(decreaseQty({ productId: product._id })) }}
                  className="cart-button">-</button>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center px-3">
              <span className="font-medium">
                ₹ {product?.discountAmount * product?.quantity}
              </span>
              <button
              onClick={() => { dispatch(removeFromCart({ productId: product._id })) }}
              className="cart-button text-[12px]">x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
