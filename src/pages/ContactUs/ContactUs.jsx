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
    <div className="container h-screen">
      <ThankyouPop pop={pop} setPop={setPop} />
      <div className="h-full mt-16">
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
    </div>
  );
};

export default ContactUs;
