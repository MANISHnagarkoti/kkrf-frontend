import { motion } from "framer-motion";
import React from "react";

const Services = () => {
    return (
        <div>
            <div className="container grid lg:flex gap-16">
                <div className="lg:w-[70%] mt-[100px]">
                    <div className="text-4xl font-bold bg-colorThree inline-block">
                        Services
                    </div>

                    <div className="text-lg mt-4">
                        We provide a wide range of services to help businesses succeed in
                        their goals . Our services are designed to meet the unique needs of
                        each client and are delivered by a team of experienced professionals
                    </div>
                </div>

                <div className="lg:w-[30%]">
                    <div>
                        {" "}
                        <img src="Landing/services.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="h-[500px] mt-24 relative">
                <div className="absolute top-0 w-full h-full  flex justify-center items-center text-4xl md:text-6xl text-center ">
                    <div className="text-colorTwo">
                        <div className="font-bold">We Work With The </div>
                        <div className="font-bold">
                            <span className="bg-clip-text  text-transparent bg-gradient-to-r font-bold from-[#02bab2] from-50%  to-[#1e1e1e] to-100%">
                                {" "}
                                Global{" "}
                            </span>{" "}
                            Brands
                        </div>
                    </div>
                </div>

                <img
                    src="Landing/serviceBg.png"
                    className="w-full h-full object-cover"
                    alt=""
                />


            </div>

            <div className="relative grid lg:grid-cols-2 top-[-100px] container gap-16">
                <motion.div 
                
                transition={{ duration: 0.3 }}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
      
                
                className="bg-white rounded-2xl p-9 grid lg:flex shadow-xl gap-6">
                    <div className="lg:w-[40%]">
                        <img src="Landing/workone.png " className="w-[100px] md:w-[150px]" alt="" />
                    </div>

                    <div className="lg:w-[60%] space-y-4">
                        <div className="text-2xl font-semibold">Website Designing</div>
                        <div>
                            Website design is more than just how your website looks .
                            Designing a website with good UI and UX principle is first
                            milestone for a website which can help you to achieve your
                            goals.
                        </div>
                        <div className="bg-colorThree px-4 py-2 rounded-xl text-white font-medium inline-block">
                            Read More
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                      transition={{ duration: 0.3 }}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                
                className="bg-white rounded-2xl p-9 grid lg:flex shadow-xl gap-6">
                    <div className="lg:w-[40%]">
                        <img src="Landing/worktwo.png " className="w-[100px] md:w-[150px]" alt="" />
                    </div>

                    <div className="lg:w-[60%] space-y-4">
                        <div className="text-2xl font-semibold">Website Development</div>
                        <div>
                            Website design is more than just how your website looks . Designing a website with good UI and UX principle is first milestone for a website which can help you to achieve your goals.
                        </div>
                        <div className="bg-colorThree px-4 py-2 rounded-xl text-white font-medium inline-block">
                            Read More
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
