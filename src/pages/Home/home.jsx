import { LuNetwork } from "react-icons/lu";
import { GiCargoCrate, GiPathDistance, GiSteeringWheel } from "react-icons/gi";
import { TbClockStar } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { PiTruckDuotone } from "react-icons/pi"


export const Home = () => {
    const Image1 = require("../../assets/images/highway-4697840_1920.jpg")
    const Image2 = require("../../assets/images/premium_pho.png")
    const Image3 = require("../../assets/images/2151541963.jpg")
    const Image4 = require("../../assets/images/306c4a88ca888b04621d5bd2b19db412.png")
    const Image5 = require("../../assets/images/seb-creativo-3jG-UM8IZ40-unsplash1.jpg")


    return (
        <>
            <div className="z-10 pt-5 w-full flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center w-full py-5 px-[5vw] relative h-[30vh] lg:h-[60vh] ">
                    <div className=" relative z-10 before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:bottom-0 before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-300 ">
                        <h1 className="font-semibold lg:text-8xl text-white ">F2 Trans</h1>
                    </div>
                    <div className="">
                        <p className="twxt-sm lg:text-2xl text-white">
                            Connecting Business, Delivering Future
                        </p>
                    </div>
                    <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-no-repeat bg-cover bg-center -z-20 h-full"
                        style={{ backgroundImage: `url('${Image3}')` }}>
                    </div>
                    <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-black opacity-45 -z-20 h-full">
                    </div>
                </div>
                <div className="w-full py-5 flex flex-col justify-center items-center">
                    <div className="pb-5">
                        <h1 className="text-[--primary] font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:-bottom-2 before:left-1/2  before:translate-x-[-50%] before:ease-in before:duration-300">Our Services</h1>
                    </div>
                    <div className="w-[85%] flex flex-wrap justify-center items-center gap-5 pt-4">
                        <div className="w-full lg:w-[45%] flex flex-col gap-2 relative lg:gap-4 p-5 shadow rounded-xl hover:scale-105 duration-200 before:content-[''] before:h-[3px] before:rounded-xl before:absolute before:bg-[--secondary] before:w-0 before:bottom-0 before:left-0 hover:before:w-[100%]  before:ease-in before:duration-300">
                            <GiPathDistance className="text-5xl lg:text-6xl  text-[--third] absolute -top-8" />
                            <h3 className="font-semibold text-[--primary] text-xl lg:text-2xl ">Long-Haul Transportation</h3>
                            <p className="pb-0 text-sm">We offer dependable long-distance trucking services, ensuring the safe and on-time delivery of goods across cities. Our optimized routes and experienced drivers guarantee efficiency and reliability for your cargo.</p>
                        </div>
                        <div className="w-full lg:w-[45%] flex flex-col gap-2 relative lg:gap-4 p-5 shadow rounded-xl hover:scale-105 duration-200 before:content-[''] before:h-[3px] before:rounded-xl before:absolute before:bg-[--secondary] before:w-0 before:bottom-0 before:left-0 hover:before:w-[100%]  before:ease-in before:duration-300">
                            <LuNetwork className="text-5xl lg:text-6xl  text-[--third] absolute -top-8" />
                            <h3 className="font-semibold text-[--primary] text-xl lg:text-2xl ">Route Planning</h3>
                            <p className="pb-0 text-sm">Expert route planning to ensure fast, cost-effective deliveries. We optimize each journey to minimize transit times and ensure your goods reach their destination as efficiently as possible.</p>
                        </div>
                        <div className="w-full lg:w-[45%] flex flex-col gap-2 relative lg:gap-4 p-5 shadow rounded-xl hover:scale-105 duration-200 before:content-[''] before:h-[3px] before:rounded-xl before:absolute before:bg-[--secondary] before:w-0 before:bottom-0 before:left-0 hover:before:w-[100%]  before:ease-in before:duration-300">
                            <GiCargoCrate className="text-5xl lg:text-6xl  text-[--third] absolute -top-8" />
                            <h3 className="font-semibold text-[--primary] text-xl lg:text-2xl ">Specialized Freight</h3>
                            <p className="pb-0 text-sm">We handle delicate, oversized, and unique cargo with great care. Our tailored transport solutions are designed to meet the specific needs of each shipment, ensuring secure delivery.</p>
                        </div>
                        <div className="w-full lg:w-[45%] flex flex-col gap-2 relative lg:gap-4 p-5 shadow rounded-xl hover:scale-105 duration-200 before:content-[''] before:h-[3px] before:rounded-xl before:absolute before:bg-[--secondary] before:w-0 before:bottom-0 before:left-0 hover:before:w-[100%]  before:ease-in before:duration-300">
                            <TbClockStar className="text-5xl lg:text-6xl  text-[--third] absolute -top-8" />
                            <h3 className="font-semibold text-[--primary] text-xl lg:text-2xl ">Same-Day Delivery</h3>
                            <p className="pb-0 text-sm">Our same-day delivery service prioritizes urgent shipments, ensuring your goods are delivered swiftly and securely. We make sure your deliveries meet tight deadlines with minimal hassle.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-evenly w-full py-5 px-[5vw] relative h-[50vh] ">
                    <div className="pb-5 w-full flex flex-wrap gap-3 justify-center items-center ">
                        <h1 className="text-white text-2xl lg:text-3xl font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:-bottom-2 before:left-1/2 before:translate-x-[-50%] before:ease-in before:duration-300">Why Choose Our Company?</h1>
                        <div className="w-full flex flex-wrap justify-center gap-3 pt-3 lg:pt-0">
                            <div className="w-[45%] lg:w-[22%] flex flex-col items-center justify-center gap-4 text-white">
                                <FiPhone className="text-3xl lg:text-6xl" />
                                <h4 className="text-sm lg:text-2xl">24/7 Support</h4>
                            </div>
                            <div className="w-[45%] lg:w-[22%] flex flex-col items-center justify-center gap-4 text-white">
                                <GrMapLocation className="text-3xl lg:text-6xl" />
                                <h4 className="text-sm lg:text-2xl">GPS Tracking</h4>
                            </div>
                            <div className="w-[45%] lg:w-[22%] flex flex-col items-center justify-center gap-4 text-white">
                                <GiSteeringWheel className="text-3xl lg:text-6xl" />
                                <h4 className="text-sm lg:text-2xl">Experienced Drivers</h4>
                            </div>
                            <div className="w-[45%] lg:w-[22%] flex flex-col items-center justify-center gap-4 text-white">
                                <PiTruckDuotone className="text-3xl lg:text-6xl" />
                                <h4 className="text-sm lg:text-2xl">Modern Fleet</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hidden lg:block absolute top-0 left-0 bg-no-repeat bg-cover bg-bottom -z-20 h-full"
                        style={{ backgroundImage: `url('${Image1}')` }}>
                    </div>
                    <div className="w-full  lg:hidden absolute top-0 left-0 bg-no-repeat bg-cover bg-bottom -z-20 h-full"
                        style={{ backgroundImage: `url('${Image5}')` }}>
                    </div>
                    <div className="w-full absolute top-0 left-0  bg-black opacity-45 -z-20 h-full">
                    </div>
                </div>
                <div className="w-5/6 flex flex-col items-center gap-2 lg:gap-5 rounded-xl py-5 ">
                    <div className="pb-5">
                        <h1 className="text-[--primary] font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:-bottom-2 before:left-1/2  before:translate-x-[-50%] before:ease-in before:duration-300">About Us</h1>
                    </div>
                    <div className="bg-[--primary] w-full flex gap-5 relative rounded-xl ">
                        <div className="w-full lg:w-1/2  h-[50vh] flex flex-col items-center justify-center">
                            <h1 className="text-white font-semibold relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-[--secondary]  before:rounded-md ps-3">Who we are?</h1>
                            <p className="text-base lg:text-lg text-white text-center w-5/6 pt-3 lg:pt-0 ">
                                F2 Trans was established to revolutionize the traditional trucking and transportation industry. We are dedicated to providing reliable and efficient logistics solutions, ensuring excellence in every delivery while building lasting partnerships with our clients.
                            </p>
                        </div>
                        <div className="hidden lg:block h-[35vh] absolute -top-10 right-10 lg:h-[61vh] w-full lg:w-[40%] shadow rounded-xl">
                            <img className="h-full w-full rounded-xl duration-300 shadow-lg" src={Image4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-5/6 flex flex-col items-center gap-2 lg:gap-5 rounded-xl py-4   ">
                    <div className="pt-3">
                        <h1 className="text-[--primary] font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:-bottom-2 before:left-1/2  before:translate-x-[-50%] before:ease-in before:duration-300">Contact Us</h1>
                    </div>
                    <div className="pb-3 lg:pb-5 w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <h2 className="font-semibold text-[--primary]">Get In Touch</h2>
                            <p>Feel free to contact us if you have any queries or require more information about our services. We're here to help!</p>
                            <div className="flex flex-col gap-3 pt-3">
                                <input placeholder="Your Full Name" className="w-full px-2 py-2 rounded-md border-1 border-gray-500 focus:outline-[--primary]" type="text" />
                                <input placeholder="Your Email" className="w-full px-2 py-2 rounded-md border-1 border-gray-500 focus:outline-[--primary]" type="email" />
                                <textarea placeholder="Your Message" className="w-full resize-none px-2 py-2  rounded-md border-1 h-[25vh] border-gray-500 focus:outline-[--primary]" name="Message" id=""></textarea>
                                <button className="bg-[--primary] text-[--white] text-md font-medium flex justify-center items-center rounded-xl px-3 py-2 border-2 border-[--primary] hover:text-[--primary] hover:bg-white ease-in duration-200" >Submit</button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center pt-5 lg:pt-0 gap-4 w-full lg:w-1/2 ">
                            <div className="w-full lg:w-5/6 bg-gray-200 rounded-xl p-3">
                                <h4 className="font-semibold text-[--primary]">Contact Information</h4>
                                <p className="mb-1">Phone : +212 661 21 86 58</p>
                                <p className="mb-1">Email : contact@f2trans.ma</p>
                                <p className="mb-1">Address : Bd Moulay Abderrahmane, Casablanca, Morocco</p>
                            </div>
                            <div className="w-full lg:w-5/6  bg-gray-200 rounded-xl p-3 h-[50vh] ">
                                <h4 className="font-semibold text-[--primary]">Our Location</h4>
                                <iframe className="rounded-xl w-full h-[90%] border border-1 border-black " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.6486045586819!2d-7.603664361302916!3d33.597592193332936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd7ade6249a1%3A0x538638fd0804edc3!2sBd%20Moulay%20Abderrahmane%2C%20Casablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1733736340550!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
