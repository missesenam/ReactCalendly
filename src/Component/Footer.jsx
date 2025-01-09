import React from "react";
import arrowDownIcon from "../assets/icon_logo/arrow-down-svgrepo-com.svg"; // Adjust the path based on your project structure

const Footer = () => {
  return (
    <footer className="w-[98%] mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2 md:max-2xl:text-left md:w-[85%] mx-auto text-center">
        <h1 className="font-bold text-3xl text-primary6">Easy</h1>
        <h1 className="font-bold text-3xl text-primary3">ahead</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
          elit ipsum dolor.
        </p>
        <div className="my-5 border w-[80%] py-1 px-2 flex justify-between items-center mx-auto md:max-2xl:mx-0">
          <button className="font-medium">English</button>
          <img src={arrowDownIcon} alt="Dropdown arrow" width="20px" />
        </div>
      </div>

      <div className="w-[85%] mx-auto text-center">
        <h1 className="font-bold text-2xl text-primary6">About</h1>
        <ul className="grid gap-3 text-primary7 capitalize">
          <li>
            <a href="#">about calendly</a>
          </li>
          <li>
            <a href="#">contact sales</a>
          </li>
          <li>
            <a href="#">newsroom</a>
          </li>
          <li>
            <a href="#">careers</a>
          </li>
          <li>
            <a href="#">security</a>
          </li>
        </ul>
      </div>

      <div className="w-[85%] mx-auto text-center">
        <h1 className="font-bold text-2xl text-primary6">Solutions</h1>
        <ul className="grid gap-3 text-primary7 capitalize">
          <li>
            <a href="#">customer success</a>
          </li>
          <li>
            <a href="#">sales</a>
          </li>
          <li>
            <a href="#">recruiting</a>
          </li>
          <li>
            <a href="#">education</a>
          </li>
          <li>
            <a href="#">marketing</a>
          </li>
        </ul>
      </div>

      <div className="w-[85%] mx-auto text-center">
        <h1 className="font-bold text-2xl text-primary6">Popular features</h1>
        <ul className="grid gap-3 text-primary7 capitalize">
          <li>
            <a href="#">embed calendly</a>
          </li>
          <li>
            <a href="#">availability</a>
          </li>
          <li>
            <a href="#">sending notifications</a>
          </li>
          <li>
            <a href="#">using calendly mobile</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
