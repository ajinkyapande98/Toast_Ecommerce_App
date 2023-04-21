import React, { useState } from "react";
import Event from "../assets/Thunder.png";
import Menu from "../assets/Menu.png";
import Bag from "../assets/Bag.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const Quantity = useSelector((state) => {
    // console.log(state.cart.items.length);
    return state.cart.items.length;
  });
  const MenuItems = [
    {
      name: "Event",
      path: "/event",
      icon: Event,
    },
    {
      name: "Menu",
      path: "/",
      icon: Menu,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: Bag,
      quantity: Quantity,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className=" flex justify-center">
      <div
        className="flex justify-between fixed lg:w-9/12 w-full z-50 -bottom-1 bg-white py-3 px-5 "
        style={{ backgroundColor: "#f1f1f1" }}
      >
        {MenuItems.map((item, ind) => {
          return (
            <div key={ind}>
              <Link to={item.path}>
                <p className=" absolute right-2 top-0 text-white font-medium bg-red-500 rounded-full text-lg px-2">
                  {item.quantity <= 0 ? "" : item.quantity}
                </p>
                <img
                  onClick={() => setActiveTab(ind)}
                  className="h-9 p-2"
                  style={{
                    borderRadius: "10px",
                    boxShadow: `${
                      activeTab === ind
                        ? "inset 1px 1px 3px 1px #e4dfdf"
                        : "2px 1px 10px 2px #e4dfdf"
                    } `,
                  }}
                  src={item.icon}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
