import React, { useEffect, useState } from "react";
import UserLogo from "../assets/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "special", label: "Special", address: "/" },
    { id: "main", label: "Main", address: "/main" },
    { id: "dessert", label: "Dessert", address: "/dessert" },
    { id: "beverages", label: "Beverages", address: "/beverages" },
  ];

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className=" lg:w-full   lg:flex lg:justify-center ">
      <header
        style={{ backgroundColor: "#f1f1f1" }}
        className=" shadow-md rounded-b-xl lg:w-9/12"
      >
        <div className="flex justify-between p-4">
          <div className="flex gap-3">
            <img
              className="h-8 rounded-full"
              src={
                "https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg"
              }
              alt=""
            />
            <h1 className=" font-medium text-xl">Sacread Earth Cafe</h1>
          </div>

          <div className="flex gap-3">
            <img
              src={UserLogo}
              style={{ boxShadow: "2px 2px 5px 3px #e4dfdf" }}
              className="w-7 h-7 rounded-lg"
            ></img>
            <button
              style={{ boxShadow: "2px 2px 5px 3px #e4dfdf" }}
              className="w-7 h-7 rounded-lg font-bold "
            >
              #
            </button>
          </div>
        </div>
        <div
          style={{ fontFamily: "Graphik" }}
          className=" flex justify-around flex-wrap mx-2"
        >
          {tabs.map((item, index) => {
            return (
              <Link
                onClick={() => handleClick(index)}
                to={item.address}
                key={index}
                className={`${
                  activeTab === index
                    ? " border-b-2   border-green-400  py-3  text-green-500 font-medium "
                    : " py-3  text-gray-400 font-medium mr-2"
                }  `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
