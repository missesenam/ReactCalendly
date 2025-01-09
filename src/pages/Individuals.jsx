import React from "react";
// Import images
import CalendlyIT from "../assets/img/Calendly-IT.webp";
import CalendlyRecruiting from "../assets/img/Calendly-Recruiting.webp";
import CalendlyEducation from "../assets/img/Calendly-Education.webp";
import WavyShapeBackground from "../assets/img/wavy-shape-business-background-paper-cut-style_677411-920.avif";

const Individuals = () => {
  return (
    <>
      <div className="pt-[4rem] sm:w-[70%] sm:mx-auto md:flex md:w-[90%] lg:w-[80%] xl:w-[80%] xl:gap-14">
        <div className="pl-12 sm:mx-auto md:w-[60%] my-10">
          <h1 className="font-bold text-4xl">The genius way to work</h1>
          <h1 className="font-bold text-4xl text-primary3">better</h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde aliquid et.
          </p>
          <button className="px-9 py-3 bg-primary1 text-primary2 rounded-3xl mt-5">
            Sign up for free
          </button>
        </div>
        <div className="md:mx-auto">
          <img
            src={CalendlyIT}
            alt="Calendly IT"
            width="80%"
            className="mx-auto md:w-[400px]"
          />
        </div>
      </div>

      <div className="pt-[4rem] sm:w-[70%] sm:mx-auto md:flex md:w-[90%] lg:w-[80%] xl:w-[80%] xl:gap-14">
        <div className="md:mx-auto">
          <img
            src={CalendlyRecruiting}
            alt="Calendly Recruiting"
            width="80%"
            className="mx-auto md:w-[400px]"
          />
        </div>
        <div className="pl-12 sm:mx-auto md:w-[60%] my-10">
          <p className="mt-1 text-primary4 text-sm uppercase">
            a curated calendar
          </p>
          <h1 className="font-bold text-4xl">Book up efficiency</h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde aliquid et.
          </p>
        </div>
      </div>

      <div className="pt-[4rem] sm:w-[70%] sm:mx-auto md:flex md:w-[90%] lg:w-[80%] xl:w-[80%] xl:gap-14">
        <div className="pl-12 sm:mx-auto md:w-[60%] my-10">
          <p className="mt-1 text-primary4 text-sm uppercase">
            automated notifications and follow-ups
          </p>
          <h1 className="font-bold text-4xl">
            Work like you have a personal assistant
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde aliquid et.
          </p>
        </div>
        <div className="md:mx-auto">
          <img
            src={CalendlyEducation}
            alt="Calendly Education"
            width="80%"
            className="mx-auto md:w-[400px]"
          />
        </div>
      </div>

      <div
        className="bg-blue-500 w-[95%] h-[250px] mx-auto bg-[url('/assets/img/wavy-shape-business-background-paper-cut-style.avif')] text-center lg:text-left lg:pl-10"
        style={{ backgroundImage: `url(${WavyShapeBackground})` }}
      >
        <h1 className="font-bold text-primary2 text-4xl lg:w-[350px]">
          Find just-right plans for individuals and small teams
        </h1>
        <button className="px-8 py-2 bg-primary2 text-primary1 rounded-3xl mt-5">
          Sign up for free
        </button>
      </div>
    </>
  );
};

export default Individuals;
