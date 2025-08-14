import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.products.find((i) => i.id === item.id)
  );

  return (
    <li className="list-none">
      <div className="max-w-xs mx-auto">
        <div
          className="relative border rounded-md tooltip flex flex-col items-center"
          data-tip={`${item.name} $${item.price}`}
        >
          <img
            className="rounded-md w-full"
            src={item.image.desktop}
            alt={item.name}
          />

          {!cartItem ? (
            <button
              className="absolute flex items-center justify-center gap-1 left-10   right-10 xl:-bottom-6 bottom-[-20px] px-1 cursor-pointer py-2 text-sm sm:text-base text-black bg-white border border-[#AD8A85] rounded-full"
              onClick={() => dispatch(addToCart(item))}
            >
              <span className="text-red-500">
                <FiShoppingCart />
              </span>
              Add to Cart
            </button>
          ) : (
            <div className="absolute flex items-center justify-around gap-3 left-10 right-10 xl:-bottom-6 bottom-[-20px] py-2 bg-[#C73B0F]   rounded-full">
              <button
                className="text-white"
                onClick={() => dispatch(decreaseQty(item.id))}
              >
                <AiOutlineMinusCircle size={18} />
              </button>
              <span className="text-white">{cartItem.amount}</span>
              <button
                className="text-white"
                onClick={() => dispatch(increaseQty(item.id))}
              >
                <AiOutlinePlusCircle size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="pt-8 max-w-xs mx-auto text-center sm:text-left px-2">
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-xl font-medium break-words">{item.name}</p>
        <p className="text-lg font-medium text-[#AD8A85]">${item.price}</p>
      </div>
    </li>
  );
}
