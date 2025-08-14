import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { CiCircleRemove } from "react-icons/ci";

export default function Cart() {
  const { products, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Your Cart ({totalCount})</h2>
      {products.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        products.map((p) => (
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
        ))
      )}
    </div>
  );
}
