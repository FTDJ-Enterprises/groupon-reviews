import React from "react";

const HalfStar = props => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 35">
      <defs>
        <linearGradient id="half_grad">
          <stop offset="50%" stopColor="gold" />
          <stop offset="50%" stopColor="#a5a8ab" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
                    31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
                    12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill="url(#half_grad)"
      />
    </svg>
  );
};

export default HalfStar;
