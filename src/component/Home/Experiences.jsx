import React from "react";

const Experiences = () => {
  return (
    <div className="mt-9 bg-colorThree/5 py-8 ">
      <div className="container grid lg:flex justify-between items-center">
        <div className="text-3xl md:text-5xl">
          <div className="font-semibold">Let's</div>
          <div className="font-semibold">Create</div>
          <div className="font-semibold">
            <span className="text-colorThree font-semibold"> Experience </span>{" "}
            with us !
          </div>
        </div>

        <div className="">
          {/* <div className="w-[200px] border-dotted border-t-2 border-black"></div> */}
          <img src="experiences/message.jpeg"  className="hidden md:block  md:w-[500px] mix-blend-darken" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
