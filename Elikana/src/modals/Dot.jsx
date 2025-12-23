import React, { useState } from "react";
import "./dot.css";

const DotItem = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="parent"
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={ setTimeout(()=>{setAnimate(false)},4000)}
    >
      <div className={`parent2 flex items-center justify-center ${animate ? "animate" : ""}`}>
        <div className="dots" />
      </div>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-3">
      {Array.from({ length: 8 }).map((_, row) => (
        <div key={row} className="flex pt-2 justify-between">
          {Array.from({ length: 20 }).map((_, col) => (
            <DotItem key={col} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dot;
