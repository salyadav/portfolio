import React from "react";
import userData from "@constants/data";
import Header from "./Header";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Header heading="About Me." />
      {/* <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div> */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact me.
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-400">
                Want to grab a cup of coffee? Drop me an {" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                or ping me on {" "}
                <a
                  href={`mailto:${userData.socialLinks.linkedin}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Linkedin
                </a>{" "} and we will connect. Pinky Promise! 🤙
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Let's work together!
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-400">
                I am seeking a Product Management Intern opportunity for Summer'22. 
                Here's my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Resume.
                </a>{" "}
                If you see us vibing over product ideas, let's connect! 👩‍💻
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 pl-5 border-l-4 border-gray-200">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 mb-4 dark:text-gray-400 "
              >
                {desc}
              </p>
            ))}
            <div className="text-gray-800 text-lg">
              <div>
                <div className="bg-green-600 inline-block py-1 px-2 my-4 font-bold rounded-md text-gray-200 cursor-default">Web Dev</div>
                <div>Javascript, TypeScript, NextJS, React, Webpack, HTML, CSS, Tailwind, SASS, Spring, Java Swing, NodeJS, PHP</div>
              </div>
              <div>
                <div className="bg-green-600 inline-block py-1 px-2 my-4 font-bold rounded-md text-gray-200 cursor-default">Product Planning</div>
                <div>Jira, Trello, Confluence, Miro, Tableau, RawGraph, DataWrapper</div>
              </div>
              <div>
                <div className="bg-green-600 inline-block py-1 px-2 my-4 font-bold rounded-md text-gray-200 cursor-default">User Experience</div>
                <div>Dedoose, Figma, Invision, Typeform, Qualtrics XM</div>
              </div>
              <div>
                <div className="bg-green-600 inline-block py-1 px-2 my-4 font-bold rounded-md text-gray-200 cursor-default">And...</div>
                <div>Ethnographic research, Qualitative coding, Data visualization, Health informatics</div>
              </div>
            </div>
            <div className="w-max my-10"> 
                <Link href="/projects"><button class="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-4 px-8 border rounded-md">
                    See Projects
                </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
