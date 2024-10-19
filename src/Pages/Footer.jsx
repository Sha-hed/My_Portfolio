import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div>
                <div className="flex flex-col justify-center items-center py-10 px-3 space-y-4">
                    <h1 className="text-xl">Kazi Mohammad Shahed</h1>
                    <div className="flex gap-4 text-xl">
                        <a href="">About</a>
                        <a href="">Skills</a>
                        <a href="">Experience</a>
                        <a href="">Project</a>
                        <a href="">Experience</a>
                    </div>
                    <div className="flex text-2xl gap-10">
                        <Link to="https://www.facebook.com/kazi.m.shahed.3" target="_blank"><FaFacebook/></Link>
                        <Link to="https://x.com/KaziMohamm1908" target="_blank"><FaTwitter/></Link>
                        <Link to="https://www.linkedin.com/in/kazimdshahed/" target="_blank"><FaLinkedin/></Link>
                        <Link to="https://www.instagram.com/kazimd.shahed/?hl=en" target="_blank"><FaInstagram/></Link>
                    </div>
                    <hr />
                    <p className="text-xl text-center ">&copy; 2024 Kazi Mohammad Shahed. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;