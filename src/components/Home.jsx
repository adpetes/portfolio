import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Face from "../assets/face.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div>
            <img
              src={Face}
              alt="my face"
              className="rounded-full mx-auto w-3/5 border-2 border-white mb-20 md:mb-0"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              My name's Adam - I'm a web developer and love building and designing software.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-800 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
