import React, { useEffect } from "react";
import { useState } from "react";
import ThankyouPop from "../ThankyouPop/ThankyouPop";

const FormPopup = ({ pop, setPop }) => {

  const [thankyouPopup, setThanksPopup] = useState(false);

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

    console.log("Form data:", formData);

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
        setPop(false);
        setThanksPopup(true);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log fetch errors
      });
  };



  return (
    <>
      {/* {{{{{{{{{{{Contact us form pop up}}}}}}}}}}} */}
      <ThankyouPop setPop={setThanksPopup} pop={thankyouPopup} />
      <div
        className={`fixed top-0 bg-black/70 w-full h-screen left-0  flex justify-center items-center pointer-events-none z-50 opacity-0 transition-all duration-150  ${pop && ` opacity-100 pointer-events-auto`
          }`}
      >
        <div className={`w-[300px] lg:w-[30%]  transition-all duration-200 scale-90 translate-y-80 ${ pop && `!translate-y-0 !scale-100`}`}>
          <div>
            <div className="px-9 py-6 bg-colorTwo text-white rounded-t-xl text-lg font-semibold relative flex justify-between items-center">
              <div>Request a callback</div>

              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setPop(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </div>
            <form
              onSubmit={handleSubmit} // Handle form submission
              className="space-y-6 shadow-2xl w-full bg-white p-9 px-6 md:px-9 rounded-b-xl relative"
            >
              <div>
                <input
                  name="name"
                  placeholder="Name*"
                  type="text"
                  value={formData.name} // Connect input to state
                  onChange={handleChange} // Handle change
                />
              </div>
              <div>
                <input
                  name="mobile"
                  placeholder="Mobile No*"
                  type="number"
                  value={formData.mobile} // Connect input to state
                  onChange={handleChange} // Handle change
                />
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Email ID*"
                  type="text"
                  value={formData.email} // Connect input to state
                  onChange={handleChange} // Handle change
                />
              </div>
              <div>
                <input
                  name="company"
                  placeholder="Company*"
                  type="text"
                  value={formData.company} // Connect input to state
                  onChange={handleChange} // Handle change
                />
              </div>
              <div>
                <button
                  type="submit" // Submit button
                  className="bg-colorThree mt-4 w-full rounded-xl py-3 text-base text-white font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPopup;
