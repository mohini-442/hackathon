import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(true);

  function nav() {
    setShow(!show);
    document.body.classList.toggle("max-lg:!overflow-hidden");
  }

  return (
    <div className="min-h-[10vh]">
      <div className="max-w-[1040px] mx-auto pt-[19px] px-3">
        <div className="flex justify-end lg:justify-around items-center">
          <div className="pt-3">
            <ul
              className={`flex items-center justify-center gap-6 lg:gap-40 mobileView ${
                show ? "right-[-100%]" : "right-0"
              }`}
            >
              <li onClick={nav}>
                <Link
                  className="after:w-[100%] after:absolute after:left-0 after:bg-[#A178B9] after:h-[2px] relative after:bottom-[-6px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-white text-[16px] font-semibold leading-normal no-underline"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li onClick={nav}>
                <Link
                  className="after:w-[100%] after:absolute after:left-0 after:bg-[#A178B9] after:h-[2px] relative after:bottom-[-6px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-white text-[16px] font-semibold leading-normal no-underline"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li onClick={nav}>
                <Link
                  className="after:w-[100%] after:absolute after:left-0 after:bg-[#A178B9] after:h-[2px] relative after:bottom-[-6px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-white text-[16px] font-semibold leading-normal no-underline"
                  to="/projects"
                >
                  MY PROJECTS
                </Link>
              </li>
            </ul>
          </div>
          <label className="lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative pl-2">
                <span className="flex bg-[#fff] h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-[#fff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-[#fff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-[#fff] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-[#fff] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
