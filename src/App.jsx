import { useEffect, useRef, useState } from "react";
import About from './Pages/About'
import Education from './Pages/Education'
// import Navbar from './Pages/Navbar'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import ContactMe from './Pages/ContactMe'
import { Link } from 'react-router-dom'
import Logo from "../src/assets/images/PortLogo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
function App() {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then(res => res.json())
      .then(data => setProject(data));
  }, [])

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const test = useRef();

  const scrollHandler = (elmRef) => {
    console.log(elmRef.current);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  }

  return (
    <div className='text-white relative'>
      {/* Navbar */}
      <div>
        {/* <Navbar></Navbar> */}
        <div className='max-w-6xl mx-auto'>
          <div className="navbar text-white font-bold border-b">
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
                  <li onClick={() => scrollHandler(section1)}><a>About</a></li>
                  <li onClick={() => scrollHandler(section2)}><a>Skills</a></li>
                  <li onClick={() => scrollHandler(section3)}><a>Education</a></li>
                  <li onClick={() => scrollHandler(section4)}><a>Projects</a></li>
                  <li onClick={() => scrollHandler(section5)}><a>Contact Me</a></li>
                </ul>
              </div>
              <div className="">
                <img src={Logo} className="w-3/4 md:w-1/2" />
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li onClick={() => scrollHandler(section1)}><a className="text-xl">About</a></li>
                <li onClick={() => scrollHandler(section2)}><a className="text-xl">Skills</a></li>
                <li onClick={() => scrollHandler(section3)}><a className="text-xl">Education</a></li>
                <li onClick={() => scrollHandler(section4)}><a className="text-xl">Projects</a></li>
                <li onClick={() => scrollHandler(section5)}><a className="text-xl">Contact Me</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link to="https://github.com/Sha-hed" target='_blank' className='px-1 md:px-5 py-3 rounded-l-3xl rounded-r-3xl border-2 border-blue-900 my-3 mx-3'>Github Profile</Link>
            </div>
          </div>
        </div>
      </div>
      {/* About  */}
      <div
        ref={section1}
      >
        <About></About>
      </div>
      {/* Skills */}
      <div
        ref={section2}
      >
        <Skills
          heading="Skills"
          subHeading="Here are some of my skills on which I have been working on for the past 1 years.">
        </Skills>
      </div>
      <div ref={section3}>
        <Education
          heading="Education"
          subHeading="My education has been a journey of self-discovery and growth. My educational details are as follows.">
        </Education>
      </div>
      <div ref={section4}>
        <Projects
          project={projects}
          heading="Projects"
          subHeading="I have worked on a wide range of projects. Here are some of my projects.">
        </Projects>
      </div>
      <div ref={section5}>
        <ContactMe
          heading="Contact"
          subHeading="Feel free to reach out to me for any questions or opportunities!">
        </ContactMe>
      </div>
      <div>
        {/* <Footer></Footer> */}
        <div className="bg-gray-900">
          <div>
            <div className="flex flex-col justify-center items-center py-10 px-2 space-y-4">
              <h1 className="text-xl">Kazi Mohammad Shahed</h1>

              <div className="flex text-2xl gap-10">
                <Link to="https://www.facebook.com/kazi.m.shahed.3" target="_blank"><FaFacebook /></Link>
                <Link to="https://x.com/KaziMohamm1908" target="_blank"><FaTwitter /></Link>
                <Link to="https://www.linkedin.com/in/kazimdshahed/" target="_blank"><FaLinkedin /></Link>
                <Link to="https://www.instagram.com/kazimd.shahed/?hl=en" target="_blank"><FaInstagram /></Link>
              </div>
              <hr />
              <p className="text-xl text-center">&copy; 2024 Kazi Mohammad Shahed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
