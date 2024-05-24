import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                // delay:0.05,
                staggerChildren: 0.3,
                duration: 0.1,
                type: "spring",
                stiffness: 60,
            },
        },
    };
    
    return (
        <div>
            <div className="lg:h-[400px] relative ">
                <div className="container">
                    <div className=" lg:absolute top-0 grid lg:flex gap-16 h-full z-[40] items-center">
                        <div className="">
                            <img src="Landing/expertise.png" className="w-[450px]" alt="" />
                        </div>

                        <div>
                            <div className="text-4xl">
                                Our <span className="text-colorThree text-6xl"> Expertise</span>
                            </div>

                            <div className="text-lg mt-9">
                                We were focused on web development and e-commerce solutions for
                                small and mid-size companies.
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="w-full h-full object-contain object-right transform scale-x-[-1] hidden  lg:block"
                    src="Landing/herobg.png"
                    alt="background img"
                />
            </div>

            <div className="bg-gray-100 container mt-24">
                <motion.div 
            
                variants={fadeUp}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"

                className="grid grid-cols-1 lg:grid-cols-3 py-16 gap-16">
                    <motion.div variants={fadeUp} className="flex flex-col items-center py-9  bg-white p-6 space-y-4 rounded-2xl">
                        <img src="Landing/websites.png" className="w-24" alt="" />

                        <div className="text-center text-2xl ">
                            <div className="font-semibold">Corporate Website </div>
                            <div className="font-semibold">Designing</div>
                        </div>

                        <div className="text-center">
                            A corporate website serves as the digital face of a company,
                            providing a comprehensive overview of its identity, offerings and
                            values to varoius stakeholders,
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center py-9  bg-white p-6 space-y-4 rounded-2xl">
                        <img src="Landing/websites.png" className="w-24" alt="" />

                        <div className="text-center text-2xl ">
                            <div className="font-semibold">E-Commerce </div>
                            <div className="font-semibold">Website</div>
                        </div>

                        <div className="text-center">
                            An e-commerce website is an online platform where businesses sell
                            their products or services to customers over the internet. It
                            allows users to browse through a variety of items, make purchases,
                            and complete transactions entirely online.
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center py-9  bg-white p-6 space-y-4 rounded-2xl">
                        <img src="Landing/websites.png" className="w-24" alt="" />

                        <div className="text-center text-2xl ">
                            <div className="font-semibold">Idea- Based </div>
                            <div className="font-semibold">Designing</div>
                        </div>

                        <div className="text-center">
                            An idea-based website is a digital platform centered around
                            sharing and exploring concepts, innovations, or creative thoughts.
                            Unlike traditional websites that focus on selling products or
                            providing information, idea-based websites serve as forums for
                            brainstorming, collaboration, and inspiration.
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Expertise;
