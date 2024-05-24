import React, { useEffect, useState } from "react";
import FormPopup from "../FormPopup/FormPopup";
import ThankyouPop from "../ThankyouPop/ThankyouPop";

const Talk = () => {

    const [pop, setPop] = useState(false)

    const [thankyouPopup, setThanksPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phno: "",
        email: "",
        query: "",
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
        if (!formData.phno) {
            return alert("Please enter your phone number.");
        }
        if (!formData.query) {
            return alert("Please enter your query.");
        }

        console.log("Form data:", formData);

        fetch("https://kkrfgroup.com/contactus.php", {
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
                    phno: "",
                    email: "",
                    query: "",
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
                    Let's Connect
                </button>
            </div>






            <ThankyouPop setPop={setThanksPopup} pop={thankyouPopup} />
            <div
                className={`fixed top-0 bg-black/70 w-full h-screen left-0  flex justify-center items-center pointer-events-none z-50 opacity-0 transition-all duration-150  ${pop && ` opacity-100 pointer-events-auto`
                    }`}
            >
                <div className={`w-[300px] lg:w-[30%]  transition-all duration-200 scale-90 translate-y-80 ${pop && `!translate-y-0 !scale-100`}`}>
                    <div className="bg-white rounded-xl">
                        <div className="px-6 md:px-9 pt-6  rounded-t-xl font-semibold relative flex justify-between items-center">
                            <div className="text-lg md:text-2xl font-semibold mt-2">Let's Connect</div>

                            <div className="bg-gray-300 text-white rounded-full p-1 cursor-pointer " onClick={() => setPop(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit} // Handle form submission
                            className="space-y-6 shadow-2xl w-full p-9 px-6 md:px-9 rounded-b-xl relative"
                        >
                            <div>
                                <div>Name</div>
                                <input
                                    name="name"
                                    // placeholder="Name*"
                                    type="text"
                                    value={formData.name} // Connect input to state
                                    onChange={handleChange} // Handle change
                                />
                            </div>
                            <div>
                                <div>phno </div>
                                <input
                                    name="phno"
                                    // placeholder="phno No*"
                                    type="number"
                                    value={formData.phno} // Connect input to state
                                    onChange={handleChange} // Handle change
                                />
                            </div>
                            <div>
                                <div>Email</div>
                                <input
                                    name="email"
                                    // placeholder="Email ID*"
                                    type="text"
                                    value={formData.email} // Connect input to state
                                    onChange={handleChange} // Handle change
                                />
                            </div>
                            <div>
                                <div>Query</div>
                                <textarea
                                    name="query"
                                    placeholder="Your query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    className="border w-full rounded-lg border-gray-300 p-3 max-h-[150px] min-h-[60px]"
                                ></textarea>

                            </div>
                            <div>
                                <button
                                    type="submit" // Submit button
                                    className="bg-colorThree mt-4 w-full  rounded-xl py-3 text-base text-white font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Talk;
