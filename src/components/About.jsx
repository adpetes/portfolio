import React from "react";
import { MdOutlineSportsHandball, MdWork  } from "react-icons/md";
import { FaServer } from "react-icons/fa";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[140vh] md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="bg-gray-500 bg-opacity-30 p-8 rounded-lg flex flex-col gap-8">
          <div className="flex items-center gap-8">
            <MdOutlineSportsHandball size={50} className="flex-shrink-0"/>
            <p className="text-lg">
              Stemming from a love of sports from a young age, I thrive in team environments 
              and have strong communication and leadership skills. I am highly self motivated
              and passionate about software development as much as anything. When I'm not working 
              I love to play or watch sports with friends, go for a run, or play video games!
            </p>
          </div>

          <div className="flex items-center gap-8">
            <MdWork size={50} className="flex-shrink-0"/>
            <p className="text-lg">
              I'm seeking a new role as a web developer.
              I have over a year of professional experience developing front and backend
              systems and am open to all opportunities!
            </p>
          </div>

          <div className="flex items-center gap-8">
            <FaServer  size={50} className="flex-shrink-0"/>
            <p className="text-lg">
              In my previous position as a Junior FullStack Web Developer, I contributed frontend
              systems primarily using React, HTML, and CSS, and used other technologies like AntD,
              Cypress, Jest, React Testing Library, and more. I also designed backend systems and 
              REST APIs with the SpringBoot framework and mySQL databases. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
