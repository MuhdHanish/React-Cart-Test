import Data from "../../Data/Data";

const Cart = () => {
  const Dumb = Data.slice(1, 3);
  return (
    <div className="flex flex-col w-full justify-start items-start gap-10 ">
      <div className="flex justify-center items-center gap-5 ">
        <span className="w-[100px] h-[2px] bg-textColor"></span>
        <span className="text-xl font-bold ">Shopping Cart</span>
      </div>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-4">
        <div className="w-full sm:w-2/3  flex justify-between items-center border p-2 rounded-md">
          <div className="flex ">
            <div>
              <img src={Dumb[0].imageUrl} width={100} height={100} alt="" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex flex-col gap-1 justify-center items-start ">
                <span className="text-[14px] font-medium">{Dumb[0].name}</span>
                <span className="text-[11px] text-gray-500">
                  {Dumb[0].description.slice(0, 21) + "..."}
                </span>
              </div>
              <div className="flex w-full h-fit justify-start items-center text-[14px] gap-3">
                <button className="p-1 rounded-full border w-6 h-6 flex justify-center items-center outline-none bg-gray-100">
                  +
                </button>
                <span className="font-medium text-[13px]">4</span>
                <button className="p-1 rounded-full border w-6 h-6 flex justify-center items-center outline-none bg-gray-100">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center px-5">
            <span className="font-medium">₹ {Dumb[0].discountAmount}</span>
            <button className="p-1 rounded-full border w-6 h-6 flex justify-center items-center outline-none bg-gray-100 text-[12px]">
              x
            </button>
          </div>
              </div>
      </div>
    </div>
  );
};

export default Cart;
