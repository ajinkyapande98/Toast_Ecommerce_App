import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCart, incrementCart } from "../store/Reducer/cartSlice";
import PlusLogo from "../assets/plus.png";
import MinusLogo from "../assets/minus.png";

const IncreDecre = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          boxShadow:
            "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
        }}
        className=" p-2 h-8 rounded-lg m-2 flex items-center pr-3"
      >
        <img
          onClick={() => dispatch(decrementCart(item.id))}
          style={{
            boxShadow:
              "inset -5px -5px 9px rgba(255,255,255,0.45), inset 1px 1px 5px rgba(94,104,121,0.3)",
          }}
          className=" h-5 rounded-xl p-1"
          src={MinusLogo}
          alt=""
        />
        <h1 className="px-4 py-2 font-medium">{item.quantity}</h1>
        <img
          onClick={() => dispatch(incrementCart(item.id))}
          style={{
            boxShadow:
              "inset -5px -5px 9px rgba(255,255,255,0.45), inset 1px 1px 5px rgba(94,104,121,0.3)",
          }}
          className=" h-5 rounded-xl p-1"
          src={PlusLogo}
          alt=""
        />
      </div>
    </>
  );
};

export default IncreDecre;
