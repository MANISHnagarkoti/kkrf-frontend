import React, { useEffect, useState } from "react";
import FormPopup from "../FormPopup/FormPopup";

const Talk = () => {

    const [pop, setPop] = useState(false);

 

    return (
        <div className="py-20 bg-colorTwo mt-24">
            <FormPopup setPop={setPop} pop={pop} />
            <div className="text-center text-2xl md:text-4xl text-white">
                <div className="font-semibold">
                    Let's Talk About Your{" "}
                    <span className="text-colorThree font-semibold">Project</span>
                </div>


                <button
                    onClick={() => setPop(true)}
                    className="bg-colorThree mt-12 px-16 py-3 text-white font-semibold text-2xl rounded-lg"
                >
                    Let's Connect
                </button>

            </div>
        </div>
    );
};

export default Talk;
