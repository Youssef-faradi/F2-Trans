
export const Footer = () => {
    const logo = require("../assets/images/logo.png")

    return (
        <div className="w-full flex justify-center py-4">
            <div className="bg-gray-200 w-[92%] rounded-xl justify-center" >
                <div className="py-4 flex w-full flex-wrap   ">
                    <div className="w-full lg:w-1/5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-1/2 lg:w-1/5">
                        <ul>
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">About</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquid incidunt consequatur quaerat recusandae officia!</li>
                        </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/5">
                        <ul>
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">Services</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquid incidunt consequatur quaerat recusandae officia!</li>
                        </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/5">
                        <ul>
                            <li className="text-xl font-bold text-[--primarry] hover:text-[--secondary] hover:duration-200 pb-2">Contact Us</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquid incidunt consequatur quaerat recusandae officia!</li>
                        </ul>
                    </div>
                </div>
                <div className="p-2 w-full flex flex-col items-center">
                    <div className="h-[2px] bg-red-500 w-5/6 rounded-md"></div>
                    <p className="text-[--primary] text-xs lg:text-md pt-3">Copyright © 2024 All Right Reserved by F2 Trans</p>
                </div>
                
            </div>
        </div>
    )
}
