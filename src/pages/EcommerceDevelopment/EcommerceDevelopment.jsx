import React, { useState } from "react";
import { Link } from "react-router-dom";

const EcommerceDevelopment = () => {
  const [active, setActive] = useState(0);

  const setAcoordian = (e) => {
    if (active === e) {
      return setActive(null);
    }

    setActive(e);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="h-[200px] relative">
        <div className=" absolute top-0 bg-colorThree/80 right-0 left-0 h-full flex items-center">
          <div className="container">
            <h1 className="text-2xl lg:text-4xl font-semibold text-colorTwo">
              E-Commerce Development
            </h1>
          </div>
        </div>

        <img src="work/w3.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* Description */}
      <div className="container mt-4">
        E-commerce has become an integral part of modern business. With the
        increasing popularity of online shopping, it has become essential for
        businesses to have an online presence to reach out to their customers.
        kkrf offers comprehensive e-commerce website
        development services to help businesses establish a strong online
        presence.
        <br />
        <br />
        Our team of experienced developers and designers work closely with
        clients to create customized e-commerce websites that cater to their
        specific business needs. We understand that every business is unique and
        requires a personalized approach to its e-commerce website development.
        That is why we offer tailor-made solutions that are designed to help
        businesses grow and succeed.
        <br />
        <br />
        We use the latest technologies and tools to create user-friendly,
        responsive, and feature-rich e-commerce websites that offer an
        exceptional online shopping experience to customers. Our websites are
        designed to be easy to navigate, secure, and reliable. We ensure that
        the website design is visually appealing and reflects the brand image of
        the business.
      </div>

      {/* Process */}
      <div className="bg-colorTwo/90 mt-9 text-white py-12 rounded-lg">
        <div className="container">
          <div className="text-4xl font-semibold text-center text-gray-100">
            <span className="text-colorThree font-semibold"> Process </span> for
            ECommerce Development
          </div>

          <div className="mt-6">
            We follow the Agile Methodology for our Design and Development
            Processes. We do process driven project execution so that we can
            help businesses to establish a strong online presence and reach out
            to their customers. It involves requirement gathering, Project
            documentation, project planning etc. to deliver a flawless project
            in decided timelines.
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="mt-24">
        <div className="text-4xl font-semibold text-center ">
          Frequently Asked Questions
        </div>

        <div className=" lg:max-w-[70%] px-4 m-auto space-y-6 mt-9">
          <div
            onClick={() => setAcoordian(1)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4 py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                How Long Does It Take To Design And Develop An E-Commerce
                Website
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${
                    active === 1 && `rotate-180`
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${
                active === 1 && `  h-auto overflow-visible mt-6`
              } `}
            >
              Design and development process of an e-commerce website depends on
              the scope of work and it can vary from projects to projects. For a
              standard e-commerce website it takes around 30 working days to
              design, develop, test and deployment of the website
            </div>
          </div>

          <div
            onClick={() => setAcoordian(2)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                Do You Work On Readymade Themes Or Custom Designs.
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${
                    active === 2 && `rotate-180`
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${
                active === 2 && `  h-auto overflow-visible mt-6`
              } `}
            >
              At KKRF GROUP, we do not work on ready made themes. We create
              design from the scratch, starting from mood-board finalisation. We
              have a great UI and UX expert who create write frames first and
              than artworks.
            </div>
          </div>

          <div
            onClick={() => setAcoordian(3)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                How Much Experience KKRF GROUP Has In E-Commerce.
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${
                    active === 3 && `rotate-180`
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${
                active === 3 && `  h-auto overflow-visible mt-6`
              } `}
            >
              KKRF GROUP was established in 2017 and Developed first e-Commerce
              application in 2017, it’s been more than 7 years we are working on
              e-commerce website design and development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopment;
