import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <div className=" px-6 py-3 outer grid grid-cols-3 shadow-sm">
      <div className="flex gap-1 items-center">
        <div className="h-6 w-6 rounded-full bg-red-600"></div>
        <div className="flex items-center justify-center">
          <Link to={"/"} className="text-3xl font-extrabold text-gray-500">
            STOP&SHOP
          </Link>
        </div>

        <div className="h-6 w-6 rounded-full bg-green-500"></div>
      </div>
      <div className="p-2 px-4 min-w-[450px] border border-[#19B8F3] rounded-full">
        <input
          className="outline-none text-md"
          type="text"
          placeholder="Search for a product..."
        />
      </div>
      <div className="mr-10 flex gap-6 items-center justify-end">
        <Link
          className="flex justify-end items-center gap-2 text-xl cursor-pointer hover:scale-105"
          to={"/wishlist"}
        >
          <FaRegHeart className="text-xl" />
          Wishlist
        </Link>
        <div>
          <Link
            to={"/Cart"}
            className="relative flex justify-end items-center gap-2 text-xl cursor-pointer hover:scale-105"
          >
            <FiShoppingCart />
            <p>Cart</p>
          </Link>
          {cart.length > 0 ? (
            <div className="absolute top-[10px] right-[40px] bg-red-600 text-white font-bold rounded-full w-[25px] h-[25px] flex justify-center items-center">
              {cart.length}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
