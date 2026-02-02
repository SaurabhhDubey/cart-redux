import { useState } from "react";

const Cart = () => {
  const [shoeQty, setShoeQty] = useState(1);
  const [tshirtQty, setTshirtQty] = useState(1);
  const [pantQty, setPantQty] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {/* Shoes */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
              👟
            </div>
            <div>
              <h2 className="font-semibold text-lg">Shoes</h2>
              <p className="text-gray-500">₹2,499</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => shoeQty > 1 && setShoeQty(shoeQty - 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              −
            </button>
            <span className="font-medium">{shoeQty}</span>
            <button
              onClick={() => setShoeQty(shoeQty + 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* T-Shirt */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
              👕
            </div>
            <div>
              <h2 className="font-semibold text-lg">T-Shirt</h2>
              <p className="text-gray-500">₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => tshirtQty > 1 && setTshirtQty(tshirtQty - 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              −
            </button>
            <span className="font-medium">{tshirtQty}</span>
            <button
              onClick={() => setTshirtQty(tshirtQty + 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Pant */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
              👖
            </div>
            <div>
              <h2 className="font-semibold text-lg">Pant</h2>
              <p className="text-gray-500">₹1,499</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => pantQty > 1 && setPantQty(pantQty - 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              −
            </button>
            <span className="font-medium">{pantQty}</span>
            <button
              onClick={() => setPantQty(pantQty + 1)}
              className="w-8 h-8 border rounded text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Total (static for now) */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total</h2>
          <h2 className="text-xl font-bold">₹4,997</h2>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;
