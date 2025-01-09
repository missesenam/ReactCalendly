import React from "react";
import logo from "../assets/icon_logo/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center pl-[5px] space-x-14 h-[3rem] border-b fixed bg-primary2 w-[100%] sm:justify-around">
      <div>
        <Link to="/">
          <img src={logo} alt="calendly logo" width="130px" />
        </Link>
      </div>
      <ul className="flex justify-between w-[270px] font-medium capitalize">
        <li>
          <Link to="/individuals">Individuals</Link>
        </li>
        <li>
          <Link to="/teams">teams</Link>
        </li>
        <li>
          <Link to="/enterprise">Enterprise</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
