import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../Redux/cartSlice/cartSlice"; // adjust path
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  //always subscribe small portion of store
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">Your cart is empty 🛒</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <button
        onClick={() => {
          handleClear();
        }}
      >
        Clear cart
      </button>
      <div className="space-y-4">
        {items.map((itm) => (
          <div
            key={itm.id}
            className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            {itm.imageId && (
              <img
                src={CDN_URL + itm.imageId}
                alt={itm.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{itm.name}</h2>
              {itm.category && (
                <p className="text-sm text-gray-500">{itm.category}</p>
              )}
              {itm.description && (
                <p className="text-sm text-gray-600 mt-1">{itm.description}</p>
              )}
              {itm.price && (
                <p className="text-green-700 font-semibold mt-1">
                  ₹{itm.price / 100}
                </p>
              )}
            </div>

            <button
              onClick={() => handleAdd(itm)}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              Add
            </button>

            <button
              onClick={() => handleRemove(itm.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
