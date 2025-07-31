import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart, addToWishlist } = useCart();
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-xl hover:border-[#19B8F3] overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className=" p-2 flex justify-center items-center">
        <img className="h-[230px]" src={product.image} />
      </div>
      <div className="bg-slate-100 p-2">
        <h2 className="truncate w-30 font-medium">{product.title}</h2>
        <p className="text-2xl font-medium">${product.price}</p>
        <div className="flex gap-1 items-center">
          <p>{product.rating.rate}</p>
          <FaRegStar className="" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToWishlist(product);
            }}
            className="flex items-center border p-2 gap-2 rounded-xl hover:border-red-500 transition-transform duration-300 hover:scale-105"
          >
            <FaRegHeart />
            <p>Wishlist</p>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
            className="flex items-center border p-2 gap-2 rounded-xl hover:border-green-500 transition-transform duration-300 hover:scale-105"
          >
            <LuShoppingCart />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
