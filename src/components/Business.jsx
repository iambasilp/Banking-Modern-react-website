import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
const Business = () => {
  return (
   <section id="features" className={`app__features ${layout.section}`}>
      <div className={`app__features-info ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} max-w-[722px]`}>You do the business, <br className="sm:block hidden" />
         we’ll handle the money.</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
         <Button styles="mt-10" />
      </div>
      <div className={`app__feature-image ${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard feature={feature} index={index} />
        ))}
      </div>
   </section>
  );
};
export default Business;
