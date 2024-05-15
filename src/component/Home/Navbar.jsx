import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [serviceMenu, setServicesMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    return setMenu(false);
  }, [pathname]);

  return (
    <div className="bg-white ">
      {/* {{{{{{{{{{{{desktop menu start}}}}}}}}}}}} */}
      <div className="container flex justify-between items-center py-3">
        <Link to={"/"}>
          <img src="logo/logo.png" className="w-28" alt="logo" />
        </Link>

        <ul className=" gap-5 text-colorTwo h-[50px] items-center hidden lg:flex ">
          <Link to={"/"}>
            {" "}
            <li className=" cursor-pointer ">Home</li>{" "}
          </Link>

          <Link to={"/about-us"}>
            {" "}
            <li>About</li>{" "}
          </Link>

          <li className="flex gap-2 items-center relative group h-full">
            <div className=" cursor-pointer group-hover:text-colorThree">
              {" "}
              Services{" "}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-3 h-3  transition-all duration-200  group-hover:rotate-180`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

            <ul className=" absolute group-hover:opacity-100 font-medium  transition-all duration-200  opacity-0 group-hover:pointer-events-auto pointer-events-none bg-gray-100 w-[250px] bottom-0 z-50 translate-y-full rounded-lg p-3 shadow-2xl space-y-5 text-sm">
              <Link to={"/web-designing"}>
                {" "}
                <li className="cursor-pointer">Website Designing</li>
              </Link>
              <Link to={"/web-development"}>
                {" "}
                <li className="cursor-pointer mt-4">Website Development</li>
              </Link>
              <Link to={"/ecommerce-development"}>
                {" "}
                <li className="cursor-pointer mt-4">E-Commerce</li>
              </Link>
              <Link to={"/mobile-development"}>
                {" "}
                <li className="cursor-pointer mt-4">Mobile Development</li>
              </Link>
            </ul>
          </li>

          <Link to={"/career"}>
            {" "}
            <li>Career</li>{" "}
          </Link>
        </ul>

        <Link
          to={"/contact-us"}
          className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  hidden lg:block"
        >
          Contact us
        </Link>

        <div onClick={() => setMenu(true)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
      {/* {{{{{{{{{{{{desktop menu end}}}}}}}}}}}} */}

      {/* {{{{{{{{{{{{phone menu start}}}}}}}}}}}} */}
      <div
        className={`fixed top-0 left-0 bg-colorTwo shadow-xl text-gray-100 h-screen z-50 w-[300px] py-8 px-3 text-lg  opacity-0  transition-all duration-150 lg:hidden pointer-events-none translate-x-[-100px] ${
          menu && `h-auto opacity-100 !translate-x-0 !pointer-events-auto`
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-white">Menu</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenu(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className=" gap-5 h-[50px] items-center space-y-3 mt-6">
          <Link to={"/"}>
            {" "}
            <li className=" cursor-pointer ">Home</li>{" "}
          </Link>

          <Link to={"/about-us"} className="mt-3">
            {" "}
            <li className="mt-3">About</li>{" "}
          </Link>

          <li className="">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setServicesMenu(!serviceMenu)}
            >
              <div className=" cursor-pointer "> Services </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 cursor-pointer ${
                  serviceMenu && `rotate-180`
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <ul
              className={`ms-3 space-y-2 h-0 overflow-hidden transition-all duration-150 text-sm text-gray-400 ${
                serviceMenu && `h-auto mt-2`
              }`}
            >
              <Link to={"/web-designing"}>
                {" "}
                <li className="cursor-pointer">Website Designing</li>
              </Link>
              <Link to={"/web-development"}>
                {" "}
                <li className="cursor-pointer mt-4">Website Development</li>
              </Link>
              <Link to={"/ecommerce-development"}>
                {" "}
                <li className="cursor-pointer mt-4">E-Commerce</li>
              </Link>
              <Link to={"/mobile-development"}>
                {" "}
                <li className="cursor-pointer mt-4">Mobile Development</li>
              </Link>
            </ul>
          </li>

          <Link to={"/career"}>
            {" "}
            <li className="mt-3">Career</li>{" "}
          </Link>
        </ul>
      </div>
      {/* {{{{{{{{{{{{phone menu end}}}}}}}}}}}} */}
    </div>
  );
};

export default Navbar;
