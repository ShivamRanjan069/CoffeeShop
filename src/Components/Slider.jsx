import React from "react";
import slide1 from "../assets/flower-1.png";
import slide2 from "../assets/flower-2.png";
import slide3 from "../assets/flower-3.png";
import slide4 from "../assets/flower-4.png";
import slide5 from "../assets/flower-5.png";

const Slider = () => {
  return (
    <div className="relative flex items-center justify-center w-full text-gray-900">
      <button
        aria-label="Slide back"
        type="button"
        className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-50"
      >
        <svg
          width="8"
          height="14"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.or"
          className="w-4 h-4"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 lg:px-14  mx-auto lg:overflow-hidden  lg:gap-[15px]">
        <div className="relative flex flex-shrink-0 w-20 sm:w-auto">
          <img src={slide1} alt="" className="lg:w-60" />
        </div>
        <div className="relative flex flex-shrink-0 w-20 sm:w-auto">
          <img src={slide2} alt="" className="lg:w-60" />
        </div>
        <div className="relative flex flex-shrink-0 w-20 sm:w-auto">
          <img src={slide3} alt="" className="lg:w-60" />
        </div>
        <div className="relative flex flex-shrink-0 w-20 sm:w-auto">
          <img src={slide4} alt="" className="lg:w-60" />
        </div>
        <div className="relative flex flex-shrink-0 w-20 sm:w-auto">
          <img src={slide5} alt="" className="lg:w-60" />
        </div>
      </div>
      <button
        aria-label="Slide forward"
        id="next"
        className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-50"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

    
    </div>


  );
};

export default Slider;
