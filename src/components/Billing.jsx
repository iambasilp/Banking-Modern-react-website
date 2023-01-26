import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <section className={`app__billing ${layout.sectionReverse}`} id="product">
   <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
      <div className={`app__billing-info ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="w-[128px] h-[42.05px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="google paly" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"  />
        </div>
      </div>
    </section>
  );
};

export default Billing;
