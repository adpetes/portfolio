import React from "react";
import d2 from "../assets/portfolio/destiny2.png";
import running from "../assets/portfolio/running.png";
import nba from "../assets/portfolio/nba.png";
import puzzle from "../assets/portfolio/puzzle.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: d2,
      link: "http://pimfr.s3-website.us-east-2.amazonaws.com/",
      code: "https://github.com/adpetes/petes-item-manager",
      desc: "A player-aid for the game Destiny 2. Rather than create new projects, I seem to just keep adding to this one",
    },
    {
      id: 2,
      image: running,
      link: "https://adamsrunningstuff.netlify.app/",
      code: "https://github.com/adpetes/RunningProgressApp",
      desc: "A hub for info about my biggest hobby - running! Contains my daily workout routine, best race times, and more",
    },
    {
      id: 3,
      image: nba,
      code: "https://github.com/adpetes/NBA_predict_games",
      desc: "An in-progress machine learning project which aims to predict the outcome of NBA games!",
    },
    {
      id: 4,
      image: puzzle,
      code: "https://github.com/adpetes/sliding-puzzle",
      desc: "An android sliding puzzle game with an AI 'solver' tool which shows an optimal solution to any instance of the puzzle",
    }
  ];

  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="mt-2 text-gray-500"> The favourites of projects I've worked on. </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div key={project.id} className=" shadow-md shadow-gray-600 rounded-lg">
              <div className="rounded-md flex flex-col items-center"> 
                <img
                  src={project.image}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 max-h-20 mt-4"
                />
                <p className="text-center mt-2 mx-2">{project.desc}</p>
              </div>
              <div className="flex items-center justify-center">
                {project.link && <a href={project.link} target="_blank" className="px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>}
                <a href={project.code} target="_blank" className="px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
