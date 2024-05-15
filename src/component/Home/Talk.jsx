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
                    Let's Connect
                </button>
            </div>

            {/* form pop up */}

            <div
                className={`fixed top-0 bg-black/70 w-full h-screen left-0 hidden justify-center items-center pointer-events-none opacity-0 transition-all duration-150 p-6 backdrop-blur-sm z-50 ${pop && `!flex opacity-100 pointer-events-auto`
                    }`}
            >
                <div className="w-full lg:w-[50%] bg-white rounded-2xl p-6 md:p-9">

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

                    <div className=" space-y-6 dark-shadow p-6 rounded-md mt-6">
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
                                className="bg-colorThree mt-6 w-full rounded-xl py-3 text-white font-semibold"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Talk;
