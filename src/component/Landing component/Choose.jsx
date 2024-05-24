import React from 'react'

const Choose = () => {
    return (

        <div className='lg:h-[400px] relative mt-24'>


            <div className='container'>


                <div className='  grid lg:flex gap-16 h-full z-[10] items-center border-2 rounded-2xl border-colorTwo p-9 mt-6 relative z[]'>





                    <div>

                        <div className='text-4xl font-bold'>
                            Why <span className='text-white font-bold bg-colorThree'> Choose </span> Us?

                        </div>

                        <div className='text-lg mt-9'>
                            We were focused on web development and e-commerce solutions for small and mid-size companies.
                        </div>

                    </div>


                    <div className=''>

                        <img src="Landing/choose.png" className='w-[450px] relative z-[99]' alt="" />
                    </div>

                </div>


            </div>



            {/* <img
                className="w-full h-full object-contain object-right hidden  lg:block relative z-[9]"
                src="Landing/herobg.png"
                alt="background img"
            /> */}

        </div>






    )
}

export default Choose
