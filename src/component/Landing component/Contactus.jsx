import React, { useState } from "react";
import ThankyouPop from "../../component/ThankyouPop/ThankyouPop";

const Contactus = () => {


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
        <div className='grid lg:grid-cols-2 gap-16 container mt-24'>


            <div>
                <div className='font-bold text-4xl'>Contact <span className='font-bold text-colorThree'>Us</span></div>

                <div className='mt-6'>
                    <div className='text-2xl text-medium'>Better yet, see us in person!</div>
                    <div>We love our customers, so feel free to to reach out to us for any requirements.</div>
                </div>

                <div className='mt-6'>
                    <div className='text-2xl text-medium'>Phone:</div>
                    <div>+91 85 9535 7170</div>
                </div>

                <div className='mt-6'>
                    <div className='text-2xl text-medium'>Send Email:</div>
                    <div>info@kkrfgroup.com</div>
                </div>

            </div>



            <div className="bg-gray-100 rounded-xl">
                <ThankyouPop pop={pop} setPop={setPop} />
                <div className="px-6 md:px-9 pt-6  rounded-t-xl font-semibold relative flex justify-center items-center">
                    <div className="text-2xl font-semibold mt-2 text-center">Get In Touch</div>
                </div>
                <form
                    onSubmit={submitData} // Handle form submission
                    className="space-y-6 shadow-2xl w-full p-9 px-6 md:px-9 rounded-b-xl relative"
                >
                    <div>
                        <input
                            name="name"
                            placeholder="Enter Your Name"
                            type="text"
                            className='rounded-2xl py-4 bg-none'
                            value={formData.name}
                            onChange={collectData} // Collect form data
                        />
                    </div>
                    <div>
                        <input
                            name="phno"
                            placeholder="Enter Your Mobile No.*"
                            type="number"
                            value={formData.phno}
                            className='rounded-2xl py-4 bg-none'
                            onChange={collectData}
                        />
                    </div>
                    <div>


                        <input
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                            className='rounded-2xl py-4'
                            value={formData.email}
                            onChange={collectData}
                        />
                    </div>
                    <div>
                        <textarea
                            name="query"
                            placeholder="Your query"
                            value={formData.query}
                            onChange={collectData}
                            className="border w-full rounded-2xl border-gray-300 p-3 max-h-[150px] min-h-[60px]"
                        ></textarea>

                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit" // Submit button
                            className="bg-colorTwo mt-4  inline-block px-8  rounded-xl py-3 text-base text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default Contactus
