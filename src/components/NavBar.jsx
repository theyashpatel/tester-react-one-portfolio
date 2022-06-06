import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Yash</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
