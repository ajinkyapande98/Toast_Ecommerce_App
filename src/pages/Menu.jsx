import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/Reducer/cartSlice";
import VegLogo from "../assets/Veg.png";
import Pluslogo from "../assets/plus.png";
import UpArrow from "../assets/UpArrow.png";
import DownArrow from "../assets/DownArrow.png";
const data = [
  {
    id: 1,
    name: "Mushroom ",
    img: "https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "(Vegan)",
    price: 450,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },

  {
    id: 2,
    name: "Tofu Scramble",
    img: "https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "(Vegan)",
    price: 310,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },
  {
    id: 3,
    name: "Mediterranean",
    img: "https://nomadparadise.com/wp-content/uploads/2020/05/mediterranean-food-011.jpg",
    description: "(Vegan)",
    price: 340,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },
  {
    id: 4,
    name: "Grilled Tomato",
    img: "https://images.pexels.com/photos/8308899/pexels-photo-8308899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "(Vegan)",
    price: 290,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },
  {
    id: 5,
    name: "Almond Butter",
    img: "https://images.pexels.com/photos/4397272/pexels-photo-4397272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "(Vegan)",
    price: 260,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },
  {
    id: 6,
    name: " Tomato Toast",
    img: "https://images.pexels.com/photos/3768001/pexels-photo-3768001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "(Vegan)",
    price: 190,
    Veg: true,
    isAdded: false,
    quantity: 1,
  },
];
const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const dispatch = useDispatch();

  const toggleAccordion = () => {
    setAccordion1(!accordion1);
  };
  // Function to handle adding a Toast to the cart
  const handleAddToCart = (index) => {
    dispatch(addItemToCart(data[index]));
  };
  return (
    <div className=" pb-14">
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div
          style={{ fontFamily: "Graphik" }}
          className=" flex justify-between border-rose-950 pt-5 items-center px-3"
        >
          <h1
            style={{ fontSize: "16px" }}
            className=" text-lg font-medium text-gray-500"
          >
            Acai bowls
          </h1>
          <div className="border w-40"></div>
          <img
            className="h-4"
            onClick={toggleAccordion}
            src={`${accordion1 ? DownArrow : UpArrow}`}
            alt=""
          />
        </div>
        {accordion1 ? (
          ""
        ) : (
          <div className=" p-2">
            {menuItems.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className=" flex justify-between w-full rounded-xl  my-3 pr-5 p-1"
                  style={{
                    boxShadow: "inset 2px 3px 15px 5px white ",
                    boxShadow: "inset -3px -2px 14px 5px white ",
                    // boxShadow: "inset 2px -2px 4px 0px #DCDCDC33 ",
                    boxShadow: "inset -2px 2px 4px 0px #e4e1e1 ",
                  }}
                >
                  <img className="h-16 w-20 rounded-lg" src={item.img} alt="" />
                  <div className="mr-10">
                    <h1>{item.name}</h1>
                    <div className=" flex gap-2">
                      <img className=" h-4 mt-1" src={VegLogo} alt="" />
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handleAddToCart(ind)}
                      className="px-3 py-1.5 flex w-20 relative top-6"
                      style={{
                        borderRadius: "10px",
                        boxShadow:
                          " 1px 1px 5px 1px rgb(223, 223, 223) ,  -2px -1px 13px 5px #ffffff",
                      }}
                    >
                      <img
                        src={Pluslogo}
                        style={{
                          borderRadius: "40px",
                          boxShadow:
                            "inset 2px 2px 0px 0px rgb(223, 223, 223) ,  -2px -1px 0px 1px #ffffff",
                        }}
                        alt=""
                        className="h-5 mr-1 p-1"
                      />
                      <p className=" text-center text-sm font-medium">ADD</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div
          style={{ fontFamily: "Graphik" }}
          className=" flex justify-between border-rose-950 pt-5 items-center px-3"
        >
          <h1
            style={{ fontSize: "16px" }}
            className=" text-lg font-medium text-gray-500"
          >
            Acai bowls
          </h1>
          <div className="border w-40"></div>
          <img
            className="h-4"
            onClick={() => setAccordion2(!accordion2)}
            src={`${accordion2 ? DownArrow : UpArrow}`}
            alt=""
          />
        </div>
        {accordion2 ? (
          ""
        ) : (
          <div className=" p-2">
            {menuItems.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className=" flex justify-between w-full rounded-xl  my-3 pr-5 p-1"
                  style={{
                    boxShadow: "inset 2px 3px 15px 5px white ",
                    boxShadow: "inset -3px -2px 14px 5px white ",
                    // boxShadow: "inset 2px -2px 4px 0px #DCDCDC33 ",
                    boxShadow: "inset -2px 2px 4px 0px #e4e1e1 ",
                  }}
                >
                  <img className="h-16 w-20 rounded-lg" src={item.img} alt="" />
                  <div className="mr-10">
                    <h1>{item.name}</h1>
                    <div className=" flex gap-2">
                      <img className=" h-4 mt-1" src={VegLogo} alt="" />
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handleAddToCart(ind)}
                      className="px-3 py-1.5 flex w-20 relative top-6"
                      style={{
                        borderRadius: "10px",
                        boxShadow:
                          " 1px 1px 5px 1px rgb(223, 223, 223) ,  -2px -1px 13px 5px #ffffff",
                      }}
                    >
                      <img
                        src={Pluslogo}
                        style={{
                          borderRadius: "40px",
                          boxShadow:
                            "inset 2px 2px 0px 0px rgb(223, 223, 223) ,  -2px -1px 0px 1px #ffffff",
                        }}
                        alt=""
                        className="h-5 mr-1 p-1"
                      />
                      <p className=" text-center text-sm font-medium">ADD</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
