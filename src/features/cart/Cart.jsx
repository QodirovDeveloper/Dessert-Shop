import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { CiCircleRemove } from "react-icons/ci";

export default function Cart() {
  const { products, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = products
    .reduce((sum, p) => sum + p.price * p.amount, 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-[#C73B0F] font-semibold">
        Your Cart ({totalCount})
      </h2>
      {products.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            className="lg:w-80 max-lg:w-32"
            src="./public/images/illustration-empty-cart.svg"
            alt="empty-card"
          />
          <p className="text-gray-500 mt-4">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          {products.map((p) => (
            <div
              key={p.id}
              className="p-4 border rounded-lg shadow-md flex items-center justify-between mt-4"
            >
              <div>
                <p className="font-semibold">{p.name}</p>
                <p>x {p.amount}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(p.id))}
                className="text-red-300 text-3xl rounded hover:text-red-600"
              >
                <CiCircleRemove />
              </button>
            </div>
          ))}

          <div className="mt-6 p-4 border-t font-semibold flex items-center justify-between">
            <span>Order Total:</span>
            <span className="font-bold text-3xl">${totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
}
