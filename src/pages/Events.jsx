import React from "react";
import EventAvatar from "../assets/EventAvatar.jpg";
const Events = () => {
  return (
    <div className=" flex justify-center flex-col pt-10">
      <h1 className=" text-center" style={{ fontFamily: "Graphik" }}>
        Oh oh! No events for now.
      </h1>
      <div>
        <img src={EventAvatar} alt="" />
      </div>
    </div>
  );
};

export default Events;
