import React, { useState } from "react";


const Question = () => {
    const [active, setActive] = useState(0);

    const setAcoordian = (e) => {
        if (active === e) {
            return setActive(null);
        }

        setActive(e);
    };

    return (
        <div className="mt-24">
            <div className="text-4xl font-semibold text-center text-colorTwo">
                Frequently {" "}
                <span className="text-colorThree font-semibold"> Asked </span> Questions
            </div>

            <div className=" lg:max-w-[70%] px-4 m-auto space-y-6 mt-9">



                <div
                    onClick={() => setAcoordian(1)}
                    className={`bg-gray-300/50 cursor-pointer rounded-xl  overflow-hidden transition-all duration-200  `}
                >
                    <div className={`font-semibold text-lg flex  justify-between items-center gap-4 p-4 py-6 ${active === 1 && `bg-colorThree text-white`}`}>
                        <div className="md:text-xl">
                            How long does it take to design a website ?
                        </div>

                        {

                            active === 1 ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>



                        }

                    </div>

                    <div
                        className={`h-0 overflow-hidden transition-all duration-200 mt-0 p-0 bg-white  ${active === 1 && `h-auto overflow-visible mt-1 `
                            } `}
                    >
                        <div className="p-6">
                            The time it takes to design a website can vary depending on a
                            number of factors, such as the size and complexity of the website,
                            the level of customization required, and the availability of
                            content and other resources. Typically, a standard website with
                            5-15 pages takes around 30 days, while a more complex website with
                            custom features and extensive content may take months to Complete
                            depending on the scope of work
                            <br />
                            At the start of the website design process, we do requirement
                            gathering and work share a timeline and milestones with the client
                            to for the project. This will help to ensure that both of us to
                            have a clear understanding of the scope of the project and the
                            expected timeline for completion. During the design process, all
                            the teams work with each other, such as UI & UX team, HTML
                            developer, web developers and content creators, to ensure that the
                            website is functional and meets the client’s objectives.
                        </div>
                    </div>
                </div>



                <div
                    onClick={() => setAcoordian(2)}
                    className={`bg-gray-300/50 cursor-pointer rounded-xl  overflow-hidden transition-all duration-200  `}
                >
                    <div className={`font-semibold text-lg flex  justify-between items-center gap-4 p-4 py-6 ${active === 2 && `bg-colorThree text-white`}`}>
                        <div className="md:text-xl">
                            Is it custom design or ready-made themes ?
                        </div>

                        {

                            active === 2 ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                        }

                    </div>

                    <div
                        className={`h-0 overflow-hidden transition-all duration-200 mt-0 p-0 bg-white  ${active === 2 && `h-auto overflow-visible mt-1 `
                            } `}
                    >
                        <div className="p-6">
                            At KKRF GROUP, we do not work on ready made themes. We create design
                            from the scratch, starting from mood-board finalisation. We have a
                            great UI and UX expert who create write frames first and than
                            artworks.
                        </div>
                    </div>
                </div>




                <div
                    onClick={() => setAcoordian(3)}
                    className={`bg-gray-300/50 cursor-pointer rounded-xl  overflow-hidden transition-all duration-200  `}
                >
                    <div className={`font-semibold text-lg flex  justify-between items-center gap-4 p-4 py-6 ${active === 3 && `bg-colorThree text-white`}`}>
                        <div className="md:text-xl">
                        Do you also help in housing. Payment gateway etc ?
                        </div>

                        {

                            active === 3 ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                        }

                    </div>

                    <div
                        className={`h-0 overflow-hidden transition-all duration-200 mt-0 p-0 bg-white  ${active === 3 && `h-auto overflow-visible mt-1 `
                            } `}
                    >
                        <div className="p-6">
                        Yes, we offer assistance with housing solutions and integrate
                        payment gateways into websites.
                        </div>
                    </div>
                </div>




                
                <div
                    onClick={() => setAcoordian(4)}
                    className={`bg-gray-300/50 cursor-pointer rounded-xl  overflow-hidden transition-all duration-200  `}
                >
                    <div className={`font-semibold text-lg flex  justify-between items-center gap-4 p-4 py-6 ${active === 4 && `bg-colorThree text-white`}`}>
                        <div className="md:text-xl">
                        Do you provide support after website delivery ?
                        </div>

                        {

                            active === 4 ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                        }

                    </div>

                    <div
                        className={`h-0 overflow-hidden transition-all duration-200 mt-0 p-0 bg-white  ${active === 4 && `h-auto overflow-visible mt-1 `
                            } `}
                    >
                        <div className="p-6">
                        Yes, as a web development company, we offer ongoing support after
                        website delivery. Our standard package includes 2 years of
                        comprehensive service to ensure your website remains functional and
                        up-to-date.
                        </div>
                    </div>
                </div>




        

             
            </div>
        </div>
    );
};

export default Question;
