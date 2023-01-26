import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`w-[140px] h-[140px] bg-blue-gradient rounded-full ${styles.flexCenter} cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className={`font-poppins font-medium text-[18px] leading-[23px] mr-2`}>
            <span className="text-gradient">Get</span>
          </p>
            <img
              src={arrowUp}
              alt="arrowup"
              className="w-[32px] h-[32px] object-contain"
            />
        </div>
        <p className={`font-poppins font-medium text-[18px] leading-[23px]`}>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
