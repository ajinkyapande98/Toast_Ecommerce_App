import React from "react";
import { Link } from "react-router-dom";

const ItemCards = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400?text=Electronics"
                alt="Electronics"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Electronics
                </h2>
                <p className="text-gray-600">
                  Discover our range of electronics, including smartphones,
                  laptops and more.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ItemCards;
