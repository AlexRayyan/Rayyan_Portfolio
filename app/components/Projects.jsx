"use client";

import React, { useState } from "react";
import { projects } from "../data";
import Image from "next/image";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [substring, setSubstring] = useState(100);

  return (
    <div className="flex flex-col items-center gap-5 bg-[#252525] text-white justify-center lg:items-center w-full min-h-screen px-5 lg:px-24 pt-14 pb-10">
      <h1 className=" font-bold text-3xl lg:text-5xl text-[#01a35a]">
        Projects
      </h1>
      <p className=" text-center">
        Here are some of the projects that I have developed
      </p>

      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-7 mt-5 lg:w-[80%]">
        {projects.map((item) => {
          const {
            id,
            name,
            description,
            img,
            githubLink,
            downloadLink,
            techUsed,
          } = item;
          return (
            <div
              key={id}
              className=" hover:scale-105 duration-200 border border-gray-700 shadow-1 h-fit rounded-lg w-full flex flex-col items-center"
            >
              <div className=" w-full">
                <Image
                  src={img}
                  width={500}
                  height={500}
                  alt="prject-img"
                  className=" w-full h-auto rounded-t-lg object-cover"
                />
              </div>

              <div
                className=" w-full flex flex-col items-center lg:items-start gap-4 rounded-b-lg px-4 py-4
              "
              >
                <h2 className=" font-semibold text-xl">{name}</h2>
                <p
                  onClick={() => setSubstring(description.length)}
                  className={`text-sm max-w-xl font-normal text-center lg:text-left`}
                >
                  {/* {substring 
                    ? description.substring(0, substring) + "..."
                    : description} */}
                  {description.substring(0, substring)}
                </p>
                <span className=" flex items-center gap-3">
                  {techUsed.map((item) => {
                    return (
                      <p
                        key={item}
                        className=" px-2 py-1 rounded-md bg-gray-700 text-sm text-white"
                      >
                        {item}
                      </p>
                    );
                  })}
                </span>
                <div className=" w-full flex items-center gap-4 mt-5 mx-auto">
                  {githubLink && (
                    <a href={githubLink} className="w-full">
                      <Button btnText="Github" icon={<FaGithub />} />
                    </a>
                  )}

                  {downloadLink && (
                    <a href={downloadLink} className=" w-full">
                      <Button btnText="Download" icon={<BsDownload />} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
