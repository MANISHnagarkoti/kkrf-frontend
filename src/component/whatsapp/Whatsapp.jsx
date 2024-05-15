import React, { useEffect, useState } from "react";

const Whatsapp = () => {
  const [checkScroll, setCheckScroll] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setCheckScroll(false);
      } else {
        setCheckScroll(true);
      }
    });
  }, []);


  return (
    <div
      className={`fixed space-y-4 bottom-5 left-5 w-[100px] flex flex-col items-center opacity-100 transition-all duration-200 translate-y-0 ${
        checkScroll && " pointer-events-none !opacity-0 !translate-y-9"
      }`}
    >
      <div className="absolute animate-bounce w-full rounded-lg p-2 text-center top-[-30px] bg-colorTwo text-white">
        Let's Chat
        <div className="up-arrow rotate-180 left-0"></div>
      </div>
      <a
        href="https://wa.me/918595357170"
        target="_blank"
        rel="noopenner noreferrer"
      >
        <div className=" rounded-full shadow-lg  p-4 bg-green-400 text-4xl text-white">
          <div className="mb-[-6px] text-2xl md:text-4xl">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
