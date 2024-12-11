import { LuNetwork } from "react-icons/lu";
import { GiCargoCrate, GiPathDistance, GiSteeringWheel } from "react-icons/gi";
import { TbClockStar } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { PiTruckDuotone } from "react-icons/pi";


export const Services = () => {
    const Image1 = require("../../assets/images/highway-4697840_1920.jpg")
    const Image2 = require("../../assets/images/HeroSec.jpg")
    const Image3 = require("../../assets/images/premium_pho.png")
    const Image4 = require("../../assets/images/seb-creativo-3jG-UM8IZ40-unsplash1.jpg")



    return (
        <>
            <div className="z-10 pt-5">
                <div className="flex justify-center items-center w-full py-5 px-[5vw] relative h-[30vh] lg:h-[50vh] ">
                    <div className=" relative z-10 before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:bottom-0 before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-300 ">
                        <h1 className="font-semibold lg:text-8xl text-white ">Servies</h1>
                    </div>
                    <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-no-repeat bg-cover bg-center -z-20 h-full"
                        style={{ backgroundImage: `url('${Image2}')` }}>
                    </div>
                    <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-black opacity-45 -z-20 h-full">
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-5 ">
                    <div >
                        <h1 className="text-[--primary] font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-[--secondary] before:w-10 before:-bottom-2 before:left-1/2 before:translate-x-[-50%] before:ease-in before:duration-300">Services Overview</h1>
                    </div>
                    <div className="w-5/6 flex flex-wrap py-4 lg:py-5" >
                        <div className="w-full lg:w-1/2 flex jus items-center">
                            <p className="text-base lg:text-lg w-full lg:w-5/6"><span className="font-semibold relative text-[--primary] text-2xl lg:text-3xl ps-3 before:content-[''] before:rounded-md before:absolute before:bg-[--secondary] before:h-full before:w-1 before:left-0 before:top-0 ">F2 Trans</span> excels in providing efficient and reliable trucking services, seamlessly connecting cities nationwide. With our modern fleet and skilled drivers, we ensure secure and timely deliveries, tailored to meet the unique needs of each client. Through optimized route planning and advanced GPS tracking, we guarantee cost-effective and transparent transportation. Whether handling delicate shipments or managing urgent deliveries, F2 Trans is committed to delivering excellence with every load, building trust as a dependable partner for businesses across the country.</p>
                        </div>
                        <div className="w-full lg:w-1/2 h-[50vh] ">
                            <img className="rounded-xl h-full w-full shadow-md" src={Image3} alt="img" />
                        </div>
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
                        <h1 className="text-white text-2xl lg:text-3xl font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-10 before:-bottom-2 before:left-1/2 before:translate-x-[-50%] before:ease-in before:duration-300">Why Choose Our Services?</h1>
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
                        style={{ backgroundImage: `url('${Image4}')` }}>
                    </div>
                    <div className="w-full absolute top-0 left-0  bg-black opacity-45 -z-20 h-full">
                    </div>
                </div>
            </div>
        </>
    )
}