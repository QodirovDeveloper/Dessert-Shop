import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/dessertss/desserts")
      .then(res => res.json())
      .then(data => {
        setProducts(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
