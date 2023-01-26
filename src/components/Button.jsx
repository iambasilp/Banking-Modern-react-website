import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={` py-4 px-6 font-poppins font-medium text-[18px] leading-[27px] rounded-[10px] bg-blue-gradient text-primary ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
