import React from "react";
import "./Scroll.css";

const Scroll = ({ children }) => (
  <div
    style={{
      overflowY: "scroll",
      border: "5px solid black",
      height: "800px"
    }}
  >
    {children}
  </div>
);

export default Scroll;
