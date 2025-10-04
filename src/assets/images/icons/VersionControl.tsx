import React from "react";

const VersionControl = () => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2"
  >
    <defs>
      <style>
        {`
          .a {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        `}
      </style>
    </defs>
    <path
      className="a"
      d="M4.21,22.12a2.87,2.87,0,0,0,0,3.77L22.12,43.8a2.87,2.87,0,0,0,3.77,0l17.9-17.91a2.85,2.85,0,0,0,0-3.77L25.89,4.21A2.68,2.68,0,0,0,24,3.51h0a2.66,2.66,0,0,0-1.88.71Z"
    />
    <line className="a" x1="26.33" y1="17.85" x2="30.15" y2="21.67" />
    <line className="a" x1="17.4" y1="8.92" x2="21.67" y2="13.19" />
    <circle className="a" cx="24" cy="32.41" r="3.3" />
    <circle className="a" cx="24" cy="15.52" r="3.3" />
    <circle className="a" cx="32.48" cy="24" r="3.3" />
    <line className="a" x1="24" y1="29.11" x2="24" y2="18.82" />
  </svg>
);

export default VersionControl;
