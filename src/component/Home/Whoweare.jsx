import React from "react";
import Marquee from "react-fast-marquee";

const Whoweare = () => {
  return (
    <div>
      <div className="bg-white rounded-3xl p-4 py-24">
        <div className="text-3xl font-semibold text-center text-colorTwo">
          <span className="text-colorThree font-semibold"> TRUSTED BY </span>{" "}
          MANY BRANDS
        </div>

        <Marquee gradient={true} loop={0} gradientWidth={80} autoFill={true}>
          <div className="flex gap-12 md:gap-20 mt-24 ms-12 md:ms-20">
            <img
              src="brands/brand1.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand2.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand3.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand4.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand5.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand6.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand7.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand8.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />

            <img
              src="brands/brand9.png"
              className="w-16 sm:w-24 object-contain"
              alt="img"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Whoweare;
