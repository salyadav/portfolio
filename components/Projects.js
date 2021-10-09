import React from "react";
import userData from "@constants/data";
import Header from "./Header";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Header heading="Projects." />
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-10">
          <div className="max-w-6xl mx-auto pt-10 text-3xl font-bold text-gray-700 dark:text-gray-200 border-b border-b-4 border-gray-300 dark:border-gray-200">
            Personal
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
            {userData.projects.map((proj, idx) => (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${idx + 1}`}
                key={idx}
              />
            ))}
          </div>
          <div className="max-w-6xl mx-auto pt-10 text-3xl font-bold text-gray-700 dark:text-gray-200 border-b border-b-4 border-gray-300 dark:border-gray-200">
            Course
          </div>
        </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden rounded-md">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-105 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-5 left-5 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <div className="absolute bottom-5 left-5 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </div>
      </div>
    </a>
  );
};
