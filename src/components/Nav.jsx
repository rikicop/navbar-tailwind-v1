import React, { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

//import Button from "./Button";

const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
                >
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Designer
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {/*  <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
                    {open ? <FaWindowClose /> : <FaBars />}
                </div>
                {/*  overflow-scroll max-h-[85vh] <- Permite Scroll en Landscape*/}
                {/* portrait:pt-[200px] mobile orientation changed */}
                {/* 'raw': '(max-height: 1234px),(min-width:920px)' */}
                <ul
                    className={`overflow-scroll max-h-[85vh]  flex flex-col justify-center items-center  md:overflow-hidden md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto peque:pt-[200px] transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"
                        } `}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* <Button>Get Started</Button> */}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
