import React, { useState, useEffect } from "react";
import UpArrow from "../assets/UpArrow.png";
import DownArrow from "../assets/DownArrow.png";
import Pluslogo from "../assets/plus.png";
import Veg from "../assets/Veg.png";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/Reducer/cartSlice";
import IncreDecre from "../components/IncreDecre";

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
const Special_Page = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [accordion, setAccordion] = useState(false);

  const dispatch = useDispatch();

  const toggleAccordion = () => {
    setAccordion(!accordion);
  };
  // Function to handle adding a Toast to the cart
  const handleAddToCart = (index) => {
    dispatch(addItemToCart(data[index]));
  };

  const cartData = useSelector((state) => {
    // console.log(state.cart.items);
    return state.cart.items;
  });

  useEffect(() => {
    // Update menuItems state whenever cartData changes
    const updatedMenuItems = data.map((item) => {
      // Check if item is in cart
      const inCart = cartData.find((cartItem) => cartItem.id === item.id);

      // If item is in cart, set isAdded to true
      if (inCart) {
        return { ...item, isAdded: true };
      }

      // If item is not in cart, set isAdded to false
      return { ...item, isAdded: false };
    });

    // Update menuItems state with the updated items array
    setMenuItems(updatedMenuItems);
  }, [cartData]);

  // console.log(cartData);

  return (
    <>
      <div
        style={{ fontFamily: "Graphik", backgroundColor: "#F5F5F5" }}
        className="p-4 my-2"
      >
        <img
          className=" h-36 lg:h-96 w-full border-4 border-white"
          style={{
            borderRadius: "15px",
            boxShadow: " 1px 8px 15px 10px #e4e1e1",
          }}
          src="https://images.pexels.com/photos/2983102/pexels-photo-2983102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="-mt-24 ml-5 text-white text-2xl w-52 font-bold">
          Welcome to Sacred Earth Cafe
        </h1>
      </div>
      <div
        style={{ fontFamily: "Graphik" }}
        className=" flex justify-between border-rose-950 mt-10 items-center px-4"
      >
        <h1 className=" text-lg font-medium text-gray-500">Today's Special</h1>
        <div className="border w-40"></div>
        <img
          className="h-4"
          onClick={toggleAccordion}
          src={`${accordion ? DownArrow : UpArrow}`}
          alt=""
        />
      </div>

      {accordion ? (
        ""
      ) : (
        <div
          style={{}}
          className=" flex flex-wrap justify-evenly mt-4 p-1 pb-16"
        >
          {menuItems.map((toast, index) => (
            <li
              key={index}
              className="  list-none w-40 lg:60 mb-2 "
              style={{
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                fontFamily: "Graphik",
                boxShadow:
                  "inset 1px 1px 5px 2px #e4dfdf , inset -2px -1px 13px 5px #ffffff",
              }}
            >
              <img
                className="lg:h-52 lg:w-52 w-40 h-36 rounded-t-lg"
                src={toast.img}
              />
              <div className="px-2 py-1">
                <div className=" flex flex-wrap gap-1">
                  <img className="h-5" src={Veg} alt="" />
                  <h3
                    style={{ fontFamily: "Graphik" }}
                    className=" font-bold text-md text-gray-500 "
                  >
                    {toast.name}
                    <p className="">
                      {toast.description !== "" ? toast.description : ``}
                    </p>
                  </h3>
                </div>
                <div className=" flex justify-between p-1 mb-2 items-center">
                  <p className=" font-bold text-gray-500">₹{toast.price}</p>

                  <button
                    onClick={() => handleAddToCart(index)}
                    className="px-3 py-1.5 flex"
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
            </li>
          ))}
          <button className=" fixed bottom-16 z-40 text-white bg-gray-600 p-3 rounded-full">
            Menu
          </button>
        </div>
      )}
    </>
  );
};

export default Special_Page;
