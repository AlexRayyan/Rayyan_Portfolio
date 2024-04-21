import React from "react";
import { skills, socialItems } from "../data";
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className=" w-full flex flex-col py-10 lg:py-0 gap-14 bg-[#272727] min-h-screen px-5 lg:px-24">
      <div className="flex flex-col  lg:items-start lg:flex-row gap-10 items-center lg:gap-24 lg:pt-36 mx-auto w-full lg:w-fit ">
        <div className=" flex flex-col">
          <div className=" w-60 p-[1px] rounded-full bg-gradient-to-b from-[#272727] to-yellow-500 shadow-md h-60 flex items-center justify-center">
            <div className=" w-full h-full rounded-full bg-[#293831]"></div>
          </div>
          <div className=" w-60 p-[1px] rounded-xl bg-gradient-to-r from-[#293831] to-yellow-500 shadow-md -mt-3 z-10 flex items-center justify-center">
            <div className=" w-full h-full bg-[#293831] px-3 py-2.5 rounded-xl text-white flex flex-col gap-1.5 items-center">
              <p className="font-medium text-center">Rayyan F Sayyed</p>

              <div className=" flex items-center gap-3">
                {socialItems.map((item) => {
                  const { id, name, path, icon } = item;
                  return (
                    <a
                      key={id}
                      href={path}
                      className=" bg-white rounded-full flex items-center justify-between p-1 text-blue-950"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-5 text-white w-full lg:w-[65%]">
          <h1 className=" font-bold text-3xl lg:text-5xl text-[#01a35a]">
            About Me
          </h1>

          <h3 className="lg:font-bold font-medium text-xl text-center lg:text-left">
            A passionate Game Developer based in Bangalore, India
          </h3>

          <p className=" max-w-3xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A pariatur
            repellendus ipsam suscipit optio tenetur aspernatur tempora velit
            commodi, dicta error impedit tempore deleniti officia. A, officiis.
            Modi architecto officia sequi, necessitatibus excepturi cumque alias
            dignissimos, nam atque eveniet earum accusantium, aut tempora hic
            distinctio quia fugiat omnis soluta ipsa eligendi officiis odio
            voluptates. Odit omnis quae minima ipsa unde.
          </p>

          <a href="" className=" w-fit mt-3">
            <Button btnText="Know More" icon={<FaLinkedin />} />
          </a>
        </div>
      </div>

      <div className=" flex w-full items-center lg:items-start lg:w-[66.5%] flex-col gap-3 ml-auto">
        <h1 className=" font-bold text-[#01a35a] text-3xl lg:text-5xl">
          Skills
        </h1>
        <p className=" text-white">Here are the skills I Provide</p>

        <div className=" flex items-center justify-center gap-6 flex-wrap mt-5">
          {skills.map((item) => {
            const { id, name, icon } = item;
            return (
              <div
                key={id}
                className=" w-20 h-20 bg-white justify-center p-3 rounded-lg shadow-md flex flex-col gap-1 items-center"
              >
                <span className=" text-2xl">{icon}</span>
                <p className=" font-medium">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
