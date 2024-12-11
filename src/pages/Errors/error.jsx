
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export const Error = () => {
    const img = require("../../assets/images/error.png")
    // const bg = require("../../assets/images/background.png")
    const navigate = useNavigate()

    return (
        <>
            <div className=" w-full h-[90vh] lg:flex justify-center items-center  ">
                <div className="lg:w-1/2 flex flex-col items-center justify-center pt-6 text-xl lg:text-3xl">
                    {/* <div className="absolute left-0 top-0 -z-10 h-full w-full flex justify-center">
                        <img className="h-full w-2/3" src={bg} alt="" />
                    </div> */}
                    <p className="font-bold text-[--primary]">Error 404!</p>
                    <p className="font-bold text-[--secondary]">OOPS!... Seems you got lost</p>
                    <p className="font-bold text-[--primary] mb-4">" Page not Found"</p>
                    <button onClick={() => navigate(`/`)} className="bg-[--primary] text-[--white] text-sm lg:text-xl font-medium flex justify-center items-center rounded-xl px-3 py-1 border-2 border-[--primary] hover:text-[--primary] hover:bg-white  ease-in duration-200" > <MdKeyboardBackspace className="mr-3" /> Back Home</button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img src={img} className=" " alt="Error img" />
                </div>
            </div>
        </>
    );
};
