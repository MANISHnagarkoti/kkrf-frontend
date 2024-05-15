import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileDevelopment = () => {
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
              Mobile App Development
            </h1>
          </div>
        </div>

        <img src="work/w3.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* Description */}
      <div className="container mt-4">
        In today’s digital age, mobile apps have become an integral part of our
        lives. Whether you’re a startup, a business, or an individual looking to
        bring your ideas to life, mobile app development is the key to reaching
        your audience wherever they are.
        <br />
        <br />
        Mobile apps offer a unique opportunity to engage with your customers and
        users on their smartphones. They provide a seamless and customized user
        experience, enabling you to deliver your services, products, and content
        with ease and accessibility.
        <br />
        <br />
        At KKRF GROUP, we specialize in creating cutting-edge mobile
        applications tailored to your needs. Our skilled team of developers and
        designers is proficient in crafting apps for various platforms,
        including iOS and Android. We follow a systematic and proven approach to
        app development, ensuring high-quality and user-friendly applications.
      </div>

      {/* Process */}
      <div className="bg-colorTwo/90 mt-9 text-white py-12 rounded-lg">
        <div className="container">
          <div className="text-4xl font-semibold text-center text-gray-100">
            <span className="text-colorThree font-semibold"> Mobile </span>{" "}
            Development Process
          </div>

          <div className="mt-6">
            The mobile app development process is a structured journey that
            begins with concept and design, progresses through development and
            rigorous testing, and culminates in a wellcrafted app ready for
            launch. Ongoing maintenance and updates ensure that the app remains
            up-to-date and user-friendly, offering a seamless experience to its
            users. This well-defined process is key to delivering a successful
            mobile app that aligns with your business objectives and user needs.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-9">
            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">1.Design</div>

              <div className="mt-4 text-gray-400">
                During this phase, the app’s user interface (UI) and user
                experience (UX) are designed. Wireframes, mockups, and
                prototypes are created to visualize the app’s layout and
                functionality.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">2.Development</div>

              <div className="mt-4 text-gray-400">
                Skilled developers write the code for the app, bringing the
                design to life. This phase includes frontend and backend
                development, ensuring the app’s functionality and performance.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">3.Testing and QA</div>

              <div className="mt-4 text-gray-400">
                Rigorous testing is conducted to identify and rectify any bugs,
                glitches, or issues. This stage ensures the app is error-free
                and ready for users.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">4.Deployment</div>

              <div className="mt-4 text-gray-400">
                The app is prepared for release on app stores (e.g., Apple App
                Store and Google Play Store). It undergoes a final review, and
                all necessary documentation is provided.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">5.Maintenance and Updates</div>

              <div className="mt-4 text-gray-400">
                Post-launch, new features and improvements are continually
                introduced to enhance the app’s performance and user experience.
                So it requires some new releases for sometime.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">6.Concept and Planning</div>

              <div className="mt-4 text-gray-400">
                The process starts with ideation and market research to define
                the app’s purpose, target audience, and unique selling points.
                Clear objectives are set, and a project plan is created.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types */}

      <div className="mt-24">
        <div className="font-bold text-4xl text-center">
          Type of Mobile Applications
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 container mt-12">
          <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
            <div>
              <div className="text-3xl mt-2 font-semibold">
                Hybrid Applications
              </div>
            </div>

            <div className="text-gray-300 mt-6">
              KKRF GROUP excels in Hybrid App Development, harnessing the power
              of cutting-edge frameworks and technologies to create versatile
              applications that run seamlessly on both iOS and Android
              platforms. Our experienced team of developers combines the
              advantages of web technologies with the performance and user
              experience of native apps, ensuring costeffectiveness, efficient
              maintenance, and a consistent, high-quality user experience. We
              understand the unique needs of businesses
            </div>
          </div>

          <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
            <div>
              <div className="text-3xl mt-2 font-semibold">
                Android Applications
              </div>
            </div>

            <div className="text-gray-300 mt-6">
              In Android App Development, we offer comprehensive expertise in
              crafting tailored solutions for the world’s most popular mobile
              platform. Our seasoned team of developers leverages the latest
              Android technologies to create robust, user-friendly apps that
              cater to your specific business goals. From concept to deployment,
              we ensure your app stands out in the Google Play Store, delivering
              a seamless user experience while maximizing your market reach.
            </div>
          </div>

          <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
            <div>
              <div className="text-3xl mt-2 font-semibold">
                iOS Applications
              </div>
            </div>

            <div className="text-gray-300 mt-6">
              We are specializing in creating exceptional applications for
              Apple’s ecosystem. Our dedicated team of developers, well-versed
              in Swift and Objective-C, collaborates with you to transform your
              unique concepts into polished, high-performance apps. We ensure
              your iOS app not only meets the stringent quality standards of the
              App Store but also delivers an exceptional user experience,
              leveraging the latest iOS features and technologies. Trust kkrf
               to bring your iOS app vision to life, combining
              innovation,
            </div>
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
                What Is Mobile App Development, And Why Is It Important?
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
              Mobile app development is the process of creating software
              applications specifically designed to run on mobile devices like
              smartphones and tablets. It’s important because mobile apps have
              become an integral part of modern life, providing various
              functionalities, entertainment, and convenience. They offer
              businesses a direct channel to engage with customers, improve
              accessibility, and increase brand visibility.
            </div>
          </div>

          <div
            onClick={() => setAcoordian(2)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                What Are The Major Platforms For Mobile App Development, And How
                Do They Differ?
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
              The major mobile app development platforms are iOS (Apple) and
              Android (Google). They differ in terms of programming languages
              and development tools. iOS apps are typically developed using
              Swift or Objective-C and require a Mac computer, while Android
              apps are developed in Java or Kotlin and are more flexible in
              terms of hardware. Developers often choose platforms based on
              their target audience and project requirements.
            </div>
          </div>

          <div
            onClick={() => setAcoordian(3)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                What Are The Key Factors To Consider When Choosing A Mobile App
                Development Approach (Native, Hybrid, Or Progressive Web Apps)?
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
              The choice of development approach depends on various factors:
              Native Apps: Provide the best performance and user experience but
              require separate codebases for iOS and Android. Choose native if
              performance is critical and you have the resources. Hybrid Apps:
              Use web technologies (HTML, CSS, JavaScript) and can be deployed
              on multiple platforms. They offer faster development and reduced
              costs but might not achieve the same level of performance.
              Progressive Web Apps (PWAs): Web apps with app-like features. They
              work across platforms and are easy to update but have limited
              access to device features. Choose PWAs for content-based apps or
              if you want a wider reach.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
