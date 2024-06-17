import React from "react";
import coder from "../assets/images/coder.png";

const Home = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center relative">
      <div className="flex items-center justify-center flex-col pt-24">
        <h2
          className="text-[#A178B9] text-5xl ps-24 font-black tracking-widest"
          data-aos="fade-up"
          data-aos-delay="2800"
          once="true"
        >
          I'M{"...."} MOHINI
        </h2>
        <p
          className="text-lg font-semibold text-white lg:absolute top-[36%] uppercase right-[25%]"
          data-aos="fade-up"
          data-aos-delay="2800"
        >
          <span>a passionate front-end</span>
        </p>
        <p
          className="text-lg font-semibold text-white lg:absolute top-[39%] uppercase right-[22%]"
          data-aos="fade-up"
          data-aos-delay="2800"
        >
          <span className="">developer</span>
        </p>
        <img src={coder} alt="coder" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Home;
