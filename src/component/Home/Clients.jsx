import React from "react";

const Clients = () => {
  return (
    <div className="mt-24 container">
      <div className="text-4xl font-semibold text-center text-colorTwo">
        <span className="text-colorThree font-semibold"> What Our </span>{" "}
        Clients Say
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-9">
        <div className="border-2 border-colorTwo/20 rounded-2xl  shadow-lg">
          <div className="grid md:flex gap-6 p-9">
            <div className="rounded-full overflow-hidden md:w-[30%] h-[120px]">
              <img
                src="client/clientOne.jpeg"
                className="w-full h-full object-cover"
                alt="client 1"
              />
            </div>

            <div className="md:w-[60%]">
              <div className="font-bold text-xl text-colorTwo">
                <div>Shivam Sharma - Gellete</div>
                <div>Amazing Customer Service</div>
              </div>
              <div className="mt-4 text-gray-600">
                It s been an association of more than 7 years with KKRF Group as
                our Web and Tech partner. They have Built our website,
                E-Commerce platforms and some other digital assets. They provide
                seamless solutions and great customer experience.
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-colorTwo/20 rounded-2xl shadow-lg">
          <div className="grid md:flex gap-6 p-9">
            <div className="rounded-full overflow-hidden md:w-[30%] h-[120px]">
              <img
                src="client/clientTwo.jpeg"
                className="w-full h-full object-cover object-center"
                alt="client 2"
              />
            </div>

            <div className="md:w-[60%]">
              <div className="font-bold text-xl text-colorTwo">
                <div>Vijay Mishra - Eveready</div>
                <div>Happy with Service</div>
              </div>
              <div className="mt-4 text-gray-600">
                KKRF is our web and onshore partner and they are one of the best
                in the industry. They have provided exceptional service for our
                different vertices; they are good at designing, development,
                delivery timelines and competitive prices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
