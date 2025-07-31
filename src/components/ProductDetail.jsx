import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RiHeartAdd2Line } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { cart, addToCart, removeFromCart, addToWishlist } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const currentProduct = products.find((item) => item.id === parseInt(id));
      setProduct(currentProduct);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="px-6 py-4 grid grid-cols-2">
      <div className="grid grid-cols-[1fr,5fr] border rounded-md max-h-[85vh]">
        <div className="grid grid-rows-5">
          <div>
            <img className="h-[100px]" src="/public/no-photo.png" />
          </div>
          <div>
            <img className="h-[100px]" src="/public/no-photo.png" />
          </div>
          <div>
            <img className="h-[100px]" src="/public/no-photo.png" />
          </div>
          <div>
            <img className="h-[100px]" src="/public/no-photo.png" />
          </div>
          <div>
            <img className="h-[100px]" src="/public/no-photo.png" />
          </div>
        </div>
        <div className="h-[85vh] flex justify-center items-center">
          <img className="h-[400px]" src={product.image} />
        </div>
      </div>
      <div className="p-2 py-4 flex flex-col gap-4">
        <p className="text-xl uppercase text-[#19B8F3]">{product.category}</p>
        <p className="text-xl">{product.title}</p>
        <p className="text-3xl font-medium">${product.price}</p>
        <p className="text-sm text-gray-500">Price inclusive of all taxes</p>
        <div className="flex items-center">
          <div className="flex items-center bg-green-500 text-white px-3 py-[2px] rounded-full">
            <p>Rating {product.rating.rate}</p>
            <FaRegStar className="" />
          </div>

          <p className="ml-2 text-gray-500">
            ({product.rating.count} ratings & 5 reviews)
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              addToWishlist(product);
            }}
            className="px-10 py-3 rounded-md text-xl border flex items-center gap-2 hover:border-black"
          >
            <RiHeartAdd2Line className="text-2xl" />
            Add to Wishlist
          </button>
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="px-10 py-3 rounded-md text-xl bg-yellow-400 flex items-center gap-2 text-white hover:bg-yellow-500"
          >
            <FiShoppingCart />
            Add to cart
          </button>
        </div>
        <div className="border-t flex flex-col gap-3 py-3">
          <div className="flex gap-2 items-center">
            <p className="text-xl">DELIVERY OPTIONS</p>
            <FiTruck />
          </div>
          <p>Use pincode to check delivery info</p>
          <div className="flex px-3 py-2 border rounded-md w-[250px]">
            <input
              className="outline-none"
              type="text"
              placeholder="Enter a PIN code"
            />
            <p className="text-gray-500">CHECK</p>
          </div>
          <div className="flex gap-2 items-center">
            <GiTakeMyMoney className="text-xl" />
            <p className="text-xl font-normal">Pay on delivery available</p>
          </div>
          <div className="flex gap-2 items-center">
            <RiExchangeBoxLine className="text-xl" />{" "}
            <p className="text-xl font-normal">
              Easy 14 days return & exchange available
            </p>
          </div>

          <p className="font-light">100% ORIGINAL PRODUCTS</p>
        </div>
        <div className="border-t py-3">
          <p className="uppercase">Product Description:</p>
          <p className="font-light">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
