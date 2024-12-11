

export const ContactUs = () => {
    return (
        <>
            <div className="py-3 lg:py-5 px-[7vw] w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="font-semibold text-[--primary]">Get In Touch</h2>
                    <p>Feel free to contact us if you have any queries or require more information about our services. We're here to help!</p>
                    <div className="flex flex-col gap-3 pt-3">
                        <input placeholder="Your Full Name" className="w-full px-2 py-2 rounded-md border-1 border-gray-500 focus:outline-[--primary]" type="text" />
                        <input placeholder="Your Email" className="w-full px-2 py-2 rounded-md border-1 border-gray-500 focus:outline-[--primary]" type="email" />
                        <textarea  placeholder="Your Message" className="w-full resize-none px-2 py-2  rounded-md border-1 h-[25vh] border-gray-500 focus:outline-[--primary]" name="Message" id=""></textarea>
                        <button  className="bg-[--primary] text-[--white] text-md font-medium flex justify-center items-center rounded-xl px-3 py-2 border-2 border-[--primary] hover:text-[--primary] hover:bg-white ease-in duration-200" >Submit</button>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-col items-center pt-5 lg:pt-0 gap-4 w-full lg:w-1/2 ">
                    <div className="w-full lg:w-5/6 bg-gray-200 rounded-xl p-3">
                        <h4 className="font-semibold text-[--primary]">Contact Information</h4>
                        <p className="mb-1">Phone : +212 661 21 86 58</p>
                        <p className="mb-1">Email : contact@f2trans.ma</p>
                        <p className="mb-1">Address : Bd Moulay Abderrahmane, Casablanca, Morocco</p>
                    </div>
                    <div className="w-full lg:w-5/6  bg-gray-200 rounded-xl p-3 h-[50vh] ">
                        <h4 className="font-semibold text-[--primary]">Our Location</h4>
                        <iframe className="rounded-xl w-full h-[90%] border border-1 border-black " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.6486045586819!2d-7.603664361302916!3d33.597592193332936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd7ade6249a1%3A0x538638fd0804edc3!2sBd%20Moulay%20Abderrahmane%2C%20Casablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1733736340550!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
