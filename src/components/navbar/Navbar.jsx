import React from "react";
import myLogo from "../../assets/williamchandlerlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={myLogo} alt="logo" className="mx-2 w-20" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/william-d-chandler/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/wchandler2020">
          <FaGithub />
        </a>
        <a href="#">
          {" "}
          <FaSquareXTwitter />
        </a>
        <a href="#">
          {" "}
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
