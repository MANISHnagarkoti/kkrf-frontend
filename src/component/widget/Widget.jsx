import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Widget = () => {
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
    <div className={`fixed space-y-4 bottom-5 right-5 md:hidden opacity-100 transition-all duration-200 translate-y-0 z-40 ${checkScroll && "pointer-events-none !opacity-0 !translate-y-9"}`}>
      <div className=" space-y-4">
        <a href="tel:+918595357170">
          <div className=" rounded-full shadow-lg  p-4 bg-colorTwo text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </a>

        <Link to={"/contact-us"}>
          <div className=" rounded-full shadow-lg p-4 mt-3 bg-colorTwo text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Widget;
