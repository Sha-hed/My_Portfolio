import Heading from "../components/Heading";
import logo from '../assets/icons/SEC_logo-removebg-preview.png';
import sgc from '../assets/icons/SGC_Logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Education = ({ heading, subHeading }) => {
    return (
        <div className="max-w-6xl mx-auto my-10">
            <Heading
                heading={heading}
                subHeading={subHeading}
            ></Heading>
            <div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
                    <li>
                        <div className="timeline-middle">
                            <div className="w-16 ">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="timeline-start m-10 bg-gray-900 p-3 rounded-xl">
                            <div className="flex items-center">
                                <div className="w-16">
                                    <img src={logo} alt="" />
                                </div>
                                <div>
                                    <h1>Sylhet Engineering College, Sylhet</h1>
                                    <h1>B.Sc in Computer Science and Engineering (CSE)</h1>
                                </div>
                            </div>
                            <div className="my-2 pl-3">
                                <p>Currently pursuing a B.Sc. in Computer Science and Engineering (CSE) at Sylhet Engineering College. Passionate about Software Development, with a keen interest in solving complex problems and exploring new technologies. Experienced in competitive programming with proficient knowledge in Data Structures, Algorithms, and Programming Languages like C++ and Java. I have honed my skills by solving over 500 problems across various online judges including Codeforces, Codechef, HackerRank and more.</p>
                            </div>
                        </div>
                        <div className="timeline-end ">
                            <time className="font-bold text-white ">February 2022-December 2026</time>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <div className="w-16 ">
                                <img src={sgc} alt="" />
                            </div>
                        </div>
                        <div className="timeline-start">
                            <time className="text-white font-bold">July 2018-April 2020</time>
                        </div>
                        <div className="timeline-end m-10 bg-gray-900 p-3 rounded-xl">
                            <div className="flex items-center gap-5">
                                <div className="w-16">
                                    <img src={sgc} alt="" />
                                </div>
                                <div>
                                    <h1>Sylhet Govt. College, Sylhet</h1>
                                    <h1>Higher Secondary Certificate, Sylhet Board</h1>
                                </div>
                            </div>
                            <div className="my-2 pl-3">
                                <p>I have successfully completed my Higher Secondary Certificate (HSC) from Sylhet Govt. College. My time there was marked by a blend of academic rigor and extracurricular engagement, which helped shape my analytical skills and foster a strong sense of community. The enriching environment and supportive faculty played a pivotal role in my personal and intellectual growth, laying a solid foundation for my future endeavors.</p>
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Education;