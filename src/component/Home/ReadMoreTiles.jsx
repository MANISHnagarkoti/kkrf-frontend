import React, { useEffect, useRef, useState } from "react";

const ReadMoreTiles = ({ children, title }) => {
  const [expand, setExpand] = useState(false);
  const ref = useRef(null);
  const [showbtn, setShowBtn] = useState();
  useEffect(() => {
    // Check if content exceeds 12 lines
    // console.log(ref.current.scrollHeight, ref.current.clientHeight);
    if (ref.current.scrollHeight > ref.current.clientHeight) {
      setShowBtn(true);
    }
  }, []);

  return (
    <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
      <div>
        <div className="text-2xl mt-2 font-semibold">{title}</div>
      </div>

      <div
        ref={ref}
        className={`text-gray-300 mt-12 line-clamp-[9] read-more-content ${
          expand && `!line-clamp-none`
        }`}
      >
        {children}
      </div>

      {showbtn ? (
        expand ? null : (
          <div
            onClick={() => setExpand(true)}
            className="font-semibold text-gray-500 cursor-pointer mt-2 rounded-lg bg-white inline-block p-2 px-3"
          >
            Read more
          </div>
        )
      ) : null}

      {expand && (
        <div
          onClick={() => setExpand(false)}
          className="font-semibold text-gray-500 cursor-pointer rounded-lg bg-white inline-block p-2 mt-9 px-3"
        >
          Show less
        </div>
      )}
    </div>
  );
};

export default ReadMoreTiles;
