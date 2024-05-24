import React, { useEffect, useState } from "react";
// import axios from "axios";
import ThankyouPop from "../ThankyouPop/ThankyouPop";
import { motion } from "framer-motion";

const Herosection = () => {
  const [close, setClose] = useState(false);
  const [pop, setPop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data to backend
  const handleSubmit = (e) => {
    e.preventDefault(); // Ensure the default form behavior is prevented

    // Form validation checks
    if (!formData.name) {
      return alert("Please enter your name.");
    }
    if (!formData.email || !formData.email.includes("@")) {
      return alert("Please enter a valid email.");
    }
    if (!formData.mobile) {
      return alert("Please enter your phone number.");
    }
    if (!formData.company) {
      return alert("Please enter your company name.");
    }

    console.log("Form data:", formData); // Debug log to check if this executes

    fetch("https://kkrfgroup.com/submit.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure correct Content-Type
      },
      body: JSON.stringify(formData), // Convert formData to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Error handling
        }

        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data); // Check server response
        setFormData({
          name: "",
          mobile: "",
          email: "",
          company: "",
        });
        setPop(true);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log fetch errors
      });
  };

  // scroll down by 650px function
  const scrollDown = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-[400px] lg:h-[500px] relative ">
      <ThankyouPop pop={pop} setPop={setPop} />
      <div className="absolute w-full h-full right-0 left-0">
        <div className="container grid lg:flex items-center h-full gap-9">
          <motion.div
            transition={{ duration: 3, type: "spring", stiffness: 150 }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ x: -100, opacity: 0 }}

            className="text-4xl md:text-4xl lg:text-6xl font-bold lg:w-[70%]">
            <div className="  leading-snug font-bold">
              <span className="text-4xl lg:text-7xl leading-3 font-semibold text-black bg-colorThree/50">
                Trusted
              </span>{" "}
              by largest
              <div className="font-bold">brands for Website </div>
              Designing
            </div>
            <div className="text-2xl mt-6">We Implement Your Digital Dreams</div>
            <button
              onClick={scrollDown}
              className="bg-colorTwo mt-4 px-12 py-3 text-white font-semibold text-lg rounded-lg "
            >
              See More
            </button>
          </motion.div>

          <div className="lg:block lg:w-[30%] hidden me-24">
            <div className={`${close ? "hidden" : ""}`}>
              <div className="py-6 px-9 bg-colorThree text-white rounded-t-lg text-lg font-semibold relative flex justify-between items-center">
                <div> Request a callback</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setClose(true)}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <form
                onSubmit={handleSubmit} // Handle form submission
                className="space-y-6 shadow-2xl w-full bg-white p-9 rounded-b-lg relative"
              >
                <div>
                  <input
                    name="name"
                    placeholder="Name*"
                    type="text"
                    value={formData.name} // Connect input to state
                    onChange={handleChange} // Handle change
                    className="rounded-full"
                  />
                </div>
                <div>
                  <input
                    name="mobile"
                    placeholder="Mobile No*"
                    type="number"
                    value={formData.mobile} // Connect input to state
                    onChange={handleChange} // Handle change
                    className="rounded-full"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    placeholder="Email ID*"
                    type="text"
                    value={formData.email} // Connect input to state
                    onChange={handleChange} // Handle change
                    className="rounded-full"
                  />
                </div>
                <div>
                  <input
                    name="company"
                    placeholder="Company*"
                    type="text"
                    value={formData.company} // Connect input to state
                    onChange={handleChange} // Handle change
                    className="rounded-full"
                  />
                </div>
                <div>
                  <button
                    type="submit" // Submit button
                    className="bg-colorTwo mt-4 w-full rounded-full py-3 text-base text-white font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-full h-full object-contain object-right hidden lg:block"
        src="Landing/herobg.png"
        alt="background img"
      />
    </div>
  );
};

export default Herosection;
