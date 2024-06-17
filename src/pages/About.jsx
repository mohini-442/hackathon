import React from "react";
import about from '../assets/images/about.png';

const About = () => {
  return (
    <div className=" min-h-[90vh]">
      <div className="max-w-[1140px] mx-auto px-3">
        <p className="text-5xl text-[#A178B9] font-bold pt-20 relative after:absolute after:w-[288px] after:h-1 after:bg-[#A178B9] after:bottom-[-4%] after:left-0">
          ABOUT ME
        </p>
        <div className="flex flex-col-reverse pb-12 lg:flex-row flex-wrap">
          <div className="lg:w-7/12">
            <p className="text-white text-xl pt-5 leading-6">
              Hi, I'm mohini! I'm a passionate front-end developer with a knack
              for creating visually appealing, user-friendly, and responsive web
              applications.
            </p>
            <p className="text-white text-xl pt-1 leading-6">
              Front-End Development I specialize in building interactive and
              responsive web interfaces. My expertise lies in: HTML & CSS:
              Crafting semantic, accessible, and maintainable code. JavaScript:
              Implementing dynamic functionality and enhancing user experience.
              React.js: Building scalable and efficient user interfaces with
              state management. Tailwind CSS: Styling applications with
              utility-first CSS framework for rapid UI development. Responsive
              Design: Ensuring that websites look great on all devices, from
              desktops to mobile phones.
            </p>
            <p className="text-white text-xl pt-1 leading-6">
              Above all, I am grateful for the chance to pursue my passions and
              to collaborate with others to create innovative and engaging work.
            </p>
          </div>
          <div className="lg:w-5/12 pt-6">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
