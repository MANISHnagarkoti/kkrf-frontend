import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Career = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const setFile = (e) => {
    if (e.target.files[0].size > 2000000) {
      return alert("please submit file less than 2 mb");
    }

    setResumeFile(e.target.files[0]);
  };

  const cancelFile = () => {
    setResumeFile(null);
  };

  return (
    <div className="container">
      <div className="container text-center space-y-6 mt-9 bg-colorTwo rounded-xl py-9 text-white shadow-md">
        <h1 className="text-4xl font-bold text-gray-100">
          <span className="text-colorThree font-bold"> Join </span> today
        </h1>
        <div className=" text-sm">
          Welcome to our career hub, where opportunities meet ambition. Explore
          roles that inspire, growth that's boundless, and a culture where your
          talents thrive. Join us in shaping the future
        </div>
      </div>

      <form action="">
        <div className="mt-24 font-bold text-4xl text-colorTwo">
          {" "}
          <span className="text-colorThree font-bold">Your </span> Resume
        </div>
        <label
          id="resume"
          className="border-4 border-dashed animate-pulse   border-colorThree/70 rounded-xl text-center p-3 py-6 mt-9 block cursor-pointer"
        >
          {resumeFile ? (
            <div className="font-bold"> {resumeFile.name} </div>
          ) : (
            "Click to submit resume"
          )}
          <input
            type="file"
            name="file"
            className="hidden"
            id="resume"
            onChange={setFile}
          />
        </label>
        {resumeFile && (
          <div className="flex gap-8 items-center">
            {" "}
            <button className="p-3 mt-6 bg-colorThree rounded-lg text-white px-6">
              Sumbit
            </button>{" "}
            <div
              onClick={cancelFile}
              className="p-3 mt-6 border-2 border-colorThree rounded-lg  px-6 cursor-pointer"
            >
              Cancel
            </div>{" "}
          </div>
        )}
      </form>

      <div className="mt-24 font-bold text-4xl text-colorTwo">Opening</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-9">
        <div className="bg-gray-100/80 rounded-lg p-5 border border-gray-200">
          <div className="text-2xl font-semibold">UI/UX Designer</div>

          <div className="flex gap-3 mt-4 text-gray-600">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div>Full time</div>
            </div>

            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div>3 - 4 lakh</div>
            </div>
          </div>

          <div className="mt-3">
            The UI/UX Designer role involves crafting user-friendly interfaces
            for digital products. Responsibilities include user research,
            wireframing, UI design, interaction design, and usability testing.
            Collaboration with cross-functional teams and presentation of design
            concepts are key. Candidates need a designrelated degree,
            proficiency in design tools, and strong communication skills.
          </div>

          {/* <Link
                        to={"/website-types"}
                        className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
                    >
                        Apply
                    </Link> */}
        </div>

        <div className="bg-gray-100/80 rounded-lg p-5 border border-gray-200">
          <div className="text-2xl font-semibold">Backend Developer Php</div>

          <div className="flex gap-3 mt-4 text-gray-600">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div>Full time</div>
            </div>

            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div>3 - 4 lakh</div>
            </div>
          </div>

          <div className="mt-3">
            The Backend Developer role focuses on developing and maintaining
            serverside logic and databases using PHP. Responsibilities include
            coding, debugging, and optimizing backend systems for web
            applications. Candidates need proficiency in PHP programming,
            experience with frameworks like Laravel or Symfony, and knowledge of
            database management systems like MySQL or PostgreSQL.
          </div>
          {/* <Link
            to={"/website-types"}
            className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
          >
            Apply
          </Link> */}
        </div>

        <div className="bg-gray-100/80 rounded-lg p-5 border border-gray-200">
          <div className="text-2xl font-semibold">Digital Marketing</div>

          <div className="flex gap-3 mt-4 text-gray-600">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div>Full time</div>
            </div>

            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div>3 - 4 lakh</div>
            </div>
          </div>

          <div className="mt-3">
            The Digital Marketing position entails strategizing, executing, and
            analyzing online marketing campaigns to drive brand awareness,
            engagement, and conversions. Responsibilities include SEO/SEM
            management, social media marketing, email marketing, and content
            creation. Analyzing campaign performance metrics, optimizing
            strategies, and staying updated on industry trends are crucial.
            Candidates require a strong understanding of digital marketing
            tools, platforms, and analytics, along with excellent communication
            and analytical skills. Experience in campaign management, content
            marketing, and proficiency in tools like Google Analytics, AdWords,
            and social media management platforms are preferred. A bachelor's
            degree in Marketing or related field is advantageous.
          </div>
          {/* <Link
            to={"/website-types"}
            className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
          >
            Apply
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
