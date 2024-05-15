import React, { useState } from "react";

const ThankyouPop = ({ pop, setPop }) => {
  return (
    <div>
      {/* {{{{{{{{{{{Contact us form pop up}}}}}}}}}}} */}
      <div
        className={`fixed top-0 z-50 bg-black/70 w-full h-screen left-0  flex justify-center items-center pointer-events-none opacity-0 transition-all duration-150 ${
          pop && ` opacity-100 pointer-events-auto`
        }`}
      >
        <div
          className={`scale-50 w-[300px] translate-y-[200px] text-center md:w-[350px] bg-colorTwo p-9 rounded-lg transition-all duration-300 pointer-events-none   ${
            pop && ` !scale-100 pointer-events-auto !translate-y-0`
          } `}
        >
          <img className="w-20 m-auto" src="thankyoupop/correct.png" alt="" />
          <div className="text-white text-4xl mt-4 font-semibold animate-bounce">
            Thank you
          </div>
          <div className="text-gray-300 mt-4">
            <div>Your message has been received</div>
            <div>we will update you shortly</div>
          </div>
          <div
            onClick={() => setPop(false)}
            className="bg-colorThree inline-block p-4 py-2 mt-5 text-white rounded-lg cursor-pointer font-semibold"
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPop;
