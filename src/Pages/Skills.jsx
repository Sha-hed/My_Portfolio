import Heading from "../components/Heading";
import html from '../assets/icons/Html.svg'
import css from '../assets/icons/CSS.svg'
import tailwind from '../assets/icons/Tailwind.svg'
import javascript from '../assets/icons/Javascript.svg'
import react from '../assets/icons/React.svg'
import nodejs from '../assets/icons/Nodejs.svg'
import expressJs from '../assets/icons/Express.svg'
import mongodb from '../assets/icons/MongoDb.svg'
import firebase from '../assets/icons/Firebase.svg'
import git from '../assets/icons/Git.svg';
import github from '../assets/icons/Github.svg'
import vscode from '../assets/icons/VScode.svg';
import netlify from '../assets/icons/netlify.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Skills = ({ heading, subHeading }) => {
    return (
        <div className="w-full md:max-w-6xl mx-auto my-10">
            <Heading heading={heading} subHeading={subHeading}></Heading>
            <div className="flex flex-wrap justify-center items-center gap-10 my-10">
                <div data-aos="fade-up" data-aos-duration='300'>
                    <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                        <h1 className="text-center text-3xl text-white font-bold mb-8 underline">Frontend</h1>
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={html} alt="" />
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={css} alt="" />
                                </div>
                                <p>CSS</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={tailwind} alt="" />
                                </div>
                                <p>Tailwind</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={javascript} alt="" />
                                </div>
                                <p>Javascript</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={react} alt="" />
                                </div>
                                <p>React</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration='300'>
                    <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                        <h1 className="text-center text-3xl text-white font-bold underline mb-8">Backend</h1>
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={nodejs} alt="" />
                                </div>
                                <p>Node Js</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={expressJs} alt="" />
                                </div>
                                <p>Express Js</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={mongodb} alt="" />
                                </div>
                                <p>MongoDB</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={firebase} alt="" />
                                </div>
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration='300'>
                    <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                        <h1 className="text-center text-3xl text-white font-bold underline mb-8">Others</h1>
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={git} alt="" />
                                </div>
                                <p>Git</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={github} alt="" />
                                </div>
                                <p>Github</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={netlify} alt="" />
                                </div>
                                <p>Netlify</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                                <div className="w-8">
                                    <img src={vscode} alt="" />
                                </div>
                                <p>VS Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;