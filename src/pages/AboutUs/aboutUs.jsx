import { FaRegLightbulb  } from "react-icons/fa";
import { PiTruckDuotone, PiUsersThree } from "react-icons/pi";


export const AboutUs = () => {
    const Image1 = require("../../assets/images/21515418371.jpg")
    const Image2 = require("../../assets/images/21860.jpg")
    const Image3 = require("../../assets/images/2151541913.jpg")
    const Image4 = require("../../assets/images/values.png")

    return (
        <div className="z-10  pt-5 ">
            <div className="flex justify-center items-center w-full py-5 px-[5vw] relative h-[30vh] lg:h-[50vh] ">
                <div className=" relative z-10 before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-7 before:bottom-0 before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-300 "> 
                    <h1 className="font-semibold lg:text-8xl text-white ">About Us</h1>
                </div>
                <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-no-repeat bg-cover bg-center -z-20 h-full"
                    style={{ backgroundImage: `url('${Image1}')` }}>
                </div>
                <div className="w-[90%] absolute top-0 left-[5%] rounded-xl bg-black opacity-45 -z-20 h-full">
                </div>
            </div>
            <div className="py-5 flex flex-col items-center gap-5">
                <div className="w-5/6 flex flex-col lg:flex-row justify-center gap-5 rounded-xl pt-3">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                        <h1 className="text-[--primary] font-semibold text-4xl pb-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-2/3 before:w-1 before:bg-[--secondary]  before:rounded-md ps-3">About Us</h1>
                        <p className="text-base lg:text-lg">
                            F2 Trans was established to revolutionize the traditional trucking and transportation industry. We are dedicated to providing reliable and efficient logistics solutions, ensuring excellence in every delivery while building lasting partnerships with our clients.
                        </p>
                    </div>
                    <div className="h-[35vh] lg:h-[50vh] w-full lg:w-3/5 shadow">
                        <img className="h-full w-full rounded-xl hover:scale-105 duration-300" src={Image4} alt="" />
                    </div>
                </div>

                <div className="w-5/6 flex flex-col-reverse lg:flex-row justify-center gap-5 rounded-xl ">
                    <div className="h-[35vh] lg:h-[50vh] w-full lg:w-3/5 shadow">
                        <img className="h-full w-full rounded-xl hover:scale-105 duration-300" src={Image3} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                        <h1 className="text-[--primary] font-semibold text-4xl pb-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-2/3 before:w-1 before:bg-[--secondary]  before:rounded-md ps-3"> Our Values </h1>
                        <p className="text-base lg:text-lg">At F2 Trans, our values drive everything we do. We prioritize integrity, reliability, and customer focus, ensuring trust in every partnership. With a commitment to innovation and teamwork, we continually improve our services while embracing sustainability for a better future.                        </p>
                    </div>
                </div>

                <div className="w-5/6 flex flex-col lg:flex-row justify-center gap-5 rounded-xl ">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                        <h1 className="text-[--primary] font-semibold text-4xl pb-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-2/3 before:w-1 before:bg-[--secondary]  before:rounded-md ps-3">Our Mission</h1>
                        <p className="text-base lg:text-lg">Our mission is to provide reliable and efficient transportation solutions that drive business success and connect communities. We achieve this through innovation, unwavering quality, and a steadfast commitment to safety and customer satisfaction.                        </p>
                    </div>
                    <div className="h-[35vh] lg:h-[50vh] w-full lg:w-3/5 shadow">
                        <img className="h-full w-full rounded-xl hover:scale-105 duration-300" src={Image2} alt="" />
                    </div>
                </div>
                
            </div>
            <div className="w-full py-5 flex flex-col justify-center items-center">
                <div className="pb-5">
                    <h1 className="text-[--primary] font-bold relative before:content-[''] before:h-[3px] before:rounded-md before:absolute before:bg-red-600 before:w-7 before:-bottom-2 before:left-1/2 hover:before:w-[100%] before:translate-x-[-50%] before:ease-in before:duration-300">Why Choose Us </h1>
                </div>
                <div className="w-[85%] flex flex-col lg:flex-row justify-center items-center gap-5">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-4 text-center p-5 shadow rounded-xl hover:scale-105 duration-200">
                        <PiTruckDuotone className="text-5xl lg:text-7xl  text-[--third]" />
                        <h3 className="font-semibold text-[--primary] lg:text-2xl">Reliable Deliveries</h3>
                        <p>On-time deliveries with precision, ensuring your goods reach their destination safely and efficiently.</p>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-4 text-center p-5 shadow rounded-xl hover:scale-105 duration-200">
                        <FaRegLightbulb  className="text-5xl lg:text-7xl  text-[--third]" />
                        <h3 className="font-semibold text-[--primary] lg:text-2xl">Innovative Solutions</h3>
                        <p>Leveraging technology to streamline logistics and provide tailored services for your unique needs.</p>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-4 text-center p-5 shadow rounded-xl hover:scale-105 duration-200">
                        <PiUsersThree className="text-5xl lg:text-7xl  text-[--third]" />
                        <h3 className="font-semibold text-[--primary] lg:text-2xl">Customers Focus</h3>
                        <p>Dedicated support and personalized care to build long-lasting partnerships with our clients.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
