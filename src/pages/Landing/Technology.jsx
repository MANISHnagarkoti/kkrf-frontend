import React from 'react'

const Technology = () => {
    return (
        <div>
            <div className='grid lg:flex gap-6 container items-center'>

                <div className='grid grid-cols-4  max-w-[700px] m-auto  lg:w-[70%] mt-32'>

                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/html.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/micro.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/php.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-s border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/angular.jpg" className='w-24 object-contain' alt="" />
                    </div>

                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/jquery.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/nodejs.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/reactjs.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-s border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/wordpress.jpg" className='w-24 object-contain' alt="" />
                    </div>


                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/magento.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-e border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/woo.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/shopify.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-s border-b border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/mysql.jpg" className='w-24 object-contain' alt="" />
                    </div>


                    <div className='border-e  border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/sql.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-e  border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/umbraco.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className=' border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/micro.jpg" className='w-24 object-contain' alt="" />
                    </div>
                    <div className='border-s  border-gray-300 flex justify-center items-center p-6'>
                        <img src="technology/php.jpg" className='w-24 object-contain' alt="" />
                    </div>
                </div>

                <div className='lg:w-[30%]'>

                    <div className='text-4xl bg-colorThree font-bold inline-block text-white'>Technology</div>
                    <div className='mt-4 text-lg'>At KKRF GROUP , we embrace the ever-evolving world of technology to deliver high-quality solutions.</div>


                </div>





            </div>

            <div className="mt-24 bg-colorThree/5 py-8 ">
                <div className="container flex flex-col items-center pt-9"> 
                    <div className="text-3xl md:text-5xl text-center">
                        <div className="font-semibold">Let's Create</div>
                        <div className="font-semibold">
                            <span className="text-colorThree font-semibold"> Experience </span>{" "}
                            with us !
                        </div>
                    </div>

                    <div className="">
                        {/* <div className="w-[200px] border-dotted border-t-2 border-black"></div> */}
                        <img src="experiences/message.jpeg" className=" w-[300px] mix-blend-darken" alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Technology
