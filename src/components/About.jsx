import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Stemming from a love of sports from a young age, I thrive in team environments 
          and have strong communication and leadership skills. I am highly self motivated, 
          passionate about software development as much as anything. When I'm not working 
          I love to play or watch sports with friends, go for a run, or play video games!
        </p>

        <br />

        <p className="text-xl">
          Having graduated earlier this year, I'm seeking a new role as a web developer.
          I have over a year of professional experience developing front and backend
          systems and am open to all opportunities!
        </p>
      </div>
    </div>
  );
};

export default About;
