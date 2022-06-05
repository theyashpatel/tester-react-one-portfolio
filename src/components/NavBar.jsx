import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-blue-900 text-white">
      <div>
        <img src={Logo} alt="logo" className="w-12" />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-10 cursor-pointer pr-4"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col justify-center items-center">
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">
            <Link
              onClick={() => setNav(!nav)}
              to="contact"
              smooth
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}

      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
