import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decrementCart,
  incrementCart,
} from "../store/Reducer/cartSlice";
import { formatCurrency, calculateTotal } from "../utils/calculateTotal";
import UpArrow from "../assets/UpArrow.png";
import DownArrow from "../assets/DownArrow.png";
import RightArrow from "../assets/RightArrow.png";
import BackButton from "../components/BackButton";
import VegLogo from "../assets/Veg.png";
import IncreDecre from "../components/IncreDecre";
import { addItemToPreviousOrder } from "../store/Reducer/PreviousOrder";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/Avatar.png";
function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });
  const PreviousOrder = useSelector((state) => {
    // console.log(state.PreviousOrder.items);
    return state.PreviousOrder.items;
  });
  const dispatch = useDispatch();
  const total = calculateTotal(cartItems);
  const [CurrentAccordion, setCurrentAccordion] = useState(false);
  const [PreviousAccordion, setPreviousAccordion] = useState(false);

  const handlePreviousOrder = () => {
    dispatch(addItemToPreviousOrder(cartItems));
    dispatch(clearCart(cartItems));
    navigate("/");
  };
  const handleStartOrdering = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto">
      <header
        className=" flex items-center gap-4 py-4 px-2 rounded-b-xl shadow-md"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <BackButton pathCount={1} />
        <h1 className="text-xl text-gray-600 font-bold mb-1">Place Order</h1>
      </header>
      {PreviousOrder.length <= 0 && cartItems.length <= 0 ? (
        <div
          style={{ fontFamily: "Graphik" }}
          className=" flex justify-center mt-6"
        >
          <div className="">
            <div>
              <h1 className=" p-3 ml-8">No order yet!</h1>
              <p className=" py-3">Add something from the menu</p>
            </div>
            <button
              onClick={handleStartOrdering}
              className=" ml-7 p-3 bg-sky-400 text-white font-medium rounded-lg"
            >
              START ORDERING
            </button>
            <div className=" flex justify-center">
              <img className=" absolute  bottom-1" src={Avatar} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{ fontFamily: "Graphik" }}
            className=" flex justify-between border-rose-950 mt-10 items-center px-4"
          >
            <div className=" relative">
              <h1 className=" text-lg font-medium text-gray-500">
                Current Orders
              </h1>
              <p className=" absolute -right-5 -top-4 text-white font-medium bg-red-500 rounded-full text-lg px-2">
                {cartItems.length}
              </p>
            </div>
            <div className="border w-40"></div>
            <img
              className="h-4"
              onClick={() => setCurrentAccordion(!CurrentAccordion)}
              src={`${CurrentAccordion ? DownArrow : UpArrow}`}
              alt=""
            />
          </div>
          {CurrentAccordion ? (
            ""
          ) : (
            <div
              style={{
                borderRadius: "10px",
                boxShadow:
                  "inset -3px -2px 6px #e4e1e1, inset 1px 1px 5px rgba(94,104,121,0.3)",
                fontFamily: "Graphik",
              }}
              className={`${cartItems.length > 0 ? "p-2 m-2" : ""}`}
            >
              {cartItems.map((item) => (
                <div key={item.id} className="  flex justify-between">
                  <div className=" flex ">
                    <div className=" flex items-center -mr-2">
                      <img className=" h-5 rounded-lg" src={VegLogo} alt="" />
                    </div>
                    <div>
                      <h1 className=" px-4 text-gray-600 ">{item.name}</h1>
                      <h1 className=" px-4 text-gray-600">₹{item.price}</h1>
                    </div>
                  </div>
                  <div>
                    <IncreDecre item={item} />
                  </div>
                </div>
              ))}
              {cartItems.length > 0 ? (
                <p
                  style={{
                    color: "#76DFE5",
                    fontFamily: "Graphik",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                  className=" m-2"
                >
                  Add cooking instruction
                </p>
              ) : (
                ""
              )}
            </div>
          )}

          <div
            style={{ fontFamily: "Graphik" }}
            className=" flex justify-between border-rose-950 mt-10 items-center px-4"
          >
            <div className=" relative">
              <p className=" absolute -right-5 -top-4 text-white font-medium bg-red-500 rounded-full text-lg px-2">
                {PreviousOrder.length}
              </p>
              <h1 className=" text-lg font-medium text-gray-500">
                Previous Orders
              </h1>
            </div>
            <div className="border w-40"></div>
            <img
              className="h-4"
              onClick={() => setPreviousAccordion(!PreviousAccordion)}
              src={`${PreviousAccordion ? DownArrow : UpArrow}`}
              alt=""
            />
          </div>
          {PreviousAccordion ? (
            ""
          ) : (
            <div
              style={{
                borderRadius: "10px",
                boxShadow:
                  "inset -3px -2px 6px #e4e1e1, inset 1px 1px 5px rgba(94,104,121,0.3)",
                fontFamily: "Graphik",
              }}
              className={`${PreviousOrder.length > 0 ? "p-2 m-2" : ""}`}
            >
              {PreviousOrder.map((item) => (
                <div key={item.id} className="  flex justify-between">
                  <div className=" flex ">
                    <div className=" flex items-center -mr-2">
                      <img className=" h-5 rounded-lg" src={VegLogo} alt="" />
                    </div>
                    <div>
                      <h1 className=" px-4 text-gray-600 ">{item.name}</h1>
                      <h1 className=" px-4 text-gray-600">₹{item.price}</h1>
                    </div>
                  </div>
                  <div className="mr-5">
                    <h1>{item.quantity}</h1>
                  </div>
                </div>
              ))}
              {PreviousOrder.length > 0 ? (
                <p
                  style={{
                    color: "#76DFE5",
                    fontFamily: "Graphik",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                  className=" m-2"
                >
                  Add cooking instruction
                </p>
              ) : (
                ""
              )}
            </div>
          )}
          <button
            onClick={() => handlePreviousOrder()}
            style={{
              background: "rgb(69,158,175)",
              background:
                "linear-gradient(90deg, rgba(69,158,175,1) 0%, rgba(0,121,145,1) 100%)",
            }}
            className=" left-0 fixed bottom-4 text-white px-4 py-2  flex w-full justify-between rounded-xl"
          >
            <p>{cartItems.length} items</p>
            <div className="flex gap-2">
              <p className=" font-bold">Place Order</p>
              <img
                style={{
                  borderRadius: "40px",

                  boxShadow:
                    "inset -5px -5px 9px #7fa7ad, inset 5px 5px 9px #1c6977",
                }}
                className="h-6 p-1"
                src={RightArrow}
                alt=""
              />
            </div>
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
