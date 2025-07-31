import React from "react";
import { useCart } from "../context/CartContext";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useCart();
  return (
    <div className="min-h-[85vh] px-6 py-4">
      <p className="text-2xl">Wishlist</p>
      {console.log(wishlist)}
      <div>
        {wishlist.length === 0 ? (
          <>
            <div className="flex justify-center">
              <img src="/public/emptyCart.webp" />
            </div>

            <p className="text-center text-xl">No items in the wishlist</p>
            <div className="flex justify-center mt-2">
              {" "}
              <Link
                to={"/"}
                className="p-2 px-5 text-white rounded-md bg-[#19B8F3]"
              >
                Shop now
              </Link>
            </div>
          </>
        ) : (
          wishlist.map((item) => (
            <div
              className=" p-2 grid gap-10 grid-cols-[1fr,6fr] border rounded-lg"
              key={item.id}
            >
              <div>
                <img className="h-[150px]" src={item.image} />
              </div>
              <div className="flex flex-col h-full justify-center">
                {" "}
                <p className="text-xl">{item.title}</p>
                <p className="text-3xl">${item.price}</p>
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-[2px] bg-gray-400 text-white px-4 py-2 text-md rounded-lg"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <MdOutlineCancel />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;

{
  /* <div
className=" p-2 grid gap-10 grid-cols-[1fr,6fr] border rounded-lg"
key={item.id}
>
<div>
  <img className="h-[150px]" src={item.image} />
</div>
<div className="flex flex-col h-full justify-center">
  {" "}
  <p className="text-xl">{item.title}</p>
  <p className="text-3xl">${item.price}</p>
  <div className="flex gap-2">
    <button
      className="flex items-center gap-[2px] bg-gray-400 text-white px-4 py-2 text-md rounded-lg"
      onClick={() => removeFromWishlist(item.id)}
    >
      <MdOutlineCancel />
      Remove
    </button>
  </div>
</div>
</div>; */
}
