import React from "react";
import CountUp from "react-countup";

const OurStats = () => {
  return (
    <div className=" bg-gradient-to-r from-colorTwo from-40%  to-colorTwo/90 to-90% py-9 rounded-b-3xl">
      <div className="flex mt-4 text-white justify-between gap-9 flex-wrap  md:text-2xl container">
        <div className="">
          <div className="">
            <span className="text-2xl md:text-4xl font-bold text-colorThree">
              <CountUp

                start={300}
                end={7}
                duration={3}
              />
            </span>{" "}
            Years
          </div>
          <div>of Experience</div>

        </div>

        <div>
          <div>
            <span className="text-2xl md:text-4xl font-bold text-colorThree">
              <CountUp

                start={0}
                end={400}
                duration={3}
              />
            </span>{" "}
            +
          </div>
          <div>Website delivered</div>
        </div>

        <div>
          <div>
            <span className="text-2xl md:text-4xl font-bold text-colorThree">
              <CountUp

                start={300}
                end={7}
                duration={3}
              />
            </span>{" "}
            +
          </div>
          <div>Countries severed</div>
        </div>
      </div>
    </div>
  );
};

export default OurStats;

