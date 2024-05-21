import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  // const [slideTwo, setSlideTwo] = useState(true);
  // const [slideThree, setSlideThree] = useState(true);
  // const [slideFour, setSlideFour] = useState(true);
  // const [slideFive, setSlideFive] = useState(true);
  // const [slideSix, setSlideSix] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  console.log(activeIndex)



  return (
    <div className="pt-16">
      <div className="mt-24">
        <div className="text-4xl font-semibold text-center text-colorTwo">
          <span className="text-colorThree font-semibold"> Plans & </span>{" "}
          Pricing
        </div>

        <div
          data-aos="fade-up"
          className="max-w-[600px] m-auto mt-8 text-center px-6"
        >
          We are among India’s best web solution companies committed to offering
          full ROI-driven customized web services at affordable prices. Due to
          its excellent e-commerce website and graphics designs, KKRF GROUP is
          one of the top web development companies in India.
        </div>
      </div>

      {/* {{{{{{{{{{{first price section start}}}}}}}}}}} */}
      <div className="container md:px-8 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Pagination]}
          grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,

            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,

            },
            1524: {
              slidesPerView: 6,
              spaceBetween: 30,
              initialSlide: 6

            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* slide 3 */}
            <div  className={ `dark-shadow rounded-3xl border-2 border-gray-400  pb-8 `}>
              <div className="bg-colorTwo text-center p-6 py-8 rounded-t-3xl text-white">
                <div className="text-xl font-semibold">Standard</div>
                <div className="text-xl font-semibold">Plan</div>

                <div className="text-xl mt-4">
                  <div className="relative">
                    ₹ 10,000/-
                    <div className="w-[40%] rotate-[-30px] bg-white h-[2px] absolute top-[50%] ms-auto me-auto left-0 right-0"></div>
                  </div>

                  <div> ₹ 7,000/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-black gap-4 mt-8">
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
                <div className="text-center ">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
              </div>

              <div className="w-full rounded-xl md:flex justify-between p-4 mt-4 text-xs text-left">
                <div>
                  {selectedSlide !== 3 ? (
                    <div className="space-y-4 font-semibold">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>5 pages Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name  ( .com .in .org )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting (Unlimited Space)</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>5 pages Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime 24/7 Free Hosting Support</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Unlimited Image & Video Upload</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificates</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>5 Free work Email id </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Live Chat Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 3000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>


              {selectedSlide !== 3 && (
                <div className="flex justify-center mt-6 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(3)}
                  >
                    Read More
                  </div>
                </div>
              )}

            </div>
          </SwiperSlide>

          <SwiperSlide className="scale-90">
            {/* slide 1 p */}
            <div className=" dark-shadow rounded-3xl premium-bg golden-sha pb-8 ">
              <img
                src="premium/star.webp "
                className="absolute top-[-65px] w-32 m-auto left-0 right-0 ms-auto me-auto"
                alt=""
              />
              <div className=" text-center p-6 py-8  text-white mt-14">
                <div className="text-3xl font-semibold">Premium</div>
                <div className="text-2xl font-semibold">Plan</div>

                <div className="text-xl mt-4">
                  <div className="relative">
                    ₹ 17,000/-
                    <div className="w-[40%] rotate-[-30px] bg-white h-[2px] absolute top-[50%] ms-auto me-auto left-0 right-0"></div>
                  </div>

                  <div> ₹ 14,000/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-white gap-4">
                <div className="w-[15%] bg-gray-400 h-[1px]"></div>
                <div className="text-center">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[15%] bg-gray-400 h-[1px]"></div>
              </div>

              <div className="w-full rounded-xl text-xs text-left  text-white p-4 mt-4">
                <div>
                  {selectedSlide !== 2 ? (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>12 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name (.com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>12 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name (.com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime Image & Video Upload</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificates</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 Free work Email id </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Woocommerce Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 3000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedSlide !== 2 && (
                <div className="flex justify-center mt-8 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(2)}
                  >
                    Read More
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* slide 2 */}
            <div className=" dark-shadow rounded-3xl border-2 border-gray-400 pb-8">
              <div className="bg-colorTwo text-center p-6 py-8 rounded-t-3xl text-white">
                <div className="text-xl font-semibold">CUSTOM</div>
                <div className="text-xl font-semibold">Plan</div>

                <div className="text-xl mt-4">
                  <div className="relative">₹ ????/-</div>

                  <div> ₹ ???/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-black gap-4 mt-8">
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
                <div className="text-center ">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
              </div>

              <div className="w-full rounded-xl text-xs text-left mt-4 p-4">
                <div>
                  {selectedSlide !== 1 ? (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Pages: According to requirement</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Pages: According to requirement</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Unlimited Image & Video Upload</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime 24/7 Free Hosting Support</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificates</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>10 Free work Email id </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Live Chat Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 3000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedSlide !== 1 && (
                <div className="flex justify-center mt-6 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(1)}
                  >
                    Read More
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* slide 6  */}

            <div className=" dark-shadow rounded-3xl relative border-2 border-gray-400 pb-8">
              <div className="bg-colorTwo text-center p-6 py-8 rounded-t-3xl text-white">
                <div className="text-lg  font-semibold">
                  Premium Design <div> E-commerce Plan </div>{" "}
                </div>

                <div className="text-xl mt-4">
                  <div className="relative">
                    ₹ 25,000/-
                    <div className="w-[40%] rotate-[-30px] bg-white h-[2px] absolute top-[50%] ms-auto me-auto left-0 right-0"></div>
                  </div>

                  <div> ₹ 18,000/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-black gap-4 mt-8">
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
                <div className="text-center ">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
              </div>

              <div className=" rounded-2xl p-4 text-xs text-left mt-4">
                <div>
                  {selectedSlide !== 6 ? (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>30 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>30 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime 24/7 Free Hosting Support</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>30 Product Listing From Our Side</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>20 Product Categories</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Multi-Vendor Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Premium Design</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificate</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>10 Free Email ID</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Live Chat Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Ecommerce Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Unlimited Images & Videos Upload </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Product Variation Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Auto Invoice Bill Generator Features </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Wallet System Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Order Notification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>OTP Verification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 4000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedSlide !== 6 && (
                <div className="flex justify-center mt-8 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(6)}
                  >
                    Read More
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* slide 4 p */}

            <div className=" dark-shadow rounded-3xl premium-bg golden-sha pb-8">
              <img
                src="premium/star.webp"
                className="absolute top-[-65px] w-32 m-auto left-0 right-0 ms-auto me-auto"
                alt=""
              />
              <div className=" text-center p-6 py-8  text-white mt-14 ">
                <div className="text-3xl font-semibold">Premium</div>
                <div className=" font-semibold text-sm">
                  Multi Vendor Business & E-commerce Plan
                </div>

                <div className="text-xl mt-6">
                  <div className="relative">
                    ₹ 78,000/-
                    <div className="w-[40%] rotate-[-30px] bg-white h-[2px] absolute top-[50%] ms-auto me-auto left-0 right-0"></div>
                  </div>

                  <div> ₹ 55,000/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-white gap-4 mt-">
                <div className="w-[15%] bg-gray-400 h-[1px]"></div>
                <div className="text-center">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[15%] bg-gray-400 h-[1px]"></div>
              </div>

              <div className="rounded-2xl p-4  text-white text-xs text-left">
                <div>
                  {selectedSlide !== 5 ? (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>40 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name (.com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> 50 Product Categories </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>30 Product Listing From Our Side </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>40 pages Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name (.com .in .org )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> 50 Product Categories </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>30 Product Listing From Our Side </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Premium Design</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Multi-Vendor Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime 24/7 Free Hosting Support</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificate</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>20 Free Email ID</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Live Chat Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Multi-Level Ecommerce Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Unlimited Images & Videos Upload </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Product Variation Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Auto Invoice Bill Generator Features </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Wallet System Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Order Notification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>OTP Verification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 4000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedSlide !== 5 && (
                <div className="flex justify-center mt-6 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(5)}
                  >
                    Read More
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* slide 5  */}

            <div className=" dark-shadow rounded-3xl relative border-2 border-gray-400 pb-8">
              <div className="bg-colorTwo text-center p-6 py-8  rounded-t-3xl text-white">
                <div className="text-base font-semibold">
                  Custom Multivendor <div> & Business Plan </div>{" "}
                </div>

                <div className="text-xl mt-4">
                  <div className="relative">₹ ????/-</div>

                  <div> ₹ ???/-</div>
                </div>
              </div>

              <div className="flex justify-center items-center text-black gap-4 mt-8">
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
                <div className="text-center ">
                  <div>Features</div>
                  <div>Include</div>
                </div>
                <div className="w-[20%] bg-gray-300 h-[1px]"></div>
              </div>

              <div className="rounded-2xl p-4 text-xs text-left mt-4 ">
                <div>
                  {selectedSlide !== 4 ? (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Pages: According to requirement</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )e</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Pages: According to requirement</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Domain Name ( .com .in .org )e</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Hosting ( Unlimited Space )</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Website</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Admin Access</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>?? Product Listing From Our Side</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Google Search Console Setup</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Dynamic Multi-Vendor Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Premium Design</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Lifetime 24/7 Free Hosting Support</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>SEO Friendly Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 % Responsive Website </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Payment Gateway Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Social Media Integration</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Call Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Whatsapp Button Integration </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Inquiry Form</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Free SSL Certificate</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>100 Free Email ID</div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Live Chat Integration </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div> Multi-Level Ecommerce Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Unlimited Images & Videos Upload </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Product Variation Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Auto Invoice Bill Generator Features </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Wallet System Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Order Notification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>OTP Verification Features</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>1 Year Free Technical Support For Website</div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src="premium/ttick.webp" className="w-6" alt="" />
                        <div>Annual Renewal For Hosting Rs. 4000</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedSlide !== 4 && (
                <div className="flex justify-center mt-6 text-sm">
                  <div
                    className="m-auto cursor-pointer px-6 py-3 bg-colorThree rounded-xl text-white inline-block"
                    onClick={() => setSelectedSlide(4)}
                  >
                    Read More
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
