import { useDispatch, useSelector } from "react-redux";
import {
  incrementShoes,
  decrementShoes,
  incrementTshirt,
  decrementTshirt,
  incrementPant,
  decrementPant,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { shoes, tshirt, pant } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {/* Shoes */}
        <div className="flex justify-between mb-4">
          <h2>Shoes</h2>
          <div className="flex gap-3">
            <button onClick={() => dispatch(decrementShoes())}>−</button>
            <span>{shoes}</span>
            <button onClick={() => dispatch(incrementShoes())}>+</button>
          </div>
        </div>

        {/* T-Shirt */}
        <div className="flex justify-between mb-4">
          <h2>T-Shirt</h2>
          <div className="flex gap-3">
            <button onClick={() => dispatch(decrementTshirt())}>−</button>
            <span>{tshirt}</span>
            <button onClick={() => dispatch(incrementTshirt())}>+</button>
          </div>
        </div>

        {/* Pant */}
        <div className="flex justify-between">
          <h2>Pant</h2>
          <div className="flex gap-3">
            <button onClick={() => dispatch(decrementPant())}>−</button>
            <span>{pant}</span>
            <button onClick={() => dispatch(incrementPant())}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
