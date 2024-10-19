import SS from '../assets/images/Shahed.jpg'
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
    const handleDownloadResume = () => {
        const pdfUrl = "ShahedsResume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div>
            <section className="max-w-6xl mx-auto min-h-[500px] flex justify-center items-center px-3 mt-3">
                <div className='flex flex-col-reverse md:flex-row gap-3'>
                    {/* Banner Details */}
                    <div className='w-full md:w-[60%] font-bold flex flex-col space-y-3'>
                        <h1 className='text-2xl md:text-4xl'>Hi, I am</h1>
                        <TypeAnimation
                            sequence={[
                                'Kazi Mohammad Shahed',
                                1000,
                            ]}
                            speed={75}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                        {/* <h1 className='text-2xl md:text-4xl'>Kazi Mohammad Shahed</h1> */}
                        <TypeAnimation
                            sequence={[
                                'I am a Junior React Developer',
                                1000,
                                'I am a Junior Frontend Developer',
                                1000,
                                'I am a Junior MERN Stack Developer',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                        {/* <h1 className='text-2xl md:text-4xl'>I am a Web Developer</h1> */}
                        <p className='text-lg md:text-xl'>I am a motivated and versatile Junior Web Developer, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality code and user-friendly web solutions. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution to any development team and achieve great things in the world of web development.</p>
                        <div className='flex'>
                            <button onClick={handleDownloadResume} className='text-left text-xl p-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500'>Check Resume</button>
                        </div>
                    </div>
                    {/* Banner Pic */}
                    <div data-aos='zoom-in' data-aos-duration='1000' className='w-full md:w-[40%] flex justify-center items-center'>
                        <div className='w-72 hover:scale-105 border-4 border-red-900 rounded-full p-5 bg-gray-900'>
                            <img className='rounded-full' src={SS} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;