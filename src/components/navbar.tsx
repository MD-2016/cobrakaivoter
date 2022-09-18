import React, { useEffect, useRef, useState } from "react";
//import { FaBars } from "react-icons/fa";
import { links } from "./data";
//import { IoMdClose } from "react-icons/io";
const SideBar = () => {
    const [openSide, setOpenSide] = useState(false);

    return (
        <>
            <nav className="shadow-md">
                <div className="container m-auto px-20 py-4 flex justify-between items-center">
                    <div className="logo text-blue-600 ">
                        <h3 className="text-2xl">Logo</h3>
                    </div>
                    <button
                        className="block text-2xl text-blue-600 hover:text-blue-800"
                        onClick={() => setOpenSide(!openSide)}
                    >

                    </button>
                </div>
            </nav>
            <div
                className={`side-bar fixed top-0 p-3 bg-white  w-screen h-screen sm:w-2/4  lg:w-1/4  transform ${!openSide ? "-translate-x-full" : "tranlate-x-0"
                    }`}
            >
                <div className=" w-full  font-bold flex justify-between items-center ">
                    <h3 className="text-2xl text-blue-700 text-center block">Logo</h3>
                    <span
                        className="block text-red-700 text-2xl"
                        onClick={() => setOpenSide(false)}
                    >
                        {" "}

                    </span>
                </div>

                <ul className="text-gray-800 grid mt-5 ">
                    {links.map((link) => {
                        return (
                            <li
                                key={link.id}
                                className=" link py-3 capitalize hover:bg-blue-400 hover:pl-2 "
                            >
                                <a href="#" className="groub block">
                                    {link.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default SideBar;