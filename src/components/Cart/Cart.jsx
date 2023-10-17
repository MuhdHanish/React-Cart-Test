import Data from "../../Data/Data";
import "./Cart.css";

const Cart = () => {
  const Dumb = Data.slice(1, 3);
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <span className="w-[100px] h-[2px] bg-textColor"></span>
        <span className="text-xl font-bold ">Shopping Cart</span>
      </div>
      <div className="cart-body">
        <div className="cart-product">
          <div className="flex gap-5">
            <div>
              <img src={Dumb[0].imageUrl} width={100} height={100} alt="" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex flex-col gap-1 justify-center items-start ">
                <span className="text-[14px] font-medium">{Dumb[0].name}</span>
                <span className="text-[11px] text-gray-500">
                  {Dumb[0].description.slice(0, 15) + "..."}
                </span>
              </div>
              <div className="cart-buttons">
                <button className="cart-button">+</button>
                <span className="font-medium text-[13px]">4</span>
                <button className="cart-button">-</button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center px-3">
            <span className="font-medium">₹ {Dumb[0].discountAmount}</span>
            <button className="cart-button text-[12px]">x</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
