import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import './fotter.css'
const Footer = () => {
    return (
        <div className="footer-img">
            <div className=" mt-20">
                <footer className="footer p-10 rounded-lg text-neutral-content">
                    <nav className="text-xl lg:ml-28 text-center">
                        <header className="footer-title font-semibold text-xl text-[#499bae]">CONTACT US</header>
                        <p className="text-[17px]">123 ABS Street, Uni 21, Bangladesh</p>
                        <p className="text-[17px]">+88 123456789</p>
                        <p className="text-[17px]">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-[17px]">Sat - Sun: 10:00 - 23:00</p>
                    </nav>

                    <nav className="lg:ml-[400px] mt-10">
                        <header className="footer-title text-xl text-[#499bae] font-semibold">Follow US</header>
                        <a className="link link-hover text-[17px]">Join us on social media</a>
                        <div className="flex gap-6 mt-4 text-xl">
                            <FaSquareFacebook />
                            <FaInstagramSquare />
                            <FaTwitter />
                        </div>

                    </nav>
                    {/* <nav className="">
                        <header className="footer-title text-xl text-[#499bae] text-[15px] font-semibold">Support</header>
                        <a href="https://discord.com/invite/bTTMvXmmH8" className="link link-hover text-[17px]">Supports</a>
                        <a className="link link-hover text-[17px]">Contact Us</a>
                    </nav> */}
                </footer>
                <div className="divider divider-accent"></div>
                <span className="block text-xl text-white sm:text-center text-[14px] pb-6 p-2">© Copyright 2024 Bistro Boss Restaurant All Rights Reserved.</span>
            </div>
        </div>
    );
};

export default Footer;