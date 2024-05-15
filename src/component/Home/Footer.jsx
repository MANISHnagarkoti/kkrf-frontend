import React from "react";

const Footer = () => {
  return (
    <div className="  bg-gradient-to-b from-gray-400/60 from-40%  to-gray-400/10 to-100%  mt-24 py-5 ">
      <div className="rounded-2xl container">
        <img
          src="logo/logo.png"
          className="w-28 mix-blend-multiply	"
          alt="logo"
        />

        <div className="grid md:flex justify-between mt-9 gap-6">
          <div className="space-y-4 text-colorTwo font-medium text-lg">
            <div>#1 website designing company in Delhi NCR</div>
            <div>
              <div className=" underline">info@kkrfgroup.com</div>
            </div>

            <div>
              <div>Call us</div>
              <div className="flex gap-4 items-center mt-4">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <div>+91 85 9535 7170</div>

              </div>
            </div>
            {/* <div className="flex items-center gap-2 mt-9">

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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div className="text-gray-600 underline">Info</div>
            </div> */}
          </div>

          <div>
            <div>Follow us on</div>
            <div className="flex gap-4 text-2xl mt-2">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61559481387781&mibextid=ZbWKwL"
              >
                <ion-icon
                  name="logo-facebook"
                  className="cursor-pointer"
                ></ion-icon>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/groupkkrf?igsh=MWt4OTN4ajM3aHNudA=="
              >
                <ion-icon
                  name="logo-instagram"
                  className="cursor-pointer"
                ></ion-icon>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/kkrf-group/"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="cursor-pointer"
                ></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="border-t border-colorTwo/20 mt-24 py-4 text-gray-400 text-xs font-normal">
            Copyright 2017 2024 KKRF Group. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
