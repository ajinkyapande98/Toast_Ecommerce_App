import React from "react";
import LefttArrow from "../assets/LeftArrow.png";
import { useNavigate } from "react-router-dom";
const BackButton = ({ pathCount }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (typeof pathCount == "number") {
      navigate(-pathCount);
    } else {
      navigate(pathCount);
    }
  };
  return (
    <div
      className=" h-10 p-2 rounded-xl "
      style={{
        boxShadow:
          "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
      }}
    >
      <img
        onClick={goBack}
        className="h-5 mt-1"
        src={LefttArrow}
        alt="prevpage"
      />
    </div>
  );
};

export default BackButton;
