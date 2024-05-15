import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-16">
      <div className="grid  lg:grid-cols-2 gap-9 h-full">
        <div className="lg:flex justify-center items-center p-6 bg-gradient-to-r from-black/10 from-10%  rounded-lg ">
          <div className="w-full ">
            <h1 className="text-colorTwo font-bold text-4xl md:text-6xl">
             <span className="text-colorThree font-semibold"> About </span> us
            </h1>
            <div className="mt-4 text-xl">
              "Where creativity meets technology."
            </div>

            <div className="mt-9 md:text-lg">
              <span className="font-semibold"> KKRF GROUP </span> was
              established in 2017 with a commitment to provide top-notch and
              innovative IT solutions which can help businesses to achieve their
              goals. In initial years we were focused on web development and
              e-commerce solutions for small and mid-size companies. With time
              we have evolved and expanded our services to multiple IT domains
              and for enterprises. In early 2023 we were onboarded by our first
              enterprise client.
            </div>
          </div>
        </div>

        <div className="h-full rounded-lg overflow-hidden">
          <img
            src="aboutus/companyPic.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
