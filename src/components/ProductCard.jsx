import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="list-none">
      <div className="max-w-xs mx-auto">
        <div
          className="relative border rounded-md tooltip flex flex-col items-center"
          data-tip={`${item.name} $${item.price}`}
        >
          <img
            className="rounded-xl w-full"
            src={item.image.desktop}
            alt={item.name}
          />
          <button
            className="absolute left-6 right-6 xl:-bottom-6 bottom-[-20px] cursor-pointer py-2 text-sm sm:text-base px-4 sm:px-7 text-black bg-white border border-[#AD8A85] rounded-full"
            onClick={() => dispatch(addToCart(item))}
          >
            <i className="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
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
