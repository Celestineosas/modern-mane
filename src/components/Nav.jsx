import React, { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSelection, setNavSelection] = useState(null)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleNavSelection (currentId){
    setNavSelection(currentId === navSelection ? null : currentId)
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <h2 className="text-white text-2xl font-montserrat leading-normal font-extrabold">
            MODERN MANE
          </h2>
        </a>

        <ul className="flex justify-center items-center  gap-14 max-xl:gap-6 border px-5 py-3 border-white rounded-lg max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a onClick={()=> handleNavSelection(item.label)}
                href={item.href}
                className={`${
                    navSelection === item.label ? "bg-white text-black px-5 py-3 rounded" : "bg-transparent text-white"
                  } font-montserrat leading-normal text-md`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex max-lg:hidden wide:mr-24">
          <Button label="Contact us" backgroundColor="bg-white" />
        </div>
        <button
          className="lg:hidden z-20 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className="text-3xl z-11 text-black" /> 
          ) : (
            <TiThMenu className="text-3xl" /> 
          )}
        </button>

        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-white z-10 text-black transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full"
          }`}
        >
          <ul onClick={toggleMenu} className="flex flex-col space-y-10 items-center h-full py-32">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-black leading-normal text-md"
                >
                  {item.label}
                </a>
              </li>
            ))}
        <div className="flex wide:mr-24">
          <Button label="Contact us" backgroundColor="bg-black" text="text-white"/>
        </div>
          </ul>
   
        </div>
      </nav>
    </header>
  );
};

export default Nav;