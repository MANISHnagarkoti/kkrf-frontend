import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreTiles from "../../component/Home/ReadMoreTiles";


const Webdesigning = () => {
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
              Website Designing Services
            </h1>
          </div>
        </div>

        <img src="work/w3.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* Description */}
      <div className="container mt-4 ">
        Having a strong online presence is crucial for any business in today’s
        digital world. A well-designed website is the foundation of your online
        presence, serving as a virtual storefront that showcases your products,
        services, and brand. A professional, user-friendly, and SEO-friendly
        website not only enhances your credibility but also attracts new
        customers and drives conversions. That’s why website design services are
        crucial for businesses of all sizes and industries.
        <br />
        <br />
        In today’s competitive online marketplace, having a visually appealing
        and functional website is not enough. Your website must be optimized for
        search engines, mobile devices, and user experience to stand out from
        the crowd. That’s why website design services are more important than
        ever. With these services, you can:
      </div>

      {/* Process */}
      <div className="bg-colorTwo mt-9 text-white py-12 rounded-lg">
        <div className="container">

          <div className="text-4xl font-semibold text-center text-gray-100">
            <span className="text-colorThree font-semibold"> Website </span>{" "}
            Design Process
          </div>


          <div className="mt-6">
            The website design and development process is an essential aspect of
            creating an effective online presence. Whether you’re starting a new
            website or revamping an existing one, it’s important to understand
            the steps involved in the process. In this guide, we’ll cover the
            key stages of the website design and development process, from
            concept to launch.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-9">
            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">1.Requirments Gathering</div>

              <div className="mt-4 text-gray-400">
                Before you start designing or developing your website, it’s
                important to define your objectives and goals. What do you want
                to achieve with your website? Who is your target audience? What
                type of content will you be publishing? By answering these
                questions, you’ll be able to create a clear vision for your
                website that guides the entire design and development process.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">2.Research and Planning</div>

              <div className="mt-4 text-gray-400">
                Once you have a clear understanding of your objectives and
                goals, it’s time to do your research. This involves studying
                your target audience, analyzing your competition, and exploring
                the latest design and development trends. The information you
                gather during this stage will help you make informed decisions
                about the design, functionality and content of your website.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">3.WireFrame Designing</div>

              <div className="mt-4 text-gray-400">
                The next step in the process is the design and wireframing
                stage. During this stage, you’ll create a visual representation
                of your website, including its layout, colour scheme, and
                typography. This stage also involves creating wireframes, which
                are rough sketches of each page of your website. The wireframes
                help you visualize the structure and hierarchy of your website
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">4.Website Development</div>

              <div className="mt-4 text-gray-400">
                Once the design and wireframing stage is complete, it’s time to
                start the development process. This involves creating the
                website’s underlying code, integrating the design elements, and
                adding the functionalities you need to achieve your objectives
                and goals. This stage also includes testing and debugging to
                ensure that the website is functioning correctly and meets your
                quality
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">5.Content Creation</div>

              <div className="mt-4 text-gray-400">
                The next stage is content creation. This involves writing,
                editing, and publishing the text, images, and other media that
                will be featured on your website. The content you create should
                be engaging, informative, and optimized for search engines. This
                stage is also an opportunity to create a strong brand voice and
                style that is consistent with your objectives and goals.
              </div>
            </div>

            <div className="border-2 border-colorThree rounded-lg p-6 shadow-colorThree/30 shadow-lg">
              <div className="text-lg">6.Testing</div>

              <div className="mt-4 text-gray-400">
                After Completing the website we do testing of the complete
                website, which includes machine testing and manual testing both,
                we create use cases and remove the bugs where required and share
                final test report with the client. Testing includes Venerability
                testing, Cross browser website testing and device testing for
                website. Cross browser website testing and device testing for
                website
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types */}


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 container mt-12 items-start">
        <ReadMoreTiles title={"Static Website Designing"}>
          A static website is a type of website that consists of a set of HTML
          pages that remain unchanged until they are manually updated. Unlike
          dynamic websites, which retrieve information from a database and
          display it in real-time, static websites are pre-built and display the
          same content to all users.
          <br />
          <br />
          One of the main benefits of a static website is its simplicity.
          Because they do not require a database or server-side scripting, they
          are easy to create, host, and maintain. This makes them ideal for
          small businesses, personal websites, and portfolios, where the focus
          is on showcasing content rather than providing interactive
          experiences.
          <br /> <br />
          Static websites also load faster than dynamic websites, as they do not
          require complex processes to retrieve information from a database.
          This can improve the user experience, especially on mobile devices
          with slow internet connections. Another advantage of static websites
          is their improved security. Because they do not use databases or
          server-side scripting, they are less vulnerable to hacking and other
          security threats.
          <br />
          <br />
          In conclusion, a static website is a great choice for businesses or
          individuals who want a simple, fast, and secure website that showcases
          content without the need for dynamic features. If you’re looking for a
          no-fuss solution for your online presence, a static website is a great
          place to start.
        </ReadMoreTiles>

        <ReadMoreTiles title={"Website Designing Services"}>
          Having a strong online presence is crucial for any business in today’s
          digital world. A well-designed website is the foundation of your
          online presence, serving as a virtual storefront that showcases your
          products, services, and brand. A professional, user-friendly, and
          SEO-friendly website not only enhances your credibility but also
          attracts new customers and drives conversions. That’s why website
          design services are crucial for businesses of all sizes and
          industries.
          <br />
          <br />
          In today’s competitive online marketplace, having a visually appealing
          and functional website is not enough. Your website must be optimized
          for search engines, mobile devices, and user experience to stand out
          from the crowd. That’s why website design services are more important
          than ever
        </ReadMoreTiles>

        <ReadMoreTiles title={"E- commerce websites"}>
          An e-commerce website is an online platform where businesses sell
          their products or services to customers over the internet. It allows
          users to browse through a variety of items, make purchases, and
          complete transactions entirely online. These websites often feature
          secure payment gateways to ensure the safety of financial
          transactions. Ecommerce sites enable businesses to reach a global
          audience, provide convenient shopping experiences, and streamline the
          buying process for both consumers and sellers. They play a pivotal
          role in today's digital economy, facilitating seamless transactions
          and fostering economic growth across various industries.
        </ReadMoreTiles>

        <ReadMoreTiles title={"IDEA BASED WEBSITES"}>
          An idea-based website is a digital platform centered around sharing
          and exploring concepts, innovations, or creative thoughts. Unlike
          traditional websites that focus on selling products or providing
          information, idea-based websites serve as forums for brainstorming,
          collaboration, and inspiration. These sites often feature
          usergenerated content, discussions, and multimedia presentations to
          foster engagement and exchange of ideas among a community of users.
          Idea-based websites.
        </ReadMoreTiles>

        <ReadMoreTiles title={"CORPORATE WEBSITES"}>
          A corporate website serves as the digital face of a company, providing
          a comprehensive overview of its identity, offerings, and values to
          various stakeholders. It acts as a central hub for showcasing products
          or services, sharing company news and updates, and facilitating
          communication with customers, investors, and job seekers. Corporate
          websites are meticulously crafted to reflect the brand's personality
          and establish credibility, often featuring sleek designs, compelling
          content, and user-friendly interfaces. They play a crucial role in
          building brand awareness, fostering customer trust, and driving
          business growth by serving as a primary touchpoint for online
          interactions and engagements. Additionally, corporate websites serve
          as valuable platforms for promoting corporate social responsibility
          initiatives, attracting talent, and maintaining transparent
          communication with stakeholders, contributing to the overall success
          and reputation of the company.
        </ReadMoreTiles>

        <ReadMoreTiles title={"Web Portals"}>
          A web portal website serves as a gateway or centralized access point
          to a variety of information, services, and resources available on the
          internet. It typically offers users a customizable homepage with links
          to news, email, search engines, weather updates, and other commonly
          used features. Web portals often cater to specific interests or
          demographics, such as business professionals, students, or enthusiasts
          of a particular field. They aim to simplify internet navigation by
          providing a single interface where users can access a wide array of
          content and tools. Web portals may also offer personalized content
          based on user preferences, making them convenient hubs for accessing
          online resources efficiently.
        </ReadMoreTiles>
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
                Why A Good Website Design Is Important For A Company
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${active === 1 && `rotate-180`
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
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 1 && `  h-auto overflow-visible mt-6`
                } `}
            >
              Website design is important for several reasons. First and
              foremost, a well-designed website can help to establish
              credibility and build trust with potential customers. When
              visitors come to your website, they will form an initial
              impression of your business based on the design and functionality
              of your website. A poorly designed website may give the impression
              that your business is unprofessional or untrustworthy.
              <br />
              <br />
              In addition to building credibility, website designing is also
              important for creating a positive user experience. A website that
              is easy to navigate and user-friendly can help visitors find the
              information they need quickly and efficiently, which can improve
              engagement and reduce bounce rates. A well-designed website can
              also improve the accessibility and usability of your website,
              making it easier for visitors to find what they need.
            </div>
          </div>

          <div
            onClick={() => setAcoordian(2)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                How Long Does It Take To Design A Website?
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${active === 2 && `rotate-180`
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
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 2 && `  h-auto overflow-visible mt-6`
                } `}
            >
              The time it takes to design a website can vary depending on a
              number of factors, such as the size and complexity of the website,
              the level of customization required, and the availability of
              content and other resources. Typically, a standard website with
              5-15 pages takes around 30 days, while a more complex website with
              custom features and extensive content may take months to Complete
              depending on the scope of work
              <br />
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

          <div
            onClick={() => setAcoordian(3)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                How Much KKRF GROUP Charge For Website Designing.
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${active === 3 && `rotate-180`
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
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 3 && `  h-auto overflow-visible mt-6`
                } `}
            >
              The cost of website designing service depends on the scope of
              work, once we understand the complete scope of work than only we
              can calculate cost and timeline for your project.
            </div>
          </div>

          <div
            onClick={() => setAcoordian(4)}
            className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}
          >
            <div className="font-semibold text-lg flex justify-between items-center gap-4">
              <div className="md:text-xl">
                {" "}
                Can I Make Changes To My Website After You Handover It To Us.
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-all duration-200  ${active === 4 && `rotate-180`
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
              className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 4 && `  h-auto overflow-visible mt-6`
                } `}
            >
              Yes, incase of dynamic website or website supported by a content
              management system you can manage complete content of your website,
              which includes text, images, videos etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdesigning;


