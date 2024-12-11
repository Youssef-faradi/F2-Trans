import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
    const logo = require("../assets/images/logo.png")
    const navigate = useNavigate()
    
    return (
        <div className="w-full flex justify-center py-4">
            <div className="bg-gray-200 w-[92%] rounded-xl justify-center" >
                <div className="py-4 flex w-full flex-wrap lg:px-5  ">
                    <div className="w-full lg:w-1/5 flex justify-center items-center">
                        <img className="w-1/2 lg:w-3/4 " src={logo} alt="" />
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <ul>
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">About</li>
                            <li className="">F2 Trans delivers efficient trucking services, connecting cities nationwide. We ensure timely deliveries, optimized routes, and safe handling of diverse cargo.</li>
                        </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/6 pl-7 ">
                        <ul>
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">Pages</li>
                            <li className="cursor-pointer pb-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit flex items-center gap-2 text-[--primary]" onClick={() => navigate("/")} ><FaArrowRightLong />Home</li>
                            <li className="cursor-pointer pb-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit flex items-center gap-2 text-[--primary]" onClick={() => navigate("/services")} ><FaArrowRightLong />services</li>
                            <li className="cursor-pointer pb-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit flex items-center gap-2 text-[--primary]" onClick={() => navigate("/about")} ><FaArrowRightLong />about</li>
                            <li className="cursor-pointer pb-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit flex items-center gap-2 text-[--primary]" onClick={() => navigate("/contact")} ><FaArrowRightLong />contact</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <ul className="">
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">Contact Us</li>
                            <li className="flex items-center gap-2 hover:text-[--secondary] hover:scale-105 duration-200   "><FaMapMarkerAlt />Bd Moulay Abderrahmane, Casablanca, Morocco</li>
                            <li className="flex items-center gap-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit  pt-2"><FaPhoneAlt />  +212 661 21 86 58</li>
                            <li className="flex items-center gap-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit  pt-2"><IoMail /> contact@f2trans.ma</li>
                            <div className="flex  gap-2 hover:text-[--secondary] hover:scale-105 duration-200 w-fit  pt-3 ">
                                <FaClock className="mt-1"/>
                                <div className="text-base lg:text-sm">
                                    <p className="mb-0"> Mon - Fri : 9h00 AM - 16:30 PM</p>
                                    <p className="mb-0">Saturday : 9h00 AM - 12:00 PM</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                    {/* <div className="w-full lg:w-1/6 flex items-center px-5 lg:px-0 pt-3 lg:pt-0">
                        <button onClick={() => navigate("/contact")} className="bg-[--primary] text-[--white] text-md font-medium flex justify-center items-center rounded-xl px-3 py-2 border-2 border-[--primary] hover:text-[--primary] hover:bg-white ease-in duration-200 w-full" >Get In Touch</button>
                    </div> */}
                </div>
                <div className="p-2 w-full flex flex-col items-center">
                    <div className="h-[2px] bg-red-500 w-5/6 rounded-md"></div>
                    <p className="text-[--primary] text-xs lg:text-md pt-3">Copyright © 2024 All Right Reserved by F2 Trans</p>
                </div>
                
            </div>
        </div>
    )
}
