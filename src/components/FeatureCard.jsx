import React from "react";
import { features } from "../constants";
import styles from "../style";
const FeatureCard = ({ feature: { id, icon, title, content }, index }) => {
  return (
    <div
      className={`app__feature-image_card p-6 flex flex-row rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
      key={id}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="app__feature-icon" className="w-[50%] h-[50%]" />
      </div>
      <div className={`app__feature-image_card_content flex-1 flex-col ml-3`}>
        <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}>{title}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
