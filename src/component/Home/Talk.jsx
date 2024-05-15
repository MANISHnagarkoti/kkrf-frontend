import React, { useState } from "react";

const Talk = () => {
  const [pop, setPop] = useState(false);
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
        setPop(false);
        setThanksPopup(true);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log fetch errors
      });
  };

  return (
    <div className="py-20 bg-colorTwo mt-24">
      <div className="text-center text-2xl md:text-4xl text-white">
        <div className="font-semibold">
          Let's Talk About Your{" "}
          <span className="text-colorThree font-semibold">Project</span>
        </div>

        <button
          onClick={() => setPop(true)}
          className="bg-colorThree mt-12 px-16 py-3 text-white font-semibold text-2xl rounded-lg"
        >
          Fill Here!
        </button>
      </div>

      {/* form pop up */}

      <div
        className={`fixed top-0 bg-black/70 w-full h-screen left-0 hidden justify-center items-center pointer-events-none opacity-0 transition-all duration-150 p-6 backdrop-blur-md z-50 ${
          pop && `!flex opacity-100 pointer-events-auto`
        }`}
      >
        <div className="w-full md:w-[70%] bg-white rounded-2xl p-6 md:p-12">
          <div className="flex justify-between">
            <div className="text-2xl md:text-5xl font-semibold text-black">
              Let's <span className="text-colorThree font-semibold">Talk</span>.
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer hover:text-gray-500"
              onClick={() => setPop(false)}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="w-full xl:w-[40%] space-y-6 dark-shadow p-6 md:p-9 rounded-md">
              <div>
                <div className="font-semibold">Hi I am *</div>
                <input type="text" className="mt-3" />
              </div>

              <div>
                <div className="font-semibold">Mail me at *</div>
                <input type="text" className="mt-3" />
              </div>

              <div>
                <div className="font-semibold">Message *</div>
                <input type="text" className="mt-3" />
              </div>

              <div>
                <div className="font-semibold">Query *</div>
                <textarea
                  name=""
                  className="w-full border-gray-400 border rounded-md mt-3  min-h-[100px]"
                  id=""
                ></textarea>
              </div>

              <div>
                <button
                  type="submit" // Submit button
                  className="bg-colorThree mt-12 w-full rounded-xl py-3 text-white font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="w-[60%] p-9 hidden xl:block">
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
      </div>
    </div>
  );
};

export default Talk;
