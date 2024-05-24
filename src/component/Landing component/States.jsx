import { motion } from 'framer-motion';
import React from 'react'

const States = () => {

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
        <div className='mt-32 ' style={{ background: "url(herosec/herosecbg.webp)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='bg-black/40'>

                <div className='container   w-full h-full'>
                    <motion.div

                        variants={fadeUp}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"

                        className='p-16 md:p-24 l grid grid-cols-1 lg:grid-cols-3 gap-24'>

                        <motion.div variants={fadeUp} className='bg-white flex flex-col items-center rounded-2xl p-8'>

                            <img src="Landing/sone.png" className='w-24' alt="" />

                            <div className='font-semibold text-2xl text-center'>
                                <div>7 Years of </div>
                                <div>Experience</div>
                            </div>

                        </motion.div >

                        <motion.div variants={fadeUp} className='bg-white flex flex-col items-center rounded-2xl p-8'>

                            <img src="Landing/stwo.png" className='w-24' alt="" />

                            <div className='font-semibold text-2xl text-center'>
                                <div>400+ Websites</div>
                                <div>Delivered</div>
                            </div>

                        </motion.div >



                        <motion.div variants={fadeUp} className='bg-white flex flex-col items-center rounded-2xl p-8'>

                            <img src="Landing/sthree.png" className='w-24' alt="" />

                            <div className='font-semibold text-2xl text-center'>
                                <div>7+ Countries</div>
                                <div>Served</div>
                            </div>

                        </motion.div >



                    </motion.div >



                </div>


            </div>
        </div>
    )
}

export default States
