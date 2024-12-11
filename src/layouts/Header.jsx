import React, { useState } from "react";
import "./header.scss"
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const logo = require("../assets/images/logo.png")
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="h-[10vh] w-full fixed flex items-center max-[430px]:justify-between px-[10vw] bg-white z-50">
                <div onClick={() => navigate("/")} className="flex h-full w-3/5 z-30 cursor-pointer">
                    <img className="w-2/3 lg:w-1/5" src={logo} alt="" />
                </div>
                <div className={`
                    text-[--primary] lg:static fixed 
                    h-[90vh] left-0 lg:h-[100%] flex-col lg:flex-row 
                    items-center bg-white justify-center lg:justify-between 
                    flex w-full lg:w-2/5 gap-10 z-20
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? "top-[10vh]" : "top-[-100%]"} lg:top-0`}>
                    <h6 className="font-semibold text-lg lg:text-md pt-2 cursor-pointer relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-4 before:bottom-[-15%] before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-200" onClick={() => handleNavigation("/")}> Home</h6>
                    <h6 className="font-semibold text-lg lg:text-md pt-2 cursor-pointer relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-4 before:bottom-[-15%] before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-200" onClick={() => handleNavigation("/services")}> Services</h6>
                    <h6 className="font-semibold text-lg lg:text-md pt-2 cursor-pointer relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-4 before:bottom-[-15%] before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-200" onClick={() => handleNavigation("/about")}> About</h6>
                    <button onClick={() => handleNavigation("/contact")} className="bg-[--primary] text-[--white] text-md font-medium flex justify-center items-center rounded-xl px-3 py-2 border-2 border-[--primary] hover:text-[--primary] hover:bg-white ease-in duration-200" >Contact US</button>
                </div>
                <div className="flex gap-3 lg:hidden w-1/2 justify-end items-center z-60">
                    <label className="lg:hidden block hamburger">
                        <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
};
