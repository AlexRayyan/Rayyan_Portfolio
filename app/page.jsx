import React from "react";
import Button from "./components/Button";
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div>
      {/* -----------HOME__PAGE------------- */}
      <div
        id="home"
        className=" h-fit pt-16 lg:pt-0 justify-center lg:min-h-screen flex flex-col gap-10 md:flex-row items-center lg:justify-between text-white overflow-hidden px-5 lg:px-24 bg-[#252525]"
      >
        <div className=" flex flex-col gap-4 lg:gap-5 w-full items-center lg:items-start ">
          <span>
            <p className=" lg:pl-1 text-xl font-medium text-center lg:text-left">
              Hi, I am <br />
            </p>
            <h1 className=" font-bold text-3xl lg:text-7xl text-center lg:text-left">
              Rayyan Sayyed
            </h1>
          </span>

          <p className=" max-w-xl lg:text-xl text-center lg:text-left">
            A passionate <span className="text-[#00c26a]">Game Developer</span>{" "}
            with 2+ years of experience creating{" "}
            <span className="text-[#00c26a]">Exciting Games</span>.
          </p>

          <span className=" w-fit mt-5">
            <Button btnText="Download CV" />
          </span>
        </div>

        <div className=" w-full md:w-[50%] lg:mt-24">
          <Image
            src="/hero.png"
            width={525}
            height={700}
            className="mx-auto w-[260px] h-auto lg:w-[525px] "
            alt="hero-img"
          />
        </div>
      </div>

      {/* -----------ABOUT__PAGE------------- */}
      <div id="about" className=" w-full">
        <About />
      </div>

      {/* -----------PROJECT__PAGE------------- */}
      <div id="projects" className=" w-full">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
