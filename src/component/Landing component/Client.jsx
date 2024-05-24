import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'


const Client = () => {
    return (
        <div className='mt-24'>
            <div className='font-bold text-4xl container'>What Our <span className='bg-colorThree text-white font-bold'> Client’s </span> Say</div>


            <div className=' grid lg:grid-cols-2 gap-24 mt-16'>

                <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }} className='bg-gray-100 rounded-2xl lg:rounded-r-2xl flex flex-col items-center p-16 text-center'>



                    <div className='rounded-full w-24 h-24 overflow-hidden'>
                        <img src="client/clientOne.jpeg" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='font-semibold mt-2 text-xl'>Shivam Sharma -</div>
                    <div className=' italic text-2xl mt-2'>Gillete Amazing Customer Service</div>
                    <div className='mt-4'>
                        It s been an association of more than 7 years with KKRF Group as our Web and Tech partner. They have Built our website, E-Commerce platforms and some other digital assets. They provide seamless solutions and great customer experience
                    </div>


                </motion.div >


                <motion.div
                    transition={{ duration: 0.3 }}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }} className='bg-gray-100 rounded-2xl lg:rounded-l-2xl flex flex-col items-center p-16 text-center'>


                    <div className='rounded-full w-24 h-24 overflow-hidden'>
                        <img src="client/clientTwo.jpeg" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='font-semibold mt-2 text-xl'>Vijay Mishra - </div>
                    <div className=' italic text-2xl mt-2'>Eveready Happy with Service</div>
                    <div className='mt-4'>
                        KKRF is our web and onshore partner and they are one of the best in the industry. They have provided exceptional service for our different vertices; they are good at designing, development, delivery timelines and competitive prices.
                    </div>

                </motion.div>

            </div>


            <div className='flex justify-center'>
                <Link to={"/contact-us"}>
                    <div className='bg-colorTwo px-6 py-3 rounded-xl text-lg text-white mt-12'>
                        Connect us
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Client
