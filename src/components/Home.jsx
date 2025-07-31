import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="px-6 min-h-[85vh]">
      <p className="py-4">Explore</p>
      <div className="grid gap-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
