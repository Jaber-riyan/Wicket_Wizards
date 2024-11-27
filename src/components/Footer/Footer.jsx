const Footer = () => {
    return (
        <div className="bg-[#06091A] relative">
            {/* email send section start */}
            <div className="w-[80%] mx-auto bg-[#FFFFFF26] rounded-3xl p-6 border-2 mb-8 absolute md:-top-[30%] -top-[25%] left-[10%]">
                <div className="bg-[url('https://i.ibb.co.com/DLhx4NY/bg-shadow.png')] bg-cover bg-[#ffffff] rounded-3xl py-20 px-2 text-center p-10">
                    <h2 className="text-3xl font-bold text-[#131313] mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-[#131313B3] font-medium text-xl mb-4">Get the latest updates and news right in your inbox!</p>
                    <div className="md:flex justify-center items-center gap-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Enter Your Email" />
                        </label>
                        <button className="w-full md:w-36 btn mt-2 md:mt-0 bg-gradient-to-r from-[#ed8eba] to-[#fdd057]  font-bold text-[1rem]">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* email send section end */}


            {/* main footer part start  */}
            <div className="border-b w-[80%] mx-auto pb-10 md:pt-44 pt-64">
                <div className="flex justify-center items-center mb-16">
                    <img src="https://i.ibb.co.com/yn2s01y/logo-footer.png" alt="" />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                    <div>
                        <h2 className="font-semibold text-xl text-[#FFFFFF] mb-3">About Us</h2>
                        <p className="font-medium text-[1rem] text-[#FFFFFF99]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl text-[#FFFFFF] mb-3">Quick Links</h2>
                        <ul>
                            <li className="font-medium text-[1rem] text-[#FFFFFF99]">Home</li>
                            <li className="font-medium text-[1rem] text-[#FFFFFF99]">Services</li>
                            <li className="font-medium text-[1rem] text-[#FFFFFF99]">About</li>
                            <li className="font-medium text-[1rem] text-[#FFFFFF99]">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl text-[#FFFFFF] mb-3">Subscribe</h2>
                        <p className="font-medium text-[1rem] text-[#FFFFFF99] mb-3">Subscribe to our newsletter for the latest updates.</p>
                        <div className="md:flex items-center md:gap-0 gap-2">
                            <input type="text" className="grow border-none rounded-l-xl py-3 px-7 flex items-center gap-2" placeholder="Enter Your Email" />
                            <button className="bg-gradient-to-r from-[#ed8eba] to-[#fdd057] py-3 px-7 rounded-r-xl font-bold text-[1rem] border-none w-full md:w-36">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* main footer part end */}

            {/* copyrights section start  */}
            <div className="text-center mt-5 pb-5">
                <h2 className="font-medium text-xs text-[#FFFFFF99]">@2024 Your Company All Rights Reserved.</h2>
            </div>
            {/* copyrights section end  */}
        </div>
    );
};

export default Footer;