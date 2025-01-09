import React from "react";
import logo from "../assets/icon_logo/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center pl-[5px] space-x-14 h-[3rem] border-b fixed bg-primary2 w-[100%] sm:justify-around">
      <div>
        <a href="index.html">
          <img src={logo} alt="calendly logo" width="130px" />
        </a>
      </div>
      <ul className="flex justify-between w-[270px] font-medium capitalize">
        <li>
          <a href="individuals.html">individuals</a>
        </li>
        <li>
          <a href="teams.html">teams</a>
        </li>
        <li>
          <a href="enterprise.html">enterprise</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
