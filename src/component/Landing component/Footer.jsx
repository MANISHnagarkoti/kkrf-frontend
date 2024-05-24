import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className=" bg-colorTwo mt-24 pt-16 ">
            <div className="rounded-2xl container">


                <div className="grid gap-4 md:flex justify-between items-start">

                    <div className="text-xl text-white">#1 website designing company in Delhi NCR</div>


                    <div className="text-colorThree text-lg">
                        <div>Follow us on</div>
                        <div className="flex gap-4 text-2xl mt-2">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/profile.php?id=61559481387781&mibextid=ZbWKwL"
                            >
                                <ion-icon
                                    name="logo-facebook"
                                    className="cursor-pointer"
                                ></ion-icon>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/groupkkrf?igsh=MWt4OTN4ajM3aHNudA=="
                            >
                                <ion-icon
                                    name="logo-instagram"
                                    className="cursor-pointer"
                                ></ion-icon>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/company/kkrf-group/"
                            >
                                <ion-icon
                                    name="logo-linkedin"
                                    className="cursor-pointer"
                                ></ion-icon>
                            </a>
                        </div>
                    </div>


                </div>

                <div className="grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-9 lg:gap-6 text-gray-200">
                    <div className="space-y-8  font-medium text-lg text-colorThree">
                        <div>
                            <div className=" underline">info@kkrfgroup.com</div>
                        </div>

                        <div>
                            <div>Call us</div>
                            <div className="flex gap-4 items-center mt-4">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                <div>+91 85 9535 7170</div>

                            </div>
                        </div>

                    </div>


                    <div>

                        <ul className="space-y-3 text-lg">
                            <li className="font-bold text-xl text-white">Company</li>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about-us"}>About us</Link></li>
                            <li><Link to={"/career"}>Career</Link></li>
                            <li><Link >Clients</Link></li>
                            <li><Link>Blogs</Link></li>
                            <li><Link to={"/contact-us"}>Contact</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>

                        <ul className="space-y-3 text-lg">
                            <li className="font-bold text-xl text-white">Services</li>
                            <li><Link to={"/web-designing"}>Website Designing</Link></li>
                            <li><Link to={"/web-development"}>Website Development</Link></li>
                            <li><Link to={"/mobile-development"}>Mobile Development</Link></li>
                            <li><Link to={"/ecommerce-development"}>E-commerce website Development</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="">
                    <div className="border-t border-colorTwo/20 mt-24 py-4 text-gray-400 text-xs font-normal">
                        Copyright 2017 2024 KKRF Group. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
