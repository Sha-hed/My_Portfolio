import { Link } from 'react-router-dom';
import Logo from '../assets/images/Shahed.jpg'

const Navbar = () => {
    return (
        <div className='bg-gray-900'>
            <div className="w-full md:max-w-6xl mx-auto navbar text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="about">About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href="education">Education</a></li>
                            <li><a href="projects">Projects</a></li>
                            <li><a href="contactMe">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={Logo} />
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="about">About</a></li>
                        <li><a href='skills'>Skills</a></li>
                        <li><a href="education">Education</a></li>
                        <li><a href="projects">Projects</a></li>
                        <li><a href="contactMe">Contact Me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="" target='_blank' className='px-5 py-3 rounded-l-3xl rounded-r-3xl border-2 border-blue-900 my-3 mx-3'>Github Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;