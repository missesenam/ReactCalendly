import React from "react";
// Import images
import TeamImage from "../assets/img/team-young-african-people-office-work-table-with-laptops-with-hand-gestures_219728-4724.avif";
import CalendlyImage from "../assets/img/Calendly-Demand-Gen.webp";
import SalesImage from "../assets/img/man-using-air-pods-looking-digital-tablet_23-2148794519.avif";
import RecruitingImage from "../assets/img/medium-shot-smiley-woman-desk_23-2148924767.avif";
import CustomerSuccessImage from "../assets/img/close-up-friends-chatting-pub_23-2149104411.avif";
import EducationImage from "../assets/img/black-young-man-working-laptop-computer-campus-park_116547-87874.avif";
import ArrowIcon from "../assets/icon_logo/arrow-next-small-svgrepo-com.svg";

const Teams = () => {
  return (
    <div>
      <div className="pt-[4rem] sm:w-[70%] sm:mx-auto md:flex md:flex-col md:items-center md:w-[80%] lg:flex-row lg:w-[80%] xl:w-[70%] gap-5">
        <div className="pl-12 sm:mx-auto my-10 lg:w-[60%] lg:pl-0">
          <h1 className="font-bold text-4xl text-primary1">
            <span className="font-bold text-4xl text-primary3">Power up </span>{" "}
            your
          </h1>
          <h1 className="font-bold text-4xl">teams</h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde aliquid et.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde.
          </p>
          <div className="rounded-3xl flex justify-between mt-4 w-[90%] flex lg:w-[100%]">
            <button className="py-2 px-10 bg-primary3 text-primary2 rounded-3xl">
              start for free
            </button>
            <button className="py-2 px-10 bg-primary1 text-primary2 rounded-3xl">
              Contact Sale
            </button>
          </div>
        </div>
        <div className="md:mx-auto">
          <img
            src={TeamImage}
            alt="Team working"
            width="100%"
            className="mx-auto"
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="font-bold text-4xl text-primary6">
          streamline tasks, extend team reach
        </h1>
      </div>

      <div className="pt-[4rem] sm:w-[70%] sm:mx-auto md:flex md:flex-col md:items-center md:w-[80%] lg:flex-row lg:w-[80%] xl:w-[70%] gap-5">
        <div className="md:mx-auto">
          <img
            src={CalendlyImage}
            alt="Calendly Demand Generation"
            width="80%"
            className="mx-auto md:w-[500px]"
          />
        </div>
        <div className="pl-12 sm:mx-auto lg:w-[50%] my-10 lg:pl-0">
          <p className="uppercase text-primary3">automated assignment</p>
          <h1 className="font-bold text-4xl text-primary1">
            Control how your team gets booked
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde aliquid et.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Culpa ut ullam
            possimus quos? Impedit tempora nam unde.
          </p>
          <div className="rounded-3xl flex justify-between mt-4 w-[90%] flex lg:w-[100%]">
            <button className="py-2 px-10 bg-primary3 text-primary2 rounded-3xl">
              start for free
            </button>
            <button className="py-2 px-10 bg-primary1 text-primary2 rounded-3xl">
              Contact Sale
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center md:w-[90%] md-mx-auto">
        <p className="uppercase text-primary3">solutions</p>
        <h1 className="font-bold text-4xl text-primary6">
          The right Calendly for the work you do
        </h1>
      </div>

      <div className="grid gap-5 mt-10 w-[75%] mx-auto sm:w-[90%] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="border rounded-xl">
          <img
            src={SalesImage}
            alt="Sales"
            width="100%"
            className="h-[200px] rounded-t-xl md:h-[150px]"
          />
          <div className="mt-5 pl-5">
            <h1 className="font-bold text-2xl text-primary6">Sales</h1>
            <p className="text-primary7 text-xl">Get to your leads faster</p>
            <div className="my-5 flex items-center space-x-2">
              <a href="#" className="text-primary3 text-lg">
                Learn more
              </a>
              <img src={ArrowIcon} alt="Arrow icon" width="20px" />
            </div>
          </div>
        </div>

        <div className="border rounded-xl">
          <img
            src={RecruitingImage}
            alt="Recruiting"
            width="100%"
            className="h-[200px] rounded-t-xl md:h-[150px]"
          />
          <div className="mt-5 pl-5">
            <h1 className="font-bold text-2xl text-primary6">Recruiting</h1>
            <p className="text-primary7 text-xl">Less emailing, more closing</p>
            <div className="my-5 flex items-center space-x-2">
              <a href="#" className="text-primary3 text-lg">
                Learn more
              </a>
              <img src={ArrowIcon} alt="Arrow icon" width="20px" />
            </div>
          </div>
        </div>

        <div className="border rounded-xl">
          <img
            src={CustomerSuccessImage}
            alt="Customer Success"
            width="100%"
            className="h-[200px] rounded-t-xl md:h-[150px]"
          />
          <div className="mt-5 pl-5">
            <h1 className="font-bold text-2xl text-primary6">
              Customer success
            </h1>
            <p className="text-primary7 text-xl">
              Connect with customers when it matters
            </p>
            <div className="my-5 flex items-center space-x-2">
              <a href="#" className="text-primary3 text-lg">
                Learn more
              </a>
              <img src={ArrowIcon} alt="Arrow icon" width="20px" />
            </div>
          </div>
        </div>

        <div className="border rounded-xl">
          <img
            src={EducationImage}
            alt="Education"
            width="100%"
            className="h-[200px] rounded-t-xl md:h-[150px]"
          />
          <div className="mt-5 pl-5">
            <h1 className="font-bold text-2xl text-primary6">Education</h1>
            <p className="text-primary7 text-xl">Boost student success</p>
            <div className="my-5 flex items-center space-x-2">
              <a href="#" className="text-primary3 text-lg">
                Learn more
              </a>
              <img src={ArrowIcon} alt="Arrow icon" width="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
