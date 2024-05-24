import React from 'react'

const Businesses = () => {
    return (

        <div className='  bg-gradient-to-l  font-bold from-[#e4e4e4] from-10%  pt-6 pb-6 ps-6'>
            <div className='container grid  lg:flex gap-16 mt-24'>
                <div className='lg:w-[40%] bg-white flex items-center justify-center p-4'>
                    <div className=''>
                        <div>INDUSTRIES WE WORK FOR</div>
                        <div className=' font-bold text-4xl mt-2'>
                            <div className='font-bold'>Helping</div>
                            <div className='font-bold'><span className='font-bold text-colorThree'>Businesses</span> In All</div>
                            <div className='font-bold'>Domains</div>
                        </div>
                        <div className='mt-4 text-lg'>
                            Our Expertise help Business in All Domain to Shine & Win
                        </div>

                    </div>

                </div>


                <div className='lg:w-[60%] gird grid-cols-3'>

                    <img src="Landing/busi.png" className='w-full h-full object-cover' alt="" />

                </div>
            </div>

        </div>

    )
}

export default Businesses
