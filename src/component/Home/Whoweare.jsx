import React from "react";

const Whoweare = () => {
  return (
    <div>
      <div className="bg-white rounded-3xl p-4 py-24">
        {/* <div className="container">
          <div className="text-4xl font-semibold text-center ">Who we are</div>


          <div className="grid lg:grid-cols-2 gap-9 mt-12 items-center text-lg">
            <div>
              KKRF GROUP was established in 2023 with a commitment to provide top-notch
              and innovative IT solutions which can help businesses to achieve their goals. In
              initial years we were focused on web development and e-commerce solutions for
              small and mid-size companies.
              <br /> <br />
              With time we have evolved and expanded our services to multiple IT domains and
              for enterprises. In early 2023 we were onboarded by our first enterprise client.
            </div>

            <div className="rounded-tr-3xl shadow-lg rounded-bl-3xl overflow-hidden ">
              <img src="/logo/logo.png" className="w-full" alt="logo" />
            </div>
          </div>
        </div> */}

        <div className="text-2xl font-semibold text-center text-colorTwo">
          <span className="text-colorThree font-semibold"> TRUSTED BY </span>{" "}
          MANY BRANDS
        </div>

        <div className="grid grid-cols-3  items-center justify-items-center container mt-8 flex-wrap gap-4 gap-y-6">
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
      </div>
    </div>
  );
};

export default Whoweare;
