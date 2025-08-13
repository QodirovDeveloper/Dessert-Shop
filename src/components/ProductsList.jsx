import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
