import React, { useState } from "react";
import ThankyouPop from "../../component/ThankyouPop/ThankyouPop";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phno: "",
    email: "",
    query: "",
  });
  const [pop, setPop] = useState(false);

  // Handle form data changes
  const collectData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data
  };

  // Handle form submission
  const submitData = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Form validation checks
    if (!formData.name) {
      return alert("Please enter your name.");
    }
    if (!formData.email || !formData.email.includes("@")) {
      return alert("Please enter a valid email.");
    }
    if (!formData.phno) {
      return alert("Please enter your phone number.");
    }
    if (!formData.query) {
      return alert("Please enter your query.");
    }

    try {
      // Send form data to backend
      const response = await fetch("https://kkrfgroup.com/contactus.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Parse server response

      console.log(data);

      if (data.success) {
        setFormData({
          name: "",
          phno: "",
          email: "",
          query: "",
        }); // Reset form fields
        setPop(true);
      } else {
        alert(data.message || "Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <ThankyouPop pop={pop} setPop={setPop} />

      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-24 gap-9">
        <div>
          <h1 className="text-6xl font-semibold  text-colorTwo">
            <span className="text-colorThree font-semibold"> Contact</span> us
          </h1>
          <div className="mt-4 text-xl">
            "Reach out to us. Your message matters."
          </div>

          <div className="h-full rounded-lg overflow-hidden mt-9 md:max-w-[600px]">
            <form onSubmit={submitData} className="space-y-6">
              {" "}
              {/* Form submission */}
              {/* Name field */}
              <div>
                <label>Name</label>
                <input
                  type="text"
                  className="border border-gray-500 p-3"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={collectData} // Collect form data
                />
              </div>
              {/* Email field */}
              <div>
                <label>Email</label>
                <input
                  type="text"
                  className="border border-gray-500 p-3"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={collectData}
                />
              </div>
              {/* Phone field */}
              <div>
                <label>Phone</label>
                <input
                  type="number"
                  className="border border-gray-500 p-3"
                  name="phno"
                  placeholder="Your phone number"
                  value={formData.phno}
                  onChange={collectData}
                />
              </div>
              {/* Query field */}
              <div>
                <label>Query</label>
                <textarea
                  name="query"
                  placeholder="Your query"
                  value={formData.query}
                  onChange={collectData}
                  className="border w-full rounded-2xl border-gray-500 p-3"
                ></textarea>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="bg-colorThree px-8 py-3 text-white font-semibold text-xs rounded-full mt-9 inline-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="py-9">
          <div>
            <div className="text-3xl font-medium">How Can We Help?</div>
            <div className="mt-4">
              Please select a topic below related to your inquiry. If you
              don’t find what you need, fill out our contract form.
            </div>
          </div>

          <div className="mt-9 space-y-6">
            <div className="flex justify-between border-b border-gray-400 pb-4">
              <div>
                <div className="text-base font-semibold">Book a Demo</div>
                <div className="mt-4 text-gray-500">
                  Request a demo from one of our conversion specialists.
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>

            <div className="flex justify-between border-b border-gray-400 pb-4">
              <div>
                <div className="text-base font-semibold">Get Inspired</div>
                <div className="mt-4 text-gray-500">
                  Discover the many ways in which our customers does the
                  best.
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>

            <div className="flex justify-between border-b border-gray-400 pb-4">
              <div>
                <div className="text-base font-semibold">
                  Ask your queries
                </div>
                <div className="mt-4 text-gray-500">
                  Clear all your doubts with which we can do best for us.{" "}
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="mt-9">
            <div className="text-2xl font-medium">Contact Us at</div>
            <div className="flex gap-9 items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <div className="underline">info@kkrfgroup.com</div>
            </div>

            <div className="flex gap-9 items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div>+91 8595357170</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
